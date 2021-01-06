import React, { useState } from 'react';
import Link from "./Link";

export default function CocktailDB(){
    const [input, setInput] = useState();
    const [answers, setAnswers] = useState(null);

    const confirm = () => { 
        const fetchData = async () => fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s="+input)
            .then((res) => res.json())
            .then((res) => { JSON.stringify(res)
                if(res.drinks !== null && res.drinks.length > 0){
                    setAnswers(res.drinks.slice(0, 10))
                } else{
                    setAnswers(null)
                }
            })
            .catch((e) => console.error(e));
        fetchData();
    }
    return(
        <div>
            <h2>Vous cherchez un cocktail ?</h2>
            <input type="text" onChange={(event) => setInput(event.target.value)}></input>
            <button onClick={confirm}>search</button>
            { answers ? answers.map( answer => 
            <Link key={answer.idDrink} href={"/cocktail?id="+answer.idDrink}>
                Nom: {answer.strDrink}
            </Link> ) : 
            <p>Frero y a R viens sur le vieux port un peu</p>}
        </div>
    );
}