import React, {useState} from 'react';
import {Button, Container} from "react-bootstrap";
import {useLocation, useNavigate} from "react-router-dom";
import axios from "axios";

const Setpassword = () => {

    const navigate = useNavigate()

    const {search} = useLocation()
    const [password, setPassword] = useState("")
    const [confirmpw, setConfirmpw] = useState("")

    const tokenString = search.slice(7)
    console.log("tokenString",tokenString)
    const onSetpassword = async () => {
        try{
            if(password != confirmpw){
                alert("Password do not match")
            }
            const userInput = {
                password, token: tokenString
            }
            console.log(userInput)
            const {status, data} = await axios.post("http://localhost:8000/api/auth/change/password", userInput)
            if(status === 201){
                navigate("/")
            }else{
                console.log(data)
            }

        }catch(err){
            console.log(err.message)
        }
    }
    return (
        <Container className={"mt-5 col px-5 "}>
            <h3 className={"mb-5"}>🏠은지의집</h3>
            <p className={"mx-1"}>비밀번호를 재설정하세요.</p>
            <div className={"d-grid"}>
                <input
                    className={"py-2 px-2"}
                    type="password"
                    placeholder="새로운 비밀번호"
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                />
                <input
                    className={"py-2 px-2 mt-2"}
                    type="password"
                    placeholder="비밀번호 확인"
                    value={confirmpw}
                    onChange={e=>setConfirmpw(e.target.value)}
                />
                <Button
                    className={"mt-3 py-3 text-white text-bg-info border-0"}
                    onClick={onSetpassword}
                >
                    비밀번호 설정완료
                </Button>
            </div>
        </Container>

    );
};

export default Setpassword;