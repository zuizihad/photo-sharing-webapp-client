import React from 'react';
import './AlbumCard.css'
import { Link } from 'react-router-dom';

const AlbumCard = ({ album }) => {

    return (
        <div className="col-md-4 col-sm-12">
            <Link to={`/album/${album.albumName}`}>
                <div className="card album-card my-3">
                    <div className="card-body">
                        <h5 className="card title">{album.albumName}</h5>
                        <p>privacy: {album.albumPrivacy}</p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default AlbumCard;