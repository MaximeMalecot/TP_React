import React, { useState, useEffect } from 'react';



export default function Cocktail( {data=null} ){
    const [cocktail, setCocktail] = useState();
    const Ingredients = [];
    var id
    if(data===null){
        id = window.location.href.split('?')[1].split('=')[1];
    }
    else{
        id = data
    }
    
    useEffect(() => {
        const fetchData = async(id) => fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id)
        .then((res) => res.json())
        .then((res) => {
            setCocktail(res.drinks[0])
        })
        .catch((e) => console.error(e));
        fetchData(id);
    }, [id])

    
    function getIngredient (cocktail){
        if(cocktail){
            let i = 0
            while(i < 16){
                if(typeof cocktail["strIngredient"+i] === 'string'){
                    Ingredients.push(cocktail["strIngredient"+i])
                }
                i++
            }
        }
    } 

    getIngredient(cocktail)

    return(
        <div className="container">
        { (cocktail) && 
            <div id="CocktailInfo">
                <div className="row">
                    <div className="col-12">Nom du cocktail: {cocktail.strDrink} <br/></div>
                    <div className="col-12">Catégorie: {cocktail.strCategory}<br/></div>
                    <div className="col-12">Verre approprié: {cocktail.strGlass}<br/></div>
                </div>
                {
                    <div className="row list-container"> 
                    <div className="col-12">Ingrédients:</div>
                        { Ingredients && Ingredients.map( (ingredient, index) => 
                            <li className="col-12" key={index}>{ingredient} ( {cocktail["strMeasure"+(index+1)]} )</li>)}
                        
                        </div>
                }
                    <div className="row">
                        <div className="col-12">
                            Instructions:<br/> {cocktail.strInstructions}
                        </div>
                    </div>   
            </div>
        }
        </div>
        
        
        
    );
}