import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from 'styled-components';

function Sliders() {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
    };
    return (
        <Container>
            <Carousel {...settings}>
                <Wrap>
                    <img src="https://imgur.com/SYHeuYM.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://imgur.com/SYHeuYM.jpg" />
                </Wrap>
                <Wrap>
                    <img src="https://imgur.com/SYHeuYM.jpg" />
                </Wrap>

            </Carousel>
        </Container>
    )
}

export default Sliders
const Container = styled.div`

`
const Carousel = styled(Slider)`
margin:20px 40px;
button{
    z-index:1;
    color:black;
    
}



`
const Wrap = styled.div`
height:300px;

img{
    border:1px solid transparent;
    border-radius:4px;
    width:100%;
    height:100%;
    box-shadow:#e6e6e6 0px 26px 30px -10px,
    #e6e6e6 0px 16px 10px -10px;
}
`
