import React from 'react';


const Header = (props) => {
    return (
    <div className = "jumbotron" > 
        <h1 className = "display-1" > Recipe Finder</h1>
        <div className="input-group w-50 mx-auto">
           <input type="text" className="form-control" placeholder = "Enter the name of the dish" value = {props.search}
              onChange = {props.onInputChange} />
           <div>
                 <button className = "btn btn-dark ms-5" onClick = {props.onSearchClick} >
                     Get Recipes  </button>
           </div>
         </div>
         <div className = "mt-3" > <h2> Type a dish name to search for it's ingredient </h2>   </div>
         
    </div>
    );
}




export default Header;