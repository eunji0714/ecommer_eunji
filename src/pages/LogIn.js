import React, {useState} from 'react';
import {Button, Container, Form, Stack, Nav} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const LogIn = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate()

    const onLoginhandler = async() => {
        try{
            const userInput = {
                email,password
            }
            console.log("로그인 프로세스", userInput)

            const {data, status} = await axios.post("http://localhost:8000/api/auth/login", userInput)
            console.log(data)
            console.log(status)
            if (status === 200){
                localStorage.setItem("token", data.data.token)
                navigate("/profile")
            }
        }catch (err){

        }
    }

    return (
        <Container className={"row mt-5 pt-5 mx-auto px-5"}>
            <h1 className={"text-center"}>🏠 은지의집</h1>
            <input
                className={"mt-4 py-2"}
                type="text"
                placeholder="아이디를 입력하세요"
                value={email}
                onChange={e=>setEmail(e.target.value)}
            />
            <input
                className={"mt-1 py-2 "}
                type="password"
                placeholder="비밀번호를 입력하세요"
                value={password}
                onChange={e=>setPassword(e.target.value)}
            />
            <Button
                className={"mt-3 fw-bolder py-3 border-0 bg-info text-white"}
                onClick={onLoginhandler}
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
            </div>

        </Container>
    );
};

export default LogIn;