import React from 'react'
import styled from 'styled-components'
import CartItem from './CartItem'

function ShoppingCart() {
    return (
        <Container>
            <CartHeader>
                <h1>shopping cart</h1>
                <hr />
            </CartHeader>
            <CartItem />
            <hr />

        </Container>
    )
}

export default ShoppingCart
const Container = styled.div`
width:80%;
background-color:white;
margin:20px 10px;
color:#000;
hr{
    width:95%;
}

`
const CartHeader = styled.div`
h1{
    padding:10px 10px;
    color:#262626;
}
hr{
    width:98%;
}
`
