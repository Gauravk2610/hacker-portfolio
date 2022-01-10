import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

function Certifications() {
    return (
        <Container>
            <Title>My Certifications</Title>
            <Wrap>
                <img src="https://guptashubham.com/assets/my-images/oscp.png" alt="" />
                <img src="https://guptashubham.com/assets/my-images/eWPTXv2.png" alt="" />
            </Wrap>
        </Container>
    )
}

export default Certifications

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

    img {
        max-width: 140px;
        margin: 0 24px;
        cursor: pointer;
    }
`