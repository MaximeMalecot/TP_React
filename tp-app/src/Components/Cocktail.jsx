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
        <div>
        { (cocktail) && 
            <div>
                Nom du cocktail: {cocktail.strDrink} <br/>
                Catégorie: {cocktail.strCategory}<br/>
                Verre approprié: {cocktail.strGlass}<br/>
                {
                    <ol>Ingrédients:
                        { Ingredients && Ingredients.map( (ingredient, index) => 
                            <li key={index}>{ingredient} ( {cocktail["strMeasure"+(index+1)]} )</li>)}
                        
                    </ol>
                }
                Instructions:<br/> {cocktail.strInstructions}
            
                <br/>
                <br/>
                <br/>
            </div>
            
        }
        </div>
        
        
    );
}