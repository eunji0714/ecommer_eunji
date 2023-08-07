import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Container, Row} from "react-bootstrap";
import Cards from "../components/Cards";

const Tvs = () => {

    const [tvs, setTvs] = useState([])

    const getTvs = async () => {
        try{
            const options = {
                headers: {
                    accept: 'application/json',
                    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4NGE3NTdhMWVlYzIzYjZiMjNhNmMzMzQwYjdmNjgyNCIsInN1YiI6IjY0YjM3NzEwMGU0ZmM4MDBjNjgzYzg4YyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.Aknbgw7OXsHEm-k7z_Ia6Y_YDKYlCBHIu7eYOGIhWu0'
                }
            }
            const {data, status} = await axios.get("https://api.themoviedb.org/3/tv/popular",options)
            console.log("++++++++++",data.results)
            if(status === 200){
                setTvs(data.results)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(() => {
        getTvs()
    },[])

    return (
        <Container className={"mt-3 pt-4"}>
            <h2 className={"fw-bold"}>티비 방영리스트</h2>
            <Row className={"justify-content-md-center"}>
                {
                    tvs && tvs.map(tv => (
                        <Cards
                            img={tv.poster_path}
                            overview={tv.overview}
                            title={tv.name}
                            id={tv.id}
                        />

                    ))
                }
            </Row>
        </Container>
    );
};

export default Tvs;