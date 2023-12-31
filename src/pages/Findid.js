import React, {useState} from 'react';
import {Button, Col, Container, Nav, Row} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";


const Findid = () => {



    return (
        <Row>
            <Col md={{span:6, offset:3}}>
                <Container className={"mt-5 col px-5 "}>
            <h3 className={"mb-5 fw-bold"}>🏠은지의집</h3>
            <p className={"text-center"}>가입한 휴대폰 번호를 입력해주세요.</p>
            <div className={"d-grid"}>
                <input
                    className={"py-2 px-2"}
                    type="text"
                    placeholder="휴대폰 번호"
                />

            </div>

            <div className={"d-grid"}>
                <Button
                    className={"mt-3 fw-bolder py-3 text-white text-bg-info border-0"}
                >
                    문자로 아이디 받기
                </Button>
            </div>
            <div className={"row text-center mx-auto mt-5 "}>
                <Nav.Link href="/findpw" className={"col"}>비밀번호 재설정</Nav.Link>
                <Nav.Link href="/login" className={"col"}>로그인 하기</Nav.Link>
            </div>
        </Container>
            </Col>
        </Row>
    );
};

export default Findid;