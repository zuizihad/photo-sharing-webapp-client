import React, { useContext, useEffect, useState } from 'react';
import { userContext } from '../../App';
import AlbumCard from './AlbumCard';

const Profile = () => {
    const [loggedInUser, setLoggedInUser] = useContext(userContext)
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        fetch(`http://localhost:5000/api/getAlbum?email=${loggedInUser.email}`)
            .then(res => res.json())
            .then(data => setAlbums(data))
    }, [loggedInUser])
    return (
        <div className="container">
            <div className="row">
                {
                    albums.map(album => <AlbumCard key={album._id} album={album}></AlbumCard>)
                }
            </div>
        </div>
    );
};

export default Profile;