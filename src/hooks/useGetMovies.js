import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { OPTIONS } from "../utils/constants";
import { addMovieDetails } from "../utils/movieSlice";

const useGetMovies = () => {
    const dispatch = useDispatch();


    const getMovies = async () => {
        const data = await fetch('https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc', OPTIONS)
        const json = await data.json();

        dispatch(addMovieDetails(json.results))
    }
    useEffect(() => {
        getMovies();
    }, []);

}
export default useGetMovies