import tmdbApi from "./tmdbApi";
import {useQuery} from "@tanstack/react-query";

const fetchTvs = async () => {
    const {data} = await tmdbApi.get("/tv/popular")
    return data.results;
}

const useFetchTvs = () =>
    useQuery(["tvs"], () => fetchTvs(), {
        keepPreviousData: true,
    });

export {useFetchTvs}