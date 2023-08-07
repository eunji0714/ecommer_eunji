import React, {useEffect, useState} from 'react';
import axios from "axios";
import {Button, Container, Table} from "react-bootstrap";

const Users = () => {

    const [users, setUsers] = useState([])

    const userList = async() => {
        try{
            const {data, status} = await axios.get("http://localhost:8000/api/user",)
            console.log(data.data)
            if(status === 200){
                setUsers(data.data)
            }
        }catch(err){
            console.log(err.message)
        }
    }

    useEffect(()=>{
        userList()
    }, [])
    return (
        <Container className={"mt-5"}>
            <Table striped bordered hover>
                <thead>
                <tr>
                    <th>#</th>
                    <th>Email</th>
                    <th>Username</th>
                    <th>Provider</th>
                    <th>Join Date</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {users?.map(user => (
                    <tr>
                        <td>1</td>
                        <td>{user.email}</td>
                        <td>{user.username}</td>
                        <td>{user.provider === "local" ? "email" : user.provider}</td>
                        <td>{user.createdAt.slice(0,10)}</td>
                        <td>
                            <Button variant="primary">수정하기</Button>{' '}
                            <Button variant="danger">삭제하기</Button>{' '}
                        </td>
                    </tr>
                ))}
                {/* ?. => optional로서, null이여도 오류를 내보내지 않음 */}
                </tbody>
            </Table>
        </Container>
    );
};

export default Users;