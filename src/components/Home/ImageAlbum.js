import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ImageCard from '../Profile/ImageCard';

const ImageAlbum = () => {
    const { name } = useParams();
    const [albums, setAlbums] = useState({});
    useEffect(() => {
        fetch(`https://shrouded-plains-92067.herokuapp.com/api/album/${name}`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [name])
    return (
        <div className="container mt-5">
            <div className="row">
                {
                    albums.map(album => <ImageCard album={album}></ImageCard>)
                }
            </div>
        </div>

    );
};

export default ImageAlbum;