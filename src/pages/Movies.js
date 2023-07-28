import React, {useEffect, useState} from 'react';
import {Button, Card, Container, Row} from "react-bootstrap";
import axios from "axios";

const Movies = () => {

    const [movies, setMovies] = useState([])
    const getMovies = async () => {
        try{
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGE3NTdhMWVlYzIzYjZiMjNhNmMzMzQwYjdmNjgyNCIsInN1YiI6IjY0YjM3NzEwMGU0ZmM4MDBjNjgzYzg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aknbgw7OXsHEm-k7z_Ia6Y_YDKYlCBHIu7eYOGIhWu0'
                }
            }
            const {data, status} = await axios.get("https://api.themoviedb.org/3/movie/now_playing", options)
            console.log(data.results)
            if(status === 200){
                setMovies(data.results)
            }
        }catch (err){
            console.log(err.message)
        }
    }

    useEffect(()=> {
        getMovies()
    },[])

    return (
        <Container className={"mt-3"}>
            <h1>영화리스트 상영리스트</h1>
            <Row className={"justify-content-md-center"}>
                {
                    movies && movies.map(movie => (
                        <Card className={"me-4 mt-5"} style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={"https://image.tmdb.org/t/p/w500"+movie.poster_path}/>
                            <Card.Body>
                                <Card.Title>{movie.title}</Card.Title>
                                <Card.Text>
                                    {movie.overview.slice(0,80)}
                                </Card.Text>
                                <Button variant="primary">Go somewhere</Button>
                            </Card.Body>
                        </Card>
                    ))
                }
            </Row>
        </Container>

    );
};

export default Movies;