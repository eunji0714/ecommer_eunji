import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Col, Container, Row, Image} from "react-bootstrap";

const Profile = () => {

    const [userInfo, setUserInfo] = useState({})
    const getUserInfo = async() => {
        try{
            const token = await localStorage.getItem("token")
            const options = {
                headers : {
                    Authorization: "bearer " + token.toString()
                }
            }
            const {data, status} = await axios.get("http://localhost:8000/api/auth", options)
            if (status === 200){
                console.log(data.data)
                setUserInfo(data.data)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=> {
        getUserInfo()
    }, [])

    return (
        <Container>
            <Row>
                <Col>
                    <Image
                        src={userInfo.profileImg} rounded />
                    <h1>{userInfo.username}</h1>
                    <h3>{userInfo.email}</h3>
                </Col>

            </Row>
        </Container>
    );
};

export default Profile;