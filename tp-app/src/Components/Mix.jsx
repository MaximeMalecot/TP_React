import React, { useState, useEffect } from 'react';
import Cocktail from "./Cocktail"

export default function Mix(){
    const [cocktail, setCocktail] = useState(null); 
    const [music, setMusic] = useState();

    const fetchCocktail = async () => {
        fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => setCocktail(res.drinks[0]))
            .catch((e) => console.error(e));
    }
    const fetchMusic = async (name) => {
        fetch("https://api.deezer.com/search?q="+name)
            .then((res) => res.json())
            .then((res) => setMusic(res.data[0]))
            .catch((e) => console.error(e))
    }

    useEffect(() => {
        fetchCocktail();
    }, [])

    useEffect(() => {
        if(cocktail){
            fetchMusic(cocktail.strDrink);
        }else{
            fetchCocktail();
        }
    }, [cocktail])
    
    return(
        <div className="container">
            { (music && cocktail) && 
            <div className="row">
                <div className="col-12 result">
                    Nous vous conseillons de boire un <a key={cocktail.idDrink} href={"/cocktail?id="+cocktail.idDrink}>{cocktail.strDrink}</a> avec la musique <a key={music.id} href={"/info?music="+music.id}>{music.title}</a> de <a key={music.artist.id} href={"/info?artist="+music.artist.id}>{music.artist.name}</a>
                </div>
                <div className="col-12">
                    <h1>Comment faire un {cocktail.strDrink} :</h1>
                </div>
                <Cocktail data={cocktail.idDrink}/>
            </div>
            }
        </div>
    )
}