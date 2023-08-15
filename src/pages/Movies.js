import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Row} from "react-bootstrap";
import axios from "axios";
import Cards from "../components/Cards";
import Containerview from "../components/Containerview";
import {useFetchMovies, usePaginatedFetchMovies} from "../services/fetchMovies";
import Loading from "../components/Loading";

const Movies = () => {

    const {data : movies, isLoading} = useFetchMovies()
    console.log(movies)
    //
    // const [movies, setMovies] = useState([])
    // const getMovies = async () => {
    //     try{
    //         const options = {

    //         }
    //         const {data, status} = await axios.get("https://api.themoviedb.org/3/movie/now_playing", options)
    //         console.log(data.results)
    //         if(status === 200){
    //             setMovies(data.results)
    //         }
    //     }catch (err){
    //         console.log(err.message)
    //     }
    // }
    //
    // useEffect(()=> {
    //     getMovies()
    // },[])

    if (isLoading) {
        return <Loading />
    }

    return (
        <Containerview title={"영화리스트 상영리스트"}>

            {movies?.length === undefined && <h1>no data</h1>}
                {
                    movies && movies.map((movie, index) => (
                        <Cards
                            key = {index}
                            img={movie.poster_path}
                            overview={movie.overview}
                            title={movie.title}
                            id={movie.id}
                        />
                        // <Card className={"me-4 mt-5"} style={{ width: '18rem' }}>
                        //     <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                        //     <Card.Body>
                        //         <Card.Title>{movie.title}</Card.Title>
                        //         <Card.Text>
                        //             {movie.overview.slice(0,80)}
                        //         </Card.Text>
                        //         <Button variant="primary" href={`/movies/${movie.id}`}>자세히 보기</Button>
                        //     </Card.Body>
                        // </Card>
                    ))
                }
        </Containerview>

    );
};

export default Movies;