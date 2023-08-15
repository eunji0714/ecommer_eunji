import tmdbApi from "./tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchMovies = async () => {
    const { data } = await tmdbApi.get(`/movie/now_playing?language=en-US&page=1`);
    return data.results;
}

const useFetchMovies = () =>
    useQuery(["movies"], () => fetchMovies(), {
        keepPreviousData: true,
    });

export {useFetchMovies}