
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";

const useGetTrailers = (movieId) => {

    const dispath = useDispatch();

    const getTrailers = async () => {

        const data = await fetch('https://api.themoviedb.org/3/movie/' + movieId + '/videos?language=en-US', OPTIONS);
        const json = await data.json();
        const trailerList = json.results.filter((movie) => movie.type === "Trailer");
        const trailer = trailerList ? trailerList[0] : json.results[0];
        dispath(addTrailerVideo(trailer));
    }

    useEffect(() => {
        getTrailers();
    }, [])

}
export default useGetTrailers