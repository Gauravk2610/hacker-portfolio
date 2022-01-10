import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

function Interviews() {
    return (
        <Container>
            <Title>My Interview</Title>
            <Wrap>
                <img src="https://guptashubham.com/assets/my-images/amar-ujala.png" alt="" />
                <img src="https://guptashubham.com/assets/my-images/News-Chant.png" alt="" />
                <img src="https://guptashubham.com/assets/my-images/digital_gurujii.jpg" alt="" />
                <img src="https://guptashubham.com/assets/my-images/iGadgetsworld.png" alt="" />
                <img src="https://guptashubham.com/assets/my-images/hacker_rank.png" alt="" />
            </Wrap>
        </Container>
    )
}

export default Interviews

const Container = styled.div`

`

const Title = styled(motion.div)`
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-variant: small-caps;
    /* font-weight: 600; */
`

const Wrap = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 24px 0;
    flex-wrap: wrap;

    img {
        max-width: 260px;
        max-height: 100px;
        object-fit: contain;
        margin: 16px 24px;
        cursor: pointer;
        transition: transform 400ms ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }

`