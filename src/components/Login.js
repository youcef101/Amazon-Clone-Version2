import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { setSignIn } from '../features/user/userSlice'
import { auth, provider } from '../Firebase'

function Login() {
    const dispatch = useDispatch()
    const SignIn = () => {
        auth.signInWithPopup(provider)
            .then(res => {
                //console.log(res)
                let user = res.user;
                let NewUser = {
                    username: user.displayName,
                    email: user.email
                }
                localStorage.setItem('user', JSON.stringify(NewUser));
                dispatch(setSignIn(NewUser));
            })
    }
    return (
        <Container>
            <Content>
                <AmazonLogo src="https://ereputation-dereferencement.fr/storage/2021/01/Amazon-logo.png" />
                <SignInBtn onClick={SignIn}>Sign In with Google</SignInBtn>
            </Content>
        </Container>
    )
}

export default Login
const Container = styled.div`
display:flex;
justify-content:center;
align-items:center;
margin-top:30px;
`
const Content = styled.div`
box-shadow:rgb(0 0 0 / 80% )0px 40px 58px -16px,
    rgb(0 0 0 / 72%)0px 30px 22px -10px;
background:white;
width:35%;
height:400px;
display:flex;
justify-content:center;
align-items:center;
flex-direction:column;
`
const AmazonLogo = styled.img`
width:100%;
height:150px;
cursor:pointer;
`
const SignInBtn = styled.div`
background:orange;
color:black;
text-align:center;
width:80%;
border-radius:4px;
border:1px solid #331400;
cursor:pointer;
margin-bottom:30px;

&:hover{
    background-color:#ff8533;
}
`
