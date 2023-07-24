import React, {useState} from 'react';
import {Container, Form} from "react-bootstrap";
import axios from "axios";
import {useNavigate} from "react-router-dom";

const Signup = () => {

    const navigate = useNavigate()

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")
    const [username, setUsername] = useState("")

    const [isMarketingAgree, setIsMarketingAgree] = useState(false)
    const [isPersonalInfoAgree, setIsPersonalInfoAgree] = useState(false)

    console.log(isMarketingAgree)
    const onSignuphandler = async () =>{
        try{
            if(password !== confirmpw) {
                alert("Password do not match")
            }
            const userInput = {
                email, password, username,
                isMarketingAgree, isPersonalInfoAgree,
                provider : "local"
                // email : email,
                // password : password,
                // username : username,
                // key와 value가 같을 때 value는 생략 가능
            }
            console.log("회원가입 프로세스", userInput)

            const {data, status} = await axios.post("http://localhost:8000/api/auth/signup", userInput)
            if (status === 201){
                navigate("/")
            }
        }catch(err){
            console.log(err.message)
        }
    }

    return (


        <Container className={"mt-4 mx-auto px-5 mb-4"}>
            <h3 className={"mb-5"}>🏠은지의집</h3>
            <div>
                <h4>회원가입</h4>
                <p className={"text-center"}>SNS계정으로 간편하게 회원가입</p>
                <hr></hr>
            </div>
            <div className={"row"}>
                <h5>이메일</h5>
                <input
                    className={"py-2"}
                    type="email"
                    placeholder="이메일"
                    value={email}
                    onChange={e=> setEmail(e.target.value)}
                    //변경된 값을 추적해주는 코드
                    //내가 입력한 값, event로 써도됨
                />
                <button className={"border-0 py-3 mt-4 rounded-1"}>이메일 인증하기</button>
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

            <div className={"row"}>
                <button
                    className={"border-0 py-3 mt-5 rounded-1 bg-info text-white"}
                    onClick={onSignuphandler}
                >
                    회원가입하기
                </button>
            </div>
        </Container>
    );
};

export default Signup;