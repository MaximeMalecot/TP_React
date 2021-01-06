import React, { useState, useEffect } from 'react';

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
        </div>
    )
}