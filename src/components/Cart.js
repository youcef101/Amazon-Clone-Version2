import React from 'react'
import styled from 'styled-components'
import ShoppingCart from './ShoppingCart'
import SubTotal from './SubTotal'

function Cart() {
    return (
        <Container>
            <ShoppingCart />
            <SubTotal />

        </Container>
    )
}

export default Cart
const Container = styled.div`
display:flex;
align-items:flex-start;
`