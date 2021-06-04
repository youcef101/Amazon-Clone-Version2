import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectCartItem, setCartItem } from '../features/products/productSlice'
import db from '../Firebase'
import CartItem from './CartItem'

function ShoppingCart() {
    const dispatch = useDispatch()
    const cartItems = useSelector(selectCartItem)
    console.log(cartItems)
    useEffect(() => {
        db.collection('cartItem').onSnapshot(snapshot => {
            let tempCartItem = snapshot.docs.map(item => {
                return { id: item.id, ...item.data() }
            })
            console.log(tempCartItem)
            dispatch(setCartItem(tempCartItem))
        })
    }, [])
    return (
        <Container>
            <CartHeader>
                <h1>shopping cart</h1>
                <hr />
            </CartHeader>
            {cartItems &&
                cartItems.map(item =>
                    <><CartItem
                        key={item.id}
                        name={item.name}
                        price={item.price}
                        imageUrl={item.imageUrl}
                        id={item.id}
                        quantity={item.quantity}
                    />
                        <hr /></>
                )}



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
