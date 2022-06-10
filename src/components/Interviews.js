import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

function Interviews() {
    return (
        <Container>
            <Title>My Interview</Title>
            <Wrap>
                <a href="https://www.amarujala.com/amp/delhi-ncr/bashindey/ethical-hacker-shubham-gupta-know-all-about-him" target="_blank">
                    <img src="https://guptashubham.com/archieve/assets/my-images/amar-ujala.png" alt="" />
                </a>
                <a href="https://newschant.com/technology/indian-ethical-hacker-shubham-gupta-shares-his-career-journey-and-life-story/" target="_blank">
                    <img src="https://guptashubham.com/archieve/assets/my-images/News-Chant.png" alt="" />
                </a>
                <a href="https://www.digitalgurujii.com/interview-with-indian-ethical-hacker-shubham-gupta/" target="_blank">
                    <img src="https://guptashubham.com/archieve/assets/my-images/digital_gurujii.jpg" alt="" />
                </a>
                <a href="https://www.igadgetsworld.com/interview-with-yahoo-hall-of-fame-mr-shubham-gupta/" target="_blank">
                    <img src="https://guptashubham.com/archieve/assets/my-images/iGadgetsworld.png" alt="" />
                </a>
                <a href="https://www.hackerone.com/blog/Hacker-QA-Shubham-gupta-Patience-and-Passion" target="_blank">
                    <img src="https://guptashubham.com/archieve/assets/my-images/hacker_rank.png" alt="" />
                </a>
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
    font-size: 32px;
    font-variant: small-caps;
    /* font-weight: 600; */
`

const Wrap = styled(motion.div)`
    display: flex;
    justify-content: center;
    padding: 24px 0;
    flex-wrap: wrap;
    align-items: center;
    img {
        max-width: 200px;
        max-height: 80px;
        object-fit: contain;
        margin: 16px 24px;
        cursor: pointer;
        transition: transform 400ms ease-in-out;

        &:hover {
            transform: scale(1.2);
        }
    }

`