import React, { useState, useEffect } from 'react';



export default function Cocktail(){
    const [cocktail, setCocktail] = useState();
    const Ingredients = [];

    const url = window.location.href.split('?');
    const id = url[1].split('=');
    
    useEffect(() => {
        const fetchData = async() => fetch("https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i="+id[1])
        .then((res) => res.json())
        .then((res) => {
            setCocktail(res.drinks[0])
        })
        .catch((e) => console.error(e));
        fetchData();
    }, [id])

    
    function getIngredient (cocktail){
        if(cocktail){
            let i = 0
            while(i < 16){
                if(typeof cocktail["strIngredient"+i] === 'string'){
                    //console.log(cocktail["strIngredient"+i])
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