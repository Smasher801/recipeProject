import React from 'react';
import './Recipe.css';



const Recipe = (props) => {

      
    
    return( 

            
    <div>
              {   
                  props.recipe.map( curElem => (
        <div className = "contain me-3 ms-3" >
                <div className = "position-relative" >
                <h1 className = "heading mb-4 " > <a href = {curElem.strSource} className = "link" target = "_blank" > {curElem.strMeal} </a> <button onClick = {props.bgChange}  style = { {color : props.bg}} className = "position-absolute top-0 end-0 me-5 mt-2 align1" > <i class="fa fa-heart-o "  aria-hidden="true"></i> </button>  </h1>
                </div>
                <div className = "d-flex "   > 
                   <div className = "left12" >
                   <img  className = "image ms-5 mt-5" src = {curElem.strMealThumb} />
                   </div>
                    <div className = "right12 ms-5 " >
                        
                        <div className = "ms-3" >      
                        <p className = "mb-0" >   Category of the meal - <span>  {curElem.strCategory} </span>     </p> 
                        <p  >   Area of the meal -  {curElem.strArea }       </p> 
                        </div>
                        <div className = "ms-3" >  
                            <span  > Ingredients </span>
                            <div className = "scrPro" > 
                                {/* Ingredients content */}
                               <div className = "ms-4 mt-2" > 
                              <p> {curElem.strIngredient1} ---- {curElem.strMeasure1}    </p>  
                              <p> {curElem.strIngredient2} ---- {curElem.strMeasure2}    </p>  
                              <p> {curElem.strIngredient3} ---- {curElem.strMeasure3}    </p>  
                              <p> {curElem.strIngredient4} ---- {curElem.strMeasure4}    </p>  
                              <p> {curElem.strIngredient5} ---- {curElem.strMeasure5}    </p>  
                              <p> {curElem.strIngredient6} ---- {curElem.strMeasure6}    </p>  
                              <p> {curElem.strIngredient7} ---- {curElem.strMeasure7}    </p>  
                              <p> {curElem.strIngredient8} ---- {curElem.strMeasure8}    </p>  
                              <p> {curElem.strIngredient9} ---- {curElem.strMeasure9}    </p>  
                               </div>
                            </div>
                        </div>
                        <div className = "mt-3  me-5 " > 
                            <p className = "align " > Recipes </p>    
                            <div> 
                                <p  className = "scrPro1" > 
                                     {curElem.strInstructions}
                                </p>
                            </div>
                        </div>


                    </div>

                </div>
       </div>                    
                      

                  ))
              } 
               
    </div>
    );
}

export default Recipe;

             
           