import React from 'react'
import styled from 'styled-components'
import MenuIcon from '@material-ui/icons/Menu';

function SubHeader() {
    return (
        <Container>
            <MenuContainer>
                <Menu>
                    <MenuIc />
                </Menu>
                <MenuText>
                    All
                </MenuText>
            </MenuContainer>
            <MenuNavContainer>
                <a>Today's Deals</a>
                <a>Buy Again</a>
                <a>Customer Service</a>
                <a>Registry</a>
                <a>Sell</a>
                <a>Gift Cards</a>
            </MenuNavContainer>
            <CovidContainer>
                <Covid>Amazon's response to COVID-19</Covid>
            </CovidContainer>

        </Container>
    )
}

export default SubHeader
const Container = styled.div`
height:40px;
background:#000d1a;
display:flex;
align-items:center;

`
const MenuContainer = styled.div`
display:flex;
align-items:center;
padding:20px;
cursor:pointer;

`
const Menu = styled.div`
display:flex;
align-items:center;

`
const MenuIc = styled(MenuIcon)``
const MenuText = styled.span`
font-weight:500;
`
const MenuNavContainer = styled.div`
flex:1;
a{
    padding:0 10px;
    cursor:pointer;
}
`
const CovidContainer = styled.div`
padding:20px;
cursor:pointer;
`
const Covid = styled.span`
`