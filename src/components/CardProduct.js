import React from 'react'
import { useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectProducts } from '../features/products/productSlice'

function CardProduct() {
    const products = useSelector(selectProducts)
    return (
        <Container>
            <CardContainer>
                {products &&
                    products.map(product =>
                        <Wrap>
                            <ProductTitle>
                                {product.name}
                            </ProductTitle>
                            <ProductPrice>
                                ${product.price}
                            </ProductPrice>
                            <ProductRating>
                                {
                                    Array(product.rating)
                                        .fill()
                                        .map(rate => <p>⭐</p>)
                                }

                            </ProductRating>
                            <ProductContainer>
                                <ProductImage>
                                    <img src={product.imageUrl} />
                                </ProductImage>
                                <AddToCartBtn>
                                    Add To Cart
                    </AddToCartBtn>
                            </ProductContainer>
                        </Wrap>
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
`
const CardContainer = styled.div`
display:grid;
grid-gap:20px;
grid-template-columns:repeat(4,minmax(0,1fr));
`
const Wrap = styled.div`
display:flex;
flex-direction:column;
background:white;
height:400px;
box-shadow:rgb(0 0 0 / 80% )0px 40px 58px -16px,
    rgb(0 0 0 / 72%)0px 30px 22px -10px;
`
const ProductTitle = styled.span`
color:black;
`
const ProductPrice = styled.span`
color:#000;
display:flex;
align-items:flex-start;
`
const ProductRating = styled.div`
margin-bottom:10px;
display:flex;
`
const ProductImage = styled.div`
cursor:pointer;
display:flex;
flex-grow:1;
img{
    height:210px;
    flex:1;
    object-fit:contain;
    width:80%;
    
}
`
const AddToCartBtn = styled.div`
background:orange;
color:black;
text-align:center;
width:50%;
border-radius:4px;
border:1px solid #331400;
cursor:pointer;
margin-bottom:30px;

&:hover{
    background-color:#ff8533;
}

`
const ProductContainer = styled.div`
display:flex;
flex-grow:1;
align-items:center;
justify-content:space-between;
flex-direction:column;
`

