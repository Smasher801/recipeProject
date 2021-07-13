import React , {useState , useEffect } from 'react';
import Header from './Component/Header';
import Recipe from './Component/Recipe';
import "./App.css";
import Axios from 'axios';



const App = () => {

  

  const[search , setSearch] = useState("pasta");
  const[recipe , setRecipe] = useState([]);
  const[error , setError] = useState(null);


   useEffect(  () => {
         getRecipe();
         
  }, [] );

   const black = "#000000";
     const [bg , setBg]  = useState(black);
      const bgChange = () => {
        if( bg == black ){
        let newBg = "#ff0000";
        setBg(newBg);
        }
        else {
          setBg(black);
        }
         
      }
      


  
  
   
  const getRecipe = async () =>  {   
    try{
    const res = await Axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
        
    
    setRecipe(res.data.meals);
    }
    
     catch ( err ) {
         console.log(`this is occuring........ ${err}`); 
         
   }     
  }

   
   
   
   
  
  

  const onInputChange = (e) => {
    setSearch(e.target.value);
  }


  const onSearchClick = () => {
     getRecipe();
  }
  


  return (
       <div className = "App" >
           
           
          <Header  search = {search} 
              onInputChange = {onInputChange}  
              onSearchClick = {onSearchClick}
              />  
            
          <Recipe recipe = {recipe} 
          bg = {bg}
          bgChange = {bgChange} 
          
          
           />  

          
         
       </div>
  );
}
export default App;
