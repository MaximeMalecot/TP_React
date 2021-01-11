import React, { useState, useEffect } from 'react';
<<<<<<< HEAD

export default function Mix(){
    const [cocktail, setCocktail] = useState();
    const [music, setMusic] = useState();

    useEffect(() => {
        const fetchData = async () => fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php")
            .then((res) => res.json())
            .then((res) => { 
                setCocktail(res)
            })
            .catch((e) => console.error(e));
        fetchData();
    }, [])
    return(
        <div>
            {JSON.stringify(cocktail)}
=======
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
            console.log(JSON.stringify(cocktail))
            fetchMusic(cocktail.strDrink);
        }else{
            fetchCocktail();
        }
    }, [cocktail])
    
    return(
        <div>
            { (music && cocktail) && 
            <div>
                Nous vous conseillons de boire un <a key={cocktail.idDrink} href={"/cocktail?id="+cocktail.idDrink}>{cocktail.strDrink}</a> avec la musique <a key={music.id} href={"/info?music="+music.id}>{music.title}</a> de <a key={music.artist.id} href={"/info?artist="+music.artist.id}>{music.artist.name}</a>

                <h1>Comment faire un {cocktail.strDrink} :</h1>
                <Cocktail data={cocktail.idDrink}/>
            </div>
            }
>>>>>>> feature/MixAPIS
        </div>
    )
}