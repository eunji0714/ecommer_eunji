import React, {useEffect, useState} from 'react';
import {Button, Container, Form, Stack, Nav, Row, Col, Spinner} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../actions/userActions";
import Loading from "../components/Loading";
import {useForm} from "react-hook-form";

const LogIn = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    // const [email, setEmail] = useState("");
    // const [password, setPassword] = useState("");

    const {register, handleSubmit, formState: {errors}} = useForm();

    const userLogin = useSelector((state) => state.userLogin)
    const {loading, error, userInfo} = userLogin
    const onLoginhandler = (data) => {
        console.log(data)


        dispatch(login(
            data
        ))
    }

    useEffect(() => {
        if (userInfo) {
            navigate('/profile')
        }
    }, [dispatch, userInfo, navigate])
    return (
        <Row>
            {loading && <Loading />}
            <Col md={{span:6, offset:3}}>
                <Container className={"row mt-5 pt-5 mx-auto px-5"}>

                    <h1 className={"text-center fw-bold"}>🏠 은지의집</h1>
                    <input
                        className={"mt-4 py-2"}
                        type="text"
                        placeholder="아이디를 입력하세요"
                        {...register("email", {required: true})}
                        // value={email}
                        // onChange={e=>setEmail(e.target.value)}
                    />
                    {errors.email && <span>Email is required.</span>}
                    <input
                        className={"mt-1 py-2 "}
                        type="password"
                        placeholder="비밀번호를 입력하세요"
                        {...register("password", {required: true})}
                        // value={password}
                        // onChange={e=>setPassword(e.target.value)}
                    />
                    {errors.password && <span>Password is required.</span>}
                    <Button
                        className={"mt-3 fw-bolder py-3 border-0 bg-info text-white"}
                        onClick={handleSubmit(onLoginhandler)}
                    >
                        로그인
                    </Button>
                    <div className={"row text-center mx-auto mt-3 "}>
                        <Nav.Link href="/findid" className={"col"}>아이디 찾기</Nav.Link>
                        <Nav.Link href="/findpw" className={"col"}>비밀번호 재설정</Nav.Link>
                        <Nav.Link href="/signup" className={"col"}>회원가입</Nav.Link>
                    </div>
                    <div className={"text-center mt-4"}>
                        <p>SNS계정으로 간편 로그인 / 회원가입</p>
                        {/*<img className={"w-25 m-3 rounded-circle "} src="https://www.facebook.com/images/fb_icon_325x325.png"/>*/}
                        {/*<img className={"w-25 m-3 rounded-circle"} src="https://mblogthumb-phinf.pstatic.net/MjAyMDA3MTRfMjI5/MDAxNTk0NzI5NzcyMDMz.X2YVWOeE6fwrOSnUiARthmNM9a4mfRnneetw1hTtyHIg.1Tqwf_4qgAqc1v3jE6xbzobcrV3X6yN8JVUVwjlRGkog.JPEG.xuni1021/%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%86%A1-%EB%A1%9C%EA%B3%A0-ai-3.jpg?type=w800"/>*/}
                        {/*<img className={"w-25 m-3 rounded-circle"} src="https://w7.pngwing.com/pngs/506/509/png-transparent-google-company-text-logo.png"/>*/}

                    </div>

                </Container>
            </Col>
        </Row>
    );
};

export default LogIn;