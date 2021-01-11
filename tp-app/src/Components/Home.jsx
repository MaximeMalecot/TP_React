import React from 'react';

export default function Home(){
    return(
        <div className="container">
            <div className="row">
                <div className="col-12 col-inner">
                    <h1>Bienvenue dans le TP de Maxime Malecot !</h1>
                    <p>Ici nous utiliserons deux API pour mener à bien notre mission</p>
                </div>
            </div>
            <div className="row">
                <div className="col-6 col-inner">
                    <h1>La première API étant celle de TheCocktailDB</h1>
                    <p>
                        Cette API sera utilisée pour la recherche de cocktail et la création de ceux-ci <br/>
                        Vous pouvez trouver l'API ici : <a href="https://www.thecocktaildb.com/api.php">https://www.thecocktaildb.com/api.php</a>
                    </p>
                </div>
                <div className="col-6 col-inner">
                    <h1>La deuxième API étant celle de Deezer</h1>
                    <p>
                        Cette API sera utilisée pour la recherche de music, d'albums et d'artistes, ainsi que le listing des plus connus
                        Vous pouvez trouver l'API ici : <a href="https://developers.deezer.com/api">https://developers.deezer.com/api</a>
                    </p>
                </div>
                <div className="col-12 col-inner">
                    <h1>
                        Nous aurons aussi une liaison des deux API afin de passer de meilleures soirées.<br/>
                        En essayant d'adapter notre musique à ce que l'on boit !
                    </h1>
                </div>  
            </div>
        </div>
    );
}