import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectProducts } from '../features/products/productSlice'
import db from '../Firebase'
import CardItem from './CardItem'



function CardProduct() {
    const products = useSelector(selectProducts)
    return (
        <Container>
            <CardContainer >

                {products &&
                    products.map(product =>
                        <CardItem
                            id={product.id}
                            name={product.name}
                            imageUrl={product.imageUrl}
                            price={product.price}
                            rating={product.rating}
                        />
                    )}


            </CardContainer>

        </Container>
    )
}

export default CardProduct
const Container = styled.div`
margin-top:20px ;
padding:0 15px;
padding-bottom:50px;
width:100%;



`
const CardContainer = styled.div`
display:flex;
justify-content:center;
margin:10px;
width:100%;
`
// const Wrap = styled.div`
// margin:10px;
// width:350px;
// display:flex;
// flex-direction:column;
// background:white;
// height:400px;
// box-shadow:rgb(0 0 0 / 80% )0px 40px 58px -16px,
//     rgb(0 0 0 / 72%)0px 30px 22px -10px;
// `
// const ProductTitle = styled.span`
// color:black;
// `
// const ProductPrice = styled.span`
// color:#000;
// display:flex;
// align-items:flex-start;
// `
// const ProductRating = styled.div`
// margin-bottom:10px;
// display:flex;
// `
// const ProductImage = styled.div`
// cursor:pointer;
// display:flex;
// flex-grow:1;
// img{
//     height:210px;
//     flex:1;
//     object-fit:contain;
//     width:80%;

// }
// `
// const AddToCartBtn = styled.div`
// background:orange;
// color:black;
// text-align:center;
// width:50%;
// border-radius:4px;
// border:1px solid #331400;
// cursor:pointer;
// margin-bottom:30px;

// &:hover{
//     background-color:#ff8533;
// }

// `
// const ProductContainer = styled.div`
// display:flex;
// flex-grow:1;
// align-items:center;
// justify-content:space-between;
// flex-direction:column;
// `

