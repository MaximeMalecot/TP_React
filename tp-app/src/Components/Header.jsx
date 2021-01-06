import React from 'react';
import Link from "./Link";

export default function Header (){
    return(
        <header>
            <ul>
                <Link href="/" className="item">Default</Link>
                <Link href="/tracks" className="item">Tracks</Link>
                <Link href="/cocktaildb" className="item">Cocktail</Link>
                <Link href="/mix" className="item">Egayez vos soirées</Link>
            </ul>
        </header>
    );
}