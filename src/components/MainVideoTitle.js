import React from 'react'
import { useSelector } from 'react-redux'

const MainVideoTitle = () => {
    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    if (!movies) return

    const { original_title, overview } = movies[0];

    return (
        <div className='pt-40 pl-20 absolute bg-gradient-to-r from-black aspect-video'>
            <h1 className='text-5xl font-bold pb-5 text-white'>{original_title}</h1>
            <p className='w-1/4 pb-5 text-white'>{overview}</p>
            <button className='bg-white  text-black px-10 py-3 rounded-lg'>Play</button>
            <button className='bg-white  text-black px-6 py-3 ml-5 rounded-lg'>More Details</button>
        </div>
    )
}

export default MainVideoTitle