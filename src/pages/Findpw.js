import React, {useState} from 'react';
import {InputGroup, Form, Button, Container, Nav} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Findpw = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const findPassword = async() => {
        try{
            const userInput = {
                email
            }
            const { status} = await axios.post("http://localhost:8000/api/auth/forgot/password", userInput)
            if(status === 201){
                alert("Please check you email.")
                navigate("/")
            }
        }catch(err){
            console.log(err.message)
        }
    }


    return (
        <Container className={"mt-5 col px-5 "}>
            <h3 className={"mb-5"}>🏠은지의집</h3>
            <p className={"text-center"}>가입한 이메일 주소를 입력해주세요.</p>
           <div className={"d-grid"}>
                <input
                    className={"py-2 px-2"}
                    type="text"
                    placeholder="이메일"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                />

           </div>

            <div className={"d-grid"}>
                <Button
                    className={"mt-3 py-3 fw-bolder text-white text-bg-info border-0"}
                    onClick={findPassword}
                >
                    비밀번호 찾기
                </Button>
            </div>
            <div className={"row text-center mx-auto mt-5 "}>
                <Nav.Link href="/findid" className={"col"}>아이디 찾기</Nav.Link>
                <Nav.Link href="/" className={"col"}>로그인 하기</Nav.Link>
            </div>
        </Container>
    );
};

export default Findpw;