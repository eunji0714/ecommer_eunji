import React from 'react';
import Cards from "../components/Cards";
import Containerview from "../components/Containerview";
import {useFetchMovies} from "../services/fetchMovies";
import Loading from "../components/Loading";

const Movies = () => {

    const {data : movies, isLoading} = useFetchMovies()
    console.log(movies)
    if (isLoading) {
        return <Loading />
    }

    return (
        <Containerview title={"영화리스트 상영리스트"}>

            {movies?.length === undefined && <h1>no data</h1>}
                {
                    movies && movies.map((movie, index) => (
                        <Cards data={movie} provider={"movie"} key={index}/>

                    ))
                }
        </Containerview>

    );
};

export default Movies;