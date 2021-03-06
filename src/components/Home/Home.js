import React, { useEffect, useState } from 'react';
import AlbumCard from './AlbumCard';

const Home = () => {
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`https://shrouded-plains-92067.herokuapp.com/api/getPublicAlbum?privacy=${'public'}`)
            .then(res => res.json())
            .then(data => setAlbums(data))
            .catch(err => console.log(err))
    }, [])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    albums.map(album => <AlbumCard album={album}></AlbumCard>)
                }
            </div>
        </div>
    );
};

export default Home;