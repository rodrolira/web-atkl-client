// ArtistDetails.jsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ArtistName from './ArtistName';
import ArtistImage from './ArtistImage';
import Button from '../../atoms/Button';
import { faEdit } from '@fortawesome/free-solid-svg-icons';
import ArtistLinks from './ArtistLinks';

const ArtistDetails = ({ artist, adminAuthenticated, openEditModal }) => {
    return (
        <div className='w-1/3 p-4 border-r text-center text-white'>
            <ArtistName name={artist.artist_name} adminAuthenticated={adminAuthenticated} openEditModal={openEditModal} />
            <ArtistImage image={`http://localhost:3000/${artist.image}`} alt={artist.artist_name} />
            <div className='bg-slate-900 border-gray-200 w-full h-full relative rounded-b-lg'>
                <h1 className='text-2xl font-semibold tracking-tight text-white text-center'>
                    {artist.role}
                </h1>
                <ArtistLinks artist={artist} />
            </div>
        </div>
    );
};

export default ArtistDetails;
