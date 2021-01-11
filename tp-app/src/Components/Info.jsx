import React, { useState, useEffect } from 'react';

export default function Info(){
    const [display, setDisplay] = useState();
    const [info, setInfo] = useState([]);

    const url = window.location.href.split('?');
    const type = url[1].split('=')

    useEffect(() => {
        if(type[0] === "album"){
            const fetchData = async () => fetch("https://api.deezer.com/album/"+type[1])
            .then((res) => res.json())
            .then((res) => { 
                setDisplay("album") 
                setInfo(res)
            })
            .catch((e) => console.error(e));
        fetchData();
        }else if(type[0] === "artist"){
            const fetchData = async () => fetch("https://api.deezer.com/artist/"+type[1])
            .then((res) => res.json())
            .then((res) => { 
                setDisplay("artist")
                setInfo(res) 
            })
            .catch((e) => console.error(e));
        fetchData();
        } else if(type[0] === "music"){
            const fetchData = async () => fetch("https://api.deezer.com/track/"+type[1])
            .then((res) => res.json())
            .then((res) => { 
                setDisplay("track") 
                setInfo(res)
            })
            .catch((e) => console.error(e));
        fetchData();
        }   
    }, [])

    return(
        <div>
            { (display === "album" && info.artist) && 
                <div>
                    Album: {info.title} <br/>
                    Artist: {info.artist.name} <br/> 
                    Music: 
                        <ul>
                            {info.tracks.data.map(track => <li key={track.id}>{track.title}</li>)}
                        </ul>
                </div>}
            { display === "artist"  && 
                <div>
                    Artiste: {info.name} <br/> 
                    <img src={info.picture}/> <br/> 
                    Nombre d'albums: {info.nb_album} <br/> 
                    Nombre de fans: {info.nb_fan}
                </div>
            }
            { (display === "track" && info.contributors)  && 
                <div>
                    Titre: {info.title}<br/>
                    Artiste: 
                        <ul>
                            {info.contributors.map( artist => 
                            <li key={artist.id}>
                                {artist.name}
                            </li>)}
                        </ul>
                      <br/>
                    
                    Album: {info.album.title} <br/>
                    Durée: {Math.trunc(info.duration/60)}mn{info.duration%60 }<br/>
                </div>}
        </div>
    )
}