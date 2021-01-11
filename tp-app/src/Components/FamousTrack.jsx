import React, { useState, useEffect } from 'react';
import Search from "./Search";
import Link from "./Link";

export default function FamousTrack(){
    const [tracks, setTracks] = useState([]);
    const [albums, setAlbums] = useState([]);
    const [artists, setArtists] = useState([]);
    const [display, setDisplay] = useState("tracks");

    useEffect(() => {

        const fetchData = async () => fetch("https://api.deezer.com/editorial/0/charts")
            .then((res) => res.json())
            .then((res) => {
                setTracks(res.tracks.data) 
                setAlbums(res.albums.data)
                setArtists(res.artists.data)    
            })
            .catch((e) => console.error(e));
        fetchData();
    }, [])


    return(
        <div className="container">
            <div className="row">
                <div className="col-inner col-12">
                    <button onClick={() => setDisplay("albums")}>Albums</button>
                    <button onClick={() => setDisplay("artists")}>Artists</button>
                    <button onClick={() => setDisplay("tracks")}>Tracks</button>
                </div>
            </div>
            <div className="row list-container">
                { display === "tracks" && tracks.map( track => <Link className="col-inner col-12" key={track.id} href={"/info?music="+track.id} >Title: {track.title} Artist: {track.artist.name} </Link>) }
                { display === "albums" && albums.map( album => <Link className="col-inner col-12" key={album.id} href={"/info?album="+album.id}>Title: {album.title} Artist: {album.artist.name} </Link>)}
                { display === "artists" && artists.map( artist => <Link className="col-inner col-12" key={artist.id} href={"/info?artist="+artist.id}>Name: {artist.name}</Link>)}
            </div>
            <Search/>
        </div>
    );
}