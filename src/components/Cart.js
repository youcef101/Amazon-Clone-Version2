import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCartItem } from '../features/products/productSlice'
import ShoppingCart from './ShoppingCart'
import SubTotal from './SubTotal'

function Cart() {
    const cartItem = useSelector(selectCartItem)
    const getTotalQty = () => {
        let totalQty = 0;
        cartItem.forEach(item => {
            totalQty += item.quantity;
        });
        return totalQty;
    }
    const getTotalPrice = () => {
        let TotalPrice = 0;
        cartItem.forEach(item => {
            TotalPrice += item.quantity * item.price
        })
        return TotalPrice;
    }
    return (
        <Container>
            <ShoppingCart />
            <SubTotal
                totalQty={getTotalQty()}
                totalPrice={getTotalPrice()}
            />

        </Container>
    )
}

export default Cart
const Container = styled.div`
display:flex;
align-items:flex-start;
`