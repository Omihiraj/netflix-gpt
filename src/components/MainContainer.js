
import MainBackgroundgVideo from './MainBackgroundgVideo';
import { useSelector } from 'react-redux';
import MainVideoTitle from './MainVideoTitle';

function MainContainer() {

    const movies = useSelector((store) => store.movie?.nowPlayingMovies);
    if (!movies) return
    const movieId = movies?.[0].id;

    return (
        <div>
            <MainVideoTitle />
            <MainBackgroundgVideo movieId={movieId} />
        </div>
    )
}

export default MainContainer