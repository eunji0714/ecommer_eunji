import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Nav, Navbar, NavDropdown} from "react-bootstrap";
import axios from "axios";

const Header = () => {


    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const [userinfo, setUserinfo] = useState({})
    console.log(isLoggedIn)

    const getProfile = async (token)=>{
        try{
            const options = {
                headers : {
                    Authorization: "bearer " + token.toString()
                }
            }
            const {data, status} = await axios.get("http://localhost:8000/api/auth", options)
            if (status === 200){
                console.log(data.data)
                setUserinfo(data.data)
            }

        }catch(err){
            console.log(err.message)
        }
    }

    const logoutHandler = () => {
        localStorage.clear()
        alert("로그아웃 완료")
    }

    useEffect(()=>{
        const token = localStorage.getItem("token")
        if(token) {
            setIsLoggedIn(true)
            getProfile(token)
        }
    },[])

    console.log("{{{{{{{{{", userinfo.username)

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="/">은지 House</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="/movies">Movies</Nav.Link>
                        <Nav.Link href="/tvs">Tvs</Nav.Link>

                    </Nav>
                    {
                        isLoggedIn
                            ? (
                                <Nav>
                                    <NavDropdown title={userinfo.username}>
                                        <NavDropdown.Item href="/profile">Profile</NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.2">
                                            Another action
                                        </NavDropdown.Item>
                                        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                        <NavDropdown.Divider />
                                        <NavDropdown.Item
                                            onClick={logoutHandler}
                                        >
                                            로그아웃
                                        </NavDropdown.Item>
                                    </NavDropdown>
                                </Nav>
                            )
                            : (
                                <Nav>
                                    <Nav.Link href="/signup">Sign Up</Nav.Link>
                                    <Nav.Link eventKey={2} href="/login">
                                        LogIn
                                    </Nav.Link>
                                </Nav>
                            )
                    }

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;