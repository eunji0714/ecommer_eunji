import React, {useState} from 'react';
import {Container} from "react-bootstrap";

const Signup = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")
    const [username, setUsername] = useState("")

    const onSignuphandler = async () =>{
        try{
            if(password !== confirmpw) {
                alert("Password do not match")
            }
            const userInput = {
                email : email,
                password : password,
                name : username,
            }
            console.log("회원가입 프로세스", userInput)
        }catch(err){

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
                    type="text"
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