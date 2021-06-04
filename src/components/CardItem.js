import React from 'react'
import styled from 'styled-components'
import db from '../Firebase';

function CardItem({ id, name, price, imageUrl, rating }) {
    const AddToCart = () => {
        const cartItem = db.collection('cartItem').doc(id);

        console.log(cartItem)
        cartItem.get()
            .then(doc => {
                console.log(doc)
                if (doc.exists) {
                    cartItem.update({
                        quantity: doc.data().quantity + 1
                    })
                } else {
                    cartItem.set({
                        name: name,
                        price: price,
                        imageUrl: imageUrl,
                        quantity: 1
                    })
                }
            })
    }

    return (
        <Container>
            <Wrap >
                <ProductTitle>
                    {name}
                </ProductTitle>
                <ProductPrice>
                    ${price}
                </ProductPrice>
                <ProductRating>
                    {
                        Array(rating)
                            .fill()
                            .map(rate => <p>⭐</p>)
                    }

                </ProductRating>
                <ProductContainer>
                    <ProductImage>
                        <img src={imageUrl} />
                    </ProductImage>
                    <AddToCartBtn onClick={AddToCart}>
                        Add To Cart
                    </AddToCartBtn>
                </ProductContainer>
            </Wrap>
        </Container>
    )
}

export default CardItem
const Container = styled.div`
//display:flex;
width:300px;
//height:400px;

`
const Wrap = styled.div`
margin:10px;
//width:300px;
display:flex;
flex-direction:column;

background:white;
height:450px;
box-shadow:rgb(0 0 0 / 80% )0px 40px 58px -16px,
    rgb(0 0 0 / 72%)0px 30px 22px -10px;
`
const ProductTitle = styled.span`
color:black;
margin-bottom:5px;
`
const ProductPrice = styled.span`
color:#000;
display:flex;
align-items:flex-start;
`
const ProductRating = styled.span`
//margin-bottom:10px;
display:flex;
`
const ProductImage = styled.div`
cursor:pointer;
display:flex;
flex-grow:1;
margin-bottom:15px;

img{
    width:95%;
    height:210px;
    flex:1;
    object-fit:contain;
    

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
