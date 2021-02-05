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
        <div className="container">
            { (display === "album" && info.artist) && 
                <div className="row">
                    <div className="col-12">Album: {info.title}</div>
                    <div className="col-12">Artist: {info.artist.name}</div>
                    <div className="col-12 list-deco-container">Musics: 
                            {info.tracks.data.map(track => <li className="col-12" key={track.id}>{track.title}</li>)}
                    </div>
                </div>
            }
            { display === "artist"  && 
                <div className="row">
                    <div className="col-12">Artiste: {info.name}</div>
                    <div className="col-12"><img src={info.picture}/></div>
                    <div className="col-12">Nombre d'albums: {info.nb_album}</div>
                    <div className="col-12">Nombre de fans: {info.nb_fan}</div>
                </div>
            }
            { (display === "track" && info.contributors)  && 
                <div className="row">
                    <div className="col-12">Titre: {info.title}</div>
                    <div className="col-12 list-deco-container">
                        Artiste:
                        {info.contributors.map( artist => 
                            <li className="col-12"key={artist.id}>
                                {artist.name}
                            </li>)
                        }
                    </div>
                    <div className="col-12">Album: {info.album.title}</div>
                    <div className="col-12">Durée: {Math.trunc(info.duration/60)}mn{info.duration%60 }</div>
                     

                      <br/>
                    
                     <br/>
                    <br/>
                </div>}
        </div>
    )
}