import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import db from '../Firebase'


function CartItem({ name, price, quantity, id, imageUrl }) {
    const changeQty = (newQty) => {
        db.collection('cartItem').doc(id).update({
            quantity: parseInt(newQty)
        })
    }
    const DeleteItem = () => {
        db.collection('cartItem').doc(id).delete();
    }
    let options = [];
    for (let i = 1; i < Math.max(quantity + 1, 20); i++) {
        options.push(<option value={i}>Qte:{i}</option>)
    }
    return (
        <Container>
            <ProductImage>
                <Link to="#"><img src={imageUrl} /></Link>
            </ProductImage>
            <ProductInfo>
                <ProductInfoTop>
                    <Link to="#">{name}</Link>
                </ProductInfoTop>
                <ProductInfoBottom>
                    <QtyBtn>
                        <select onChange={(e) => { changeQty(e.target.value) }}
                            value={quantity}>
                            {options}
                        </select>
                    </QtyBtn>
                    <DeleteBtn onClick={DeleteItem}>
                        <a>Delete</a>
                    </DeleteBtn>

                </ProductInfoBottom>
            </ProductInfo>
            <ProductPrice>
                ${price}
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
flex-direction:column;
`
const ProductInfoTop = styled.div`
margin-bottom:50px;
a{
    text-decoration:none;
    font-weight:500;
    :focus{
        color:#6666ff;
    }
}
`
const ProductInfoBottom = styled.div`
display:flex;
`
const QtyBtn = styled.div`
margin-right:10px;
select{
    
    width:70px;
    border-radius:4px;
    cursor:pointer;
    :focus{
        outline:none;
    }
}
`
const DeleteBtn = styled.div`
a{
    font-weight:500;
    font-size:14px;
    cursor:pointer;
}
`
const ProductPrice = styled.div`
font-weight:500;
`
