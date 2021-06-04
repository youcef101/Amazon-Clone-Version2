import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

function CartItem() {
    return (
        <Container>
            <ProductImage>
                <Link to="#"><img src="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg" /></Link>
            </ProductImage>
            <ProductInfo>
                <ProductInfoTop>
                    <Link to="#">2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)</Link>
                </ProductInfoTop>
                <ProductInfoBottom>

                </ProductInfoBottom>
            </ProductInfo>
            <ProductPrice>
                $311
            </ProductPrice>



        </Container>
    )
}

export default CartItem
const Container = styled.div`
display:flex;
align-items:flex-start;
padding:10px 10px;

`
const ProductImage = styled.div`
display:flex;
margin-right:50px;
a{
img{
flex-shrink:0;
flex-grow:0;
flex:1;
height:170px;
width:150px;
object-fit:contain;
}}
`
const ProductInfo = styled.div`
flex:1;
display:flex;
`
const ProductInfoTop = styled.div`

a{
    text-decoration:none;
    font-weight:500;
}
`
const ProductInfoBottom = styled.div``
const ProductPrice = styled.div`
font-weight:500;
`
