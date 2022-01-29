import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

function Certifications() {
    return (
        <Container>
            <Title>My Certifications</Title>
            <Wrap>
                <a href="https://guptashubham.com/assets/docs/OSCP.pdf" target="_blank"><img src="https://guptashubham.com/assets/my-images/oscp.png" alt="" /></a>
                <a href="https://guptashubham.com/assets/docs/ewptx.pdf" target="_blank"><img src="https://guptashubham.com/assets/my-images/eWPTXv2.png" alt="" /></a>
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
    font-size: 32px;
    font-variant: small-caps;
    /* font-weight: 600; */
`

const Wrap = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 24px 0;
    align-items: center;

    img {
        max-width: 100px;
        margin: 0 24px;
        cursor: pointer;
    }
`