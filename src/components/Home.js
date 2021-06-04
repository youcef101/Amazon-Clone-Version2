import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import styled from 'styled-components'
import { selectProducts, setProducts } from '../features/products/productSlice'
import db from '../Firebase'
import CardProduct from './CardProduct'
import Sliders from './Slider'




function Home() {
    const dispatch = useDispatch()
    useEffect(() => {
        db.collection('products').onSnapshot(snapshot => {
            console.log(snapshot)
            let tempProducts = snapshot.docs.map(item => {
                return { id: item.id, ...item.data() }

            })
            dispatch(setProducts(tempProducts));
        })

    }, [])
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
