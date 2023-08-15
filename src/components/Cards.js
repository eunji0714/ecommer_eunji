import React from 'react';
import {Button, Card, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Cards = ({data, provider}) => {
    const location = useLocation()
    console.log("---------",location)
    return (
        <Card className={"me-4 mt-3"} style={{ width: '18rem' }}>
                        <Card.Img variant="top" src={`https://image.tmdb.org/t/p/w500${data.poster_path}`} />
            <Card.Body>
                <Card.Title>{data.title ? data.title : data.name}</Card.Title>
                <Card.Text>
                    {data.overview.slice(0,80)}
                </Card.Text>
                <Row className={"justify-content-md-center"}>
                    <Button
                        className={"bg-dark border-0 fw-bolder"}
                        variant="primary"
                        href={`/${provider}/${data.id}`}
                        // href={location.pathname.includes("movies") ? `/movies/${id}` : `/tvs/${id}`}
                    >
                        자세히 보기
                    </Button>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default Cards;