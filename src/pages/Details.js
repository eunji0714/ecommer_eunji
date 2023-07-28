import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import axios from "axios";

const Details = () => {

    const params = useParams()
    // console.log(window.location.pathname)
    console.log(params)

    const [movie, setMovie] = useState({})

    const getMovieById = async () => {
        try{
            const options ={
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGE3NTdhMWVlYzIzYjZiMjNhNmMzMzQwYjdmNjgyNCIsInN1YiI6IjY0YjM3NzEwMGU0ZmM4MDBjNjgzYzg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aknbgw7OXsHEm-k7z_Ia6Y_YDKYlCBHIu7eYOGIhWu0'
                }
            }
            const {data, status} = await axios.get(`https://api.themoviedb.org/3/movie/${params.movieid}`,options)
            console.log(data,status)
            if(status === 200){
                setMovie(data)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=> {
        getMovieById()
    },[])

    return (
        <div>
            <h1>{movie.title}</h1>
            장르 : {movie.genres && movie.genres.map(g => (
                g.name
        ))}

        </div>
    );
};

export default Details;