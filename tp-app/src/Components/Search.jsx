import React, { useState } from 'react';

export default function Search(){
    const [input, setInput] = useState();
    const [answers, setAnswers] = useState(null);

    const confirm = () => { 
        const fetchData = async () => fetch("https://api.deezer.com/search?q="+input)
            .then((res) => res.json())
            .then((res) => {
                if(res.data.length > 0){
                    setAnswers(res.data.slice(0, 10))
                } else{
                    setAnswers(null)
                }
            })
            .catch((e) => console.error(e));
        fetchData();
    }
    return(
        <div>
            <h2>Entrez ce que vous cherchez</h2>
            <input type="text" onChange={(event) => setInput(event.target.value)}></input>
            <button onClick={confirm}>search</button>
            { answers ? answers.map( answer => <p key={answer.id}>Title: {answer.title}, Artist: {answer.artist.name}</p> ) : <p>Frero y a R viens sur le vieux port un peu</p>}
        </div>
    );
}