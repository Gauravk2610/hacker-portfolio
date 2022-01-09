import { motion } from 'framer-motion';
import React from 'react'
import styled from 'styled-components'
import Typewriter from 'typewriter-effect';

function NewHome() {
    return (
        <Container>
            <Left
                initial={{ x: '-100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
            >
                <Typewriter
                    options={{
                        delay: 75
                    }}
                    onInit={(typewriter)=> {
                    typewriter
                    
                    .typeString("<span class='intro'>Hello</span><br /><span class='name'>I am <span id='r'>Shubham</span> <span id='b'>Gupta</span></span><br /><span class='desc'>Ethical Hacker, Penetration Tester, Bug Hunter, Traveller</span>")
                    
                    .pauseFor(1000)
                    // .deleteAll()
                    // .typeString("Welcomes You")
                    .start();
                    }}
                />
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
    )
}

export default NewHome


const Container = styled.div`
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
        color: red;
        text-decoration: underline;
    }

    #b {
        color: blue;
    }

    .Typewriter__cursor {
        font-size: 5vh;
        mix-blend-mode: color;
    }

    .intro {
        font-size: 38px;
        margin: 1vh 0;
    }
    .name {
        font-size: 60px;
        margin: 1.2vh 0;
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
    }

    @media(max-width: 640px) {
        img {
            max-width:  420px;
            width: 100%;
            min-width: 260px;
        }
    }
`