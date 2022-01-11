import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

function NewHome() {
    return (
        <Main
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: { duration: 1 } }}
            exit={{ x: '-100%', transition: { duration: 1 } }}
        >
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
                        <a href="https://open.spotify.com/playlist/4VFPUarxug3APc05glP2ou?si=GDLtHkdyRnuaEHALKkdi5w">
                            <img align="left" alt="Shubham Spotify" width="22px" src="https://github.com/hackerspider1/hackerspider1/blob/main/spotify.svg?raw=true" />
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
                        src="https://preview.colorlib.com/theme/satner/img/banner/xhome-right.png.pagespeed.ic.F5fc5uJEZ3.webp" alt="" />
                </Right>
            </Container>
        </Main>
    )
}

export default NewHome

const Main = styled(motion.div)``

const Container = styled(motion.div)`
    width: 80vw;
    margin: 6vh auto;
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
        color: white;
        /* text-decoration: underline; */
    }

    #b {
        color: white;
    }

    .Typewriter__cursor {
        font-size: 5vh;
        mix-blend-mode: color;
    }

    .intro {
        font-size: 38px;
        margin: 1vh 0;
        color: green;
    }
    .name {
        font-size: 60px;
        margin: 1.2vh 0;
        color: green;
    }
    .desc {
        font-size: 38px;
        margin: 1.6vh 0;
        color: green;
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
        height: 260px;
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
        width: 32vw;
        min-width: 320px;
    }

    @media(max-width: 640px) {
        img {
            max-width:  420px;
            width: 100%;
            min-width: 260px;
        }
    }
`

const SocialMedia = styled.div`

    display: flex;
    justify-content: space-between;
    max-width: 300px;

    img {
        width: 32px;
    }

`