import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../constants";
import { addNowPlayingMovies } from "../moviesSlice";
const useFetchNowplayingMovies = () => {
    const dispatch = useDispatch();
    const fetchNowplayingMovies = async () => {
        const res = await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1', API_OPTIONS);
        const resJson = await res.json();
        console.log("movies ", resJson);
        dispatch(addNowPlayingMovies(resJson));
    };

    useEffect(() => {
        fetchNowplayingMovies();
    }, []);

}
 
export default useFetchNowplayingMovies;