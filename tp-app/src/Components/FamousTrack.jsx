import React, { useState, useEffect } from 'react';
import Search from "./Search";

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
        <div>
            <button onClick={() => setDisplay("albums")}>Albums</button>
            <button onClick={() => setDisplay("artists")}>Artists</button>
            <button onClick={() => setDisplay("tracks")}>Tracks</button>
            { display === "tracks" && tracks.map( track => <p key={track.id}>Title: {track.title} Artist: {track.artist.name} </p>) }
            { display === "albums" && albums.map( album => <p key={album.id}>Title: {album.title} Artist: {album.artist.name} </p>)}
            { display === "artists" && artists.map( artist => <p key={artist.id}>Name: {artist.name}</p>)}
            <Search/>
        </div>
    );
}