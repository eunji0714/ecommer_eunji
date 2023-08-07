import React from 'react';
import {Button, Card, Row} from "react-bootstrap";
import {useLocation} from "react-router-dom";

const Cards = ({img, title, overview, id}) => {
    const location = useLocation()
    console.log("---------",location)
    return (
        <Card className={"me-4 mt-3"} style={{ width: '18rem' }}>
            <Card.Img
                className={"pt-3"}
                variant="top" src={"https://image.tmdb.org/t/p/w500"+img}/>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                    {overview.slice(0,80)}
                </Card.Text>
                <Row className={"justify-content-md-center"}>
                    <Button
                        className={"bg-dark border-0 fw-bolder"}
                        variant="primary"
                        href={location.pathname.includes("movies") ? `/movies/${id}` : `/tvs/${id}`}
                    >
                        자세히 보기
                    </Button>
                </Row>

            </Card.Body>
        </Card>
    );
};

export default Cards;