import { motion } from 'framer-motion';
import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';
import hackerspider from '../assests/hackerspider1.PNG'
import Achievements from '../components/Achievements';
import Testimonials from '../components/Testimonials';
import WhatIDo from '../components/WhatIDo';
import Confetti from 'react-confetti'


function NewHome() {

    const [bday, setBday] = useState(false)

    const width = window.outerWidth
    const height = window.outerHeight

    useEffect(() => {
        const currentDate = new Date();
        const cDay = currentDate.getDate()
        const cMonth = currentDate.getMonth() + 1

        if(cDay === 14 && cMonth === 3) setBday(true)

    }, [])

    return (
        <>
        <Main
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: { duration: 1 } }}
            exit={{ x: '-100%', transition: { duration: 1 } }}
        >
            {
                bday &&
                <Confetti
                    width={width}
                    height={height}
                    recycle={false}
                    numberOfPieces={1000}
                    tweenDuration={10000}
                    />
            }
            <Container>
                <Left
                    initial={{ x: '-100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                >   
                    <IntroSection>
                        <Typewriter
                            options={{
                                delay: 75
                            }}
                            onInit={(typewriter)=> {
                            typewriter
                            
                            .typeString("<span class='intro'>Hello</span><br /><span class='name'>I am <span id='r'>Shubham</span> <span id='b'>Gupta</span></span><br /><span class='desc'> Penetration Tester, Bug Hunter, Traveller</span>")
                            
                            .pauseFor(1000)
                            // .deleteAll()
                            // .typeString("Welcomes You")
                            .start();
                            }}
                        />
                    </IntroSection>
                    <SocialMedia>
                        <a href="https://discord.gg/NeGvnmuB/">
                            <img align="left" alt="Abhishek's Discord" src="https://github.com/hackerspider1/hackerspider1/blob/main/discord.svg?raw=true" />
                        </a>
                        <a href="https://twitter.com/hackerspider1">
                            <img align="left" alt="Shubham Gupta | Twitter" width="22px" src="https://raw.githubusercontent.com/peterthehan/peterthehan/master/assets/twitter.svg?raw=true" />
                        </a>
                        <a href="https://www.linkedin.com/in/hackerspider1/">
                            <img align="left" alt="Shubham LinkedIN" width="22px" src="https://github.com/hackerspider1/hackerspider1/blob/main/linkedin.svg?raw=true" />
                        </a>
                        <a href="https://www.facebook.com/hackerspider1/">
                            <img align="left" alt="Shubham Facebook" width="22px" src="https://github.com/hackerspider1/hackerspider1/blob/main/facebook.svg?raw=true" />
                        </a>
                        <a href="https://www.instagram.com/hackerspider1/">
                            <img align="left" alt="Shubham Instagram" width="22px" src="https://github.com/hackerspider1/hackerspider1/blob/main/instagram.svg?raw=true" />
                        </a>
                    </SocialMedia>
                        {/* <Intro>Hello</Intro>
                        <Name>I am Shubham Gupta</Name>
                        <Desc></Desc> */}
                </Left>
                <Right>
                    <motion.img 
                        initial={{ x: "100%", opacity: 0.4 }}
                        animate={{ x: 0, opacity: 1, transition: { duration: 1.0 } }}
                        src={hackerspider} alt="" />
                </Right>
            </Container>
            <WhatIDo />
            <Testimonials />
            <Achievements />
        </Main>
        </>

    )
}

export default NewHome

const Main = styled(motion.div)``

const Container = styled(motion.div)`
    width: 80vw;
    margin: 6vh auto;
    margin-bottom: 0px;
    display: flex;
    justify-content: space-between;
    @media(max-width: 1280px) {
        width: 90vw;
    }
    @media(max-width: 1024px) {
        flex-direction: column;
        align-items: center;
    }
    @media (max-width: 760px) {
        width: 80vw;
    }
    @media (max-width: 420px) {
        width: 80vw;
    }
    
    
`

const Left = styled(motion.div)`
    display: flex;
    flex-direction: column;
    margin: 6vh 0;
    font-variant: small-caps;
    min-height: 200px;
    #r {
        color: green;
        font-size: 60px;
        /* text-decoration: underline; */
    }

    #b {
        color: green;
        font-size: 60px;

    }

    .Typewriter__cursor {
        font-size: 5vh;
        mix-blend-mode: color;
    }

    .intro {
        font-size: 38px;
        margin: 1vh 0;
        color: white;
    }
    .name {
        font-size: 38px;
        margin: 1.2vh 0;
        color: white;
    }
    .desc {
        font-size: 38px;
        margin: 1.6vh 0;
        color: white;
    }
    @media (max-width: 640px) {
        margin: 0 0 10vh 0;
        .intro {
            font-size: 26px;
        }
        .name {
            font-size: 40px;
        }
        .desc {
            font-size: 28px;
        }
    }
`

const IntroSection = styled.div`
    height: 300px;
    @media (max-width: 640px) {
        height: 320px;
    }
`

const Intro = styled.div`
    font-size: 6vh;
    position: relative;
    text-transform: uppercase;
    margin: 1vh 0;
    &:after {
        content: '';
        width: 26vw;
        height: 2px;
        position: absolute;
        top: 50%;
        margin-left: 10%;
        background: white;
    }
` 

const Name = styled.div`
    font-size: 8vh;
    margin: 1vh 0;
    text-transform: uppercase;
`

const Desc = styled.div`
    font-size: 5vh;
    margin: 1vh 0;
    text-transform: uppercase;

`

const Right = styled.div`

    img {
        width: 36vw;
        min-width: 320px;
        max-height: 440px;
        height: 100%;
        object-fit: contain;
    }
    @media(max-width: 1024px) {
        img {
            max-width:  880px;
            width: 100%;
            min-width: 260px;
            max-height: 480px;
            height: 100%;
        }

    }
    @media(max-width: 640px) {
        img {
            max-width:  580px;
            width: 100%;
            min-width: 260px;
            max-height: 580px;

        }
    }
`

const SocialMedia = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 300px;

    img {
        width: 32px;
        height: 36px;
        object-fit: contain;
    }

`

const Title = styled(motion.div)`
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-variant: small-caps;
    margin-bottom: 32px;
`

