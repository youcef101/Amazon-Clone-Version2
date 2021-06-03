import React from 'react'
import styled from 'styled-components'

function CardProduct() {
    return (
        <Container>
            <CardContainer>
                <Wrap>
                    <ProductTitle>
                        Huawei P20 Pro 128GB Dual-SIM (GSM Only, No CDMA) Factory Unlocked 4G/LTE Smartphone (Black) - International Version
                    </ProductTitle>
                    <ProductPrice>
                        $390
                    </ProductPrice>
                    <ProductRating>
                        ⭐⭐⭐⭐⭐
                    </ProductRating>
                    <ProductContainer>
                        <ProductImage>
                            <img src="https://m.media-amazon.com/images/I/61FRUed8mlL._AC_UY218_.jpg" />
                        </ProductImage>
                        <AddToCartBtn>
                            Add To Cart
                    </AddToCartBtn>
                    </ProductContainer>
                </Wrap>
                <Wrap>
                    <ProductTitle>
                        Simple Mobile Prepaid - Apple iPhone 11 Pro Max (64GB) - Silver [Locked to Carrier – Simple Mobile]
                    </ProductTitle>
                    <ProductPrice>
                        $335
                    </ProductPrice>
                    <ProductRating>
                        ⭐⭐⭐⭐⭐
                    </ProductRating>
                    <ProductContainer>
                        <ProductImage>
                            <img src="https://m.media-amazon.com/images/I/81hA4nb-+qL._AC_UY218_.jpg" />
                        </ProductImage>
                        <AddToCartBtn>
                            Add To Cart
                    </AddToCartBtn>
                    </ProductContainer>
                </Wrap>
                <Wrap>
                    <ProductTitle>
                        2020 Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)
                    </ProductTitle>
                    <ProductPrice>
                        $411
                    </ProductPrice>
                    <ProductRating>
                        ⭐⭐⭐⭐⭐
                    </ProductRating>
                    <ProductContainer>
                        <ProductImage>
                            <img src="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY218_.jpg" />
                        </ProductImage>
                        <AddToCartBtn>
                            Add To Cart
                    </AddToCartBtn>
                    </ProductContainer>
                </Wrap>
                <Wrap>
                    <ProductTitle>
                        2020 Apple MacBook Pro with Apple M1 Chip (13-inch, 8GB RAM, 512GB SSD Storage) - Silver
                    </ProductTitle>
                    <ProductPrice>
                        $645
                    </ProductPrice>
                    <ProductRating>
                        ⭐⭐⭐⭐⭐
                    </ProductRating>
                    <ProductContainer>
                        <ProductImage>
                            <img src="https://images-na.ssl-images-amazon.com/images/I/71gD8WdSlaL._AC_SX425_.jpg" />
                        </ProductImage>
                        <AddToCartBtn>
                            Add To Cart
                        </AddToCartBtn>
                    </ProductContainer>
                </Wrap>

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

