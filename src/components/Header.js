import React from 'react'
import styled from 'styled-components'
import RoomOutlinedIcon from '@material-ui/icons/RoomOutlined';
import SearchIcon from '@material-ui/icons/Search';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { selectUsername, setSignOut } from '../features/user/userSlice';
import { auth } from '../Firebase';

function Header({ totalQty }) {
    const username = useSelector(selectUsername)
    const dispatch = useDispatch()
    const SignOut = () => {
        auth.signOut()
            .then(res => {
                localStorage.removeItem('user')
                dispatch(setSignOut())
            })
    }
    return (
        <Container>
            <Link to="/">
                <AmazonLogo src="https://i.imgur.com/7I9Was5.png" />
            </Link>
            <AdresseContainer>
                <Marker>
                    <Location />
                </Marker>

                <Adresse>
                    <FirstLineOption>
                        Deliver to {username}
                    </FirstLineOption>
                    <SecondLineOption>
                        Tunis 8031

                    </SecondLineOption>
                </Adresse>

            </AdresseContainer>
            <SearchContainer>
                <SearchInput>

                </SearchInput>
                <SearchBtn>
                    <SearchIc />
                </SearchBtn>
            </SearchContainer>
            <AccountContainer>
                <FirstLineOption>
                    Hello,{username}
                </FirstLineOption>
                <SecondLineOption onClick={SignOut}>
                    Account & Lists

                    </SecondLineOption>
            </AccountContainer>
            <OrderContainer>
                <FirstLineOption>
                    Returns
                    </FirstLineOption>
                <SecondLineOption>
                    & Orders

                    </SecondLineOption>
            </OrderContainer>
            <CartContainer>
                <Link to="/cart">
                    <Cart>
                        <CartIc />
                    </Cart>
                    <QtyItem>{totalQty}</QtyItem>
                </Link>
            </CartContainer>


        </Container>
    )
}

export default Header
const Container = styled.div`
height:65px;
background:#00061a;
display:flex;
align-items:center;
justify-content:space-between;

`
const AmazonLogo = styled.img`
width:100px;
padding-left:20px;
cursor:pointer;
`
const AdresseContainer = styled.div`
display:flex;
margin-left:10px;
cursor:pointer;
`
const Adresse = styled.div``
const FirstLineOption = styled.div`
font-weight:100;
font-size:12px;
`
const SecondLineOption = styled.div`
font-weight:600;
`
const Marker = styled.div`
display:flex;
align-items:flex-end;

`
const Location = styled(RoomOutlinedIcon)`

`
const SearchContainer = styled.div`
display:flex;
margin-left:10px;
border-radius:7px;
overflow:hidden;
flex-grow:1;
:focus-within{
    box-shadow:0 0 0 3px #F90;
}
`
const SearchInput = styled.input`
height:30px;
flex-grow:1;
:focus{
    outline:none;
}

`
const SearchBtn = styled.div`
width:40px;
background:orange;
display:flex;
justify-content:center;
align-items:center;
cursor:pointer;

`
const SearchIc = styled(SearchIcon)`
color:black;
text-align:center;
`
const AccountContainer = styled.div`
margin-left:10px;
cursor:pointer;
`
const OrderContainer = styled.div`
margin-left:10px;
cursor:pointer;
`
const CartContainer = styled.div`
display:flex;
padding-right:10px;
cursor:pointer;
a{
    display:flex;
    text-decoration:none;
    color:white;
}
`
const Cart = styled.div`
margin-left:10px;
`
const CartIc = styled(AddShoppingCartIcon)``
const QtyItem = styled.span`
color:orange;
`
