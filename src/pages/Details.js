import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from "react-router-dom";
import axios from "axios";

const Details = () => {

    const params = useParams()
    // console.log(window.location.pathname)
    const location = useLocation()
    console.log(params)

    const [item, setItem] = useState({})

    const getMovieById = async () => {
        try{
            const options ={
                headers: {
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGE3NTdhMWVlYzIzYjZiMjNhNmMzMzQwYjdmNjgyNCIsInN1YiI6IjY0YjM3NzEwMGU0ZmM4MDBjNjgzYzg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aknbgw7OXsHEm-k7z_Ia6Y_YDKYlCBHIu7eYOGIhWu0'
                }
            }
            const movieURL = `https://api.themoviedb.org/3/movie/${params.movieid}`
            const tvURL = `https://api.themoviedb.org/3/tv/${params.tvid}`
            const {data, status} = await axios.get(location.pathname.includes("movies") ? movieURL : tvURL,options)
            console.log(data,status)
            if(status === 200){
                setItem(data)
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
            <h1>{item.title ? item.title : item.name}</h1>
            장르 : {item.genres && item.genres.map(g => (
                g.name
        ))}

        </div>
    );
};

export default Details;