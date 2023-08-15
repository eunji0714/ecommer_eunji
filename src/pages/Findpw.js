import React, {useEffect, useState} from 'react';
import {Button, Container, Nav, Row, Col} from "react-bootstrap";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {forgotPassword} from "../actions/userActions";


const Findpw = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")

    const userPassword = useSelector((state) => state.userPassword)
    const {loading, error, userInfo} = userPassword

    const findPassword = async() => {
        // try{
        //     const userInput = {
        //         email
        //     }
        //     const { status} = await axios.post("http://localhost:8000/api/auth/forgot/password", userInput)
        //     if(status === 201){
        //         alert("Please check you email.")
        //         navigate("/")
        //     }
        // }catch(err){
        //     console.log(err.message)
        // }

        dispatch(forgotPassword(
            email
        ))
    }

    useEffect(() => {
        if (userInfo){
            alert("Please check your email.")
            navigate("/")
        }
    }, [dispatch, userInfo, navigate])


    return (
        <Row>
            <Col md={{span:6, offset:3}}>
                <Container className={"mt-5 col px-5 "}>
            <h3 className={"mb-5 fw-bold"}>🏠은지의집</h3>
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
                <Nav.Link href="/login" className={"col"}>로그인 하기</Nav.Link>
            </div>
        </Container>
            </Col>
        </Row>
    );
};

export default Findpw;