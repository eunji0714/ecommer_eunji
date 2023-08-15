import tmdbApi from "./tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchMovieAndTv = async (id, provider) => {
    const {data} = await tmdbApi.get(`/${provider}/${id}`)
    return data
}

const useFetchMovieAndTv = (id, provider) =>
    useQuery([provider, id], () => fetchMovieAndTv(id, provider))

export {useFetchMovieAndTv}