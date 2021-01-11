import React, { useState } from 'react';
import Link from './Link';

export default function Search( {className} ){
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
        <div className="row list-container">
            <div className="col-12">
                <h2>Entrez ce que vous cherchez</h2>
                <input type="text" onChange={(event) => setInput(event.target.value)}></input>
                <button onClick={confirm}>search</button>
            </div>
            { 
                answers ? answers.map( answer => <li className="col-12" key={answer.id}>Title: <a key={answer.id} href={"/info?music="+answer.id}>{answer.title}</a>, Artist: <a key={answer.artist.id} href={"/info?artist="+answer.artist.id}>{answer.artist.name}</a></li> ) : <p className="col-12">Frero y a R viens sur le vieux port un peu</p>
            }
        </div>
    );
}