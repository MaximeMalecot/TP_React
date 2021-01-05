import React from 'react';
import Link from "./Link";

export default function Header (){
    return(
        <header>
            <ul>
                <Link href="/" className="item">Default</Link>
                <Link href="/tracks" className="item">Tracks</Link>
                <Link href="/number" className="item">Number</Link>
                <Link href="/all" className="item">All</Link>
            </ul>
        </header>
    );
}