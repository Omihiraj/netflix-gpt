import React, { useState } from 'react'
import useGetTrailers from '../hooks/useGetTrailers';
import { useSelector } from 'react-redux';

const MainBackgroundgVideo = ({ movieId }) => {

    useGetTrailers(movieId);

    const trailer = useSelector((store) => store.movie?.trailerVideo);

    if (!trailer) return
    console.log(trailer);
    return (
        <div className='w-full'>

            <iframe className='w-full aspect-video' src={'https://www.youtube.com/embed/' + trailer.key + '?autoplay=1&mute=1&loop=1'} title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
        </div >

    )
}

export default MainBackgroundgVideo