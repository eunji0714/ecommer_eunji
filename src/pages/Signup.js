import React, {useEffect, useState} from 'react';
import {Button, Col, Container, Form, InputGroup, Row, Spinner} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {emailSendVerification, signup} from "../actions/userActions";
import {useForm} from "react-hook-form";

const Signup = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")
    const [username, setUsername] = useState("")
    const [phonenum, setPhonenum] = useState("")
    const [code, setCode] = useState("")
    const [codeshow, setCodeshow] = useState(false)
    const [btnDisabled, setBtnDisabled] = useState(false)

    const [isMarketingAgree, setIsMarketingAgree] = useState(false)
    const [isPersonalInfoAgree, setIsPersonalInfoAgree] = useState(false)

    const {register, handleSubmit} = useForm()

    const userRegister = useSelector((state) => state.userResister)
    const {loading, error, userInfo} = userRegister

    const userLogin = useSelector((state)=> state.userLogin)
    const {userInfo:loginUser} = userLogin
    const userSendCode = useSelector((state) => state.userSendCode)
    const {success} = userSendCode

    console.log(isMarketingAgree)
    // const onSignuphandler = async () =>{
    //     try{
    //         if(password !== confirmpw) {
    //             alert("Password do not match")
    //         }
    //         setLoading(true)
    //         const userInput = {
    //             email, password, username,
    //             isMarketingAgree, isPersonalInfoAgree,
    //             provider : "local",
    //             profileImg : ""
    //             // email : email,
    //             // password : password,
    //             // username : username,
    //             // key와 value가 같을 때 value는 생략 가능
    //         }
    //         console.log("회원가입 프로세스", userInput)
    //
    //         const {data, status} = await axios.post("http://localhost:8000/api/auth/signup", userInput)
    //         console.log(data)
    //         if (status === 201){
    //             navigate("/")
    //             setLoading(false)
    //         }
    //     }catch(err){
    //         setLoading(false)
    //         console.log(err.message)
    //     }
    // }
    const onSignuphandler = async () =>{
        if(password !== confirmpw) {
            alert("Password do not match")
        }else{
            dispatch(signup(
                email, password, username,
                isMarketingAgree,
                isPersonalInfoAgree,
            ))
        }
    }

    useEffect(()=> {
        if(loginUser){
            navigate("/")
        }
        if(userInfo){
            navigate("/login")
        }
    }, [userInfo, navigate])

    const emailSend = async (e) => {
        e.preventDefault()
        dispatch(emailSendVerification(
           email
        ))
        // try{
        //     const userInput = {
        //         email
        //     }
        //     const {status} = await axios.post("http://localhost:8000/api/auth/email/send",userInput)
        //     console.log()
        //     if(status === 201){
        //
        //         alert("Please check your email.")
        //         setCodeshow(true)
        //     }
        // }catch (err){
        // }
    }

    useEffect(()=> {
        if (success){
            alert("Please check your email.")
            setCodeshow(true)
        }
    }, [dispatch, userInfo])

    const emailVerification = async() => {
        try{
            const userInput = {
                email, code
            }
            const {status} = await axios.post("http://localhost:8000/api/auth/email/check", userInput)

            if(status === 201){
                alert("이메일 확인완료")
            }
        }catch(err){
            console.log(err.message)
        }
    }

    const emailCheck = async() => {
        try{
            const userInput = {
                email
            }
            console.log(userInput)
            const {status, data} = await axios.post("http://localhost:8000/api/user/email", userInput)

            console.log(data)
            if(status === 201){
                alert("이미 가입된 이메일 입니다.")

            }

        }catch (err){
            console.log(err.message)
            alert("사용 가능한 이메일 입니다.")
            setBtnDisabled(true)
        }

    }




    return (
        <Row>
            <Col md={{span:6, offset:3}}>
                <Container className={"mt-5 mx-auto px-5 mb-4"}>
            <h3 className={"mb-5 fw-bold"}>🏠은지의집</h3>
            <div>
                {loading && (
                    <Spinner animation="border" role="status">
                        <span className="visually-hidden">Loading...</span>
                    </Spinner>
                    //loading이 참이면 spinner, 거짓이면 null
                )}

                <h4>회원가입</h4>
                <p className={"text-center"}>SNS계정으로 간편하게 회원가입</p>
                <hr></hr>
            </div>
            <div className={"row"}>
                <h5>이메일</h5>

                <InputGroup className="py-2">
                    <Form.Control
                        placeholder="이메일"
                        type="email"
                        value={email}
                        onChange={e=> setEmail(e.target.value)}
                    />
                    <Button
                        variant="outline-secondary"
                        onClick={emailCheck}
                        disabled={btnDisabled}
                    >
                        중복확인
                    </Button>
                </InputGroup>
                {/*<input*/}
                {/*    className={"py-2"}*/}
                {/*    type="email"*/}
                {/*    placeholder="이메일"*/}
                {/*    value={email}*/}
                {/*    onChange={e=> setEmail(e.target.value)}*/}
                {/*    //변경된 값을 추적해주는 코드*/}
                {/*    //내가 입력한 값, event로 써도됨*/}
                {/*/>*/}
                {codeshow ? (
                    <input
                        className={"py-2 mt-2"}
                        type="text"
                        placeholder="코드 입력하기"
                        value={code}
                        onChange={e=> setCode(e.target.value)}
                        //변경된 값을 추적해주는 코드
                        //내가 입력한 값, event로 써도됨
                    />
                ) : null}

                <button
                    className={"border-0 py-3 mt-4 rounded-1"}
                    onClick={ codeshow ? emailVerification : emailSend}
                >
                    {codeshow ? "이메일 인증하기" : "이메일 검사하기"}
                </button>
            </div>
            <div className={"row mt-4"}>
                <h5>비밀번호</h5>
                <p>영문, 숫자를 포함한 8자 이상의 비밀번호를 입력해주세요.</p>
                <input
                    className={"py-2"}
                    type="password"
                    placeholder="비밀번호"
                    value={password}
                    onChange={e=> setPassword(e.target.value)}
                />
                <h5 className={"mt-3"}>비밀번호 확인</h5>
                <input
                    className={"py-2"}
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmpw}
                    onChange={e=>setConfirmpw(e.target.value)}
                />
            </div>
            <div className={"row mt-4"}>
                <h5>닉네임</h5>
                <p>다른 유저와 겹치지 않도록 입력해주세요.(2~15자)</p>
                <input
                    className={"py-2"}
                    type="text"
                    placeholder="별명 (2~15자)"
                    value={username}
                    onChange={e=>setUsername(e.target.value)}
                />
            </div>
            <div className={"row mt-4"}>
                <h5>휴대폰번호</h5>
                <p>기호나 띄어쓰기 없이 번호를 입력하세요.</p>
                <input
                    className={"py-2"}
                    type="text"
                    placeholder="휴대폰 번호"
                    value={phonenum}
                    onChange={e=>setPhonenum(e.target.value)}
                />
            </div>
            <div className={"mt-4"}>
                <Form.Check
                    inline
                    label="개인정보 마케팅 활용 동의"
                    name="group1"
                    type={"checkbox"}
                    value={isMarketingAgree}
                    onChange={e=> setIsMarketingAgree(!isMarketingAgree)}
                />
                <Form.Check
                    inline
                    label="개인정보수집 및 이용 동의"
                    name="group1"
                    type={"checkbox"}
                    value={isPersonalInfoAgree}
                    onChange={e=> setIsPersonalInfoAgree(!isPersonalInfoAgree)}
                />
            </div>

            <div className={"row"}>
                <Button
                    className={"border-0 py-3 mt-5 fw-bolder bg-info text-white"}
                    onClick={onSignuphandler}
                >
                    회원가입하기
                </Button>
            </div>
        </Container>
            </Col>
        </Row>
    );
};

export default Signup;