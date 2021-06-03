import React from 'react'
import styled from 'styled-components'
import CardProduct from './CardProduct'
import Sliders from './Slider'




function Home() {
    return (
        <Container>
            <Sliders />
            <CardProduct />
        </Container>
    )
}

export default Home
const Container = styled.div`
height:100vh;
width:100%;
`
