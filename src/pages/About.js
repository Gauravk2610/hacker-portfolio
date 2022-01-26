import { Downloading } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Image from '../assests/ShubhamGupta.PNG'

function About() {
    return (
        <Main
        initial={{ x: '100%' }}
        animate={{ x: 0, transition: { duration: 1 } }}
        exit={{ x: '-100%', transition: { duration: 1 } }}
        >
            <Container>
                <Left>
                    <img src={Image} alt="" />
                </Left>
                <Right>
                    {/* <Intro>Let’s<br /> Introduce About Myself</Intro> */}
                    <Desc><span style={{ fontSize: '3.4rem', color: 'green' }}>A</span> passionate, enthusiastic and self-motivated cybersecurity professional having more than five years of experience as an IT security consultant and researcher. I work on multiple cybersecurity domains including Web-App Security, Network Security, Information Security, Ethical Hacking, Vulnerability Testing etc.</Desc>
                    <Desc><span style={{ fontSize: '3.4rem', color: 'green' }}>W</span>ith rich experience of working for different public and private ventures pan India and globally (KSA, UAE, Qatar, Hong Kong), presently I’m working as Assistant Manager in Big4. Academically I’m computer graduate (BCA) and have qualified numerous cybersecurity certifications.</Desc>
                    <Desc><span style={{ fontSize: '3.4rem', color: 'green' }}>N</span>ot only health and fitness enthusiast, travelling is my another forte when there is no hacking. I often manage time for helping those who want to grow or step-into Security Industry.</Desc>
                </Right>
            </Container>
            <Button>
                <a href="https://guptashubham.com/assets/docs/Shubham.pdf" target="_blank"><Downloading /> Download CV</a>
            </Button>
        </Main>
    )
}

export default About

const Main = styled(motion.div)`
    overflow-x: hidden;
    min-height: 100vh;
`

const Container = styled(motion.div)`
    width: 80vw;
    margin: 6vh auto;
    display: flex;
    @media(max-width: 1280px) {
        width: 90vw;
    }
    @media(max-width: 1024px) {
        /* flex-direction: column;
        align-items: flex-start; */
    }
    @media (max-width: 760px) {
        width: 80vw;
        flex-direction: column;
        /* align-items: center; */
    }
    @media (max-width: 420px) {
        width: 80vw;
    }
`

const Left = styled(motion.div)`
    max-width: 600px;
    width: 100%;
    /* min-width: 400px; */
    img {
        max-height: 420px;
        height: 100%;
        object-fit: contain;
        width: 100%;
        min-width: 260px;
    }
    @media (max-width: 760px) {
        max-width: 100%;
    }
`

const Right = styled(motion.div)`
    width: 100%;
    min-width: 560px;
    margin-left: 80px;
    min-width: 160px;
    @media(max-width: 760px) {
        margin-left: 0;
        margin-top: 60px;
    }
`

const Intro = styled(motion.div)`
    font-size: 32px;
    font-variant: small-caps;
    font-weight: 600;

`

const Desc = styled(motion.div)`
    margin: 6px 0 ;
    /* color: grey; */
    font-size: 20px;
    width: 90%;
`

const Button = styled(motion.div)`
    display: flex;
    justify-content: center;
    margin-bottom: 16px;

    a {
        box-shadow: 0px 0px 20px white;
        border-radius: 40px;
        padding: 16px 24px;
        text-decoration: none;
        color: green;
        font-size: 26px;
        display: flex;
        align-items: center;
        transition: all 200ms ease-in-out;
        .MuiSvgIcon-root {
            margin-right: 12px;
            font-size: 32px !important;
        }
    }
    a:hover {
        box-shadow: 0px 0px 20px green;
        color: white;
    }
`