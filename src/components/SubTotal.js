import React from 'react'
import styled from 'styled-components'

function SubTotal({ totalQty, totalPrice }) {
    return (
        <Container>
            <Sub>
                <p>SubTotal ({totalQty} items) :</p> <h3>${totalPrice}</h3>
            </Sub>
            <CheckoutBtn>
                Proceed Checkout
            </CheckoutBtn>

        </Container>
    )
}

export default SubTotal
const Container = styled.div`
width:20%;
background-color:white;
margin:20px 10px;
color:#000;
display:flex;
align-items:center;
justify-content:center;
flex-direction:column;

`
const Sub = styled.div`
display:flex;
align-items:center;
p{
    font-weight:500;
}
`
const CheckoutBtn = styled.div`
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
