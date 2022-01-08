import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled, { keyframes } from 'styled-components'
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

function Home() {
    const [click, setClick] = useState(false)

    return (
        <Container>
            <LeftBar
                initial={{ x:'-100%' }}
                animate={{ x: 0, transition:{ duration: 0.6 } }}
            >
                {/* Top Logo */}
                <Logo
                    initial={{ opacity: 0, scale: 0.2 }}
                    animate={{ opacity: 1, scale: 1.0, transition: { duration: 0.4, delay: 0.2 } }} 
                >SG</Logo>

                {/* Social Media */}
                <SocialMedia>
                    <motion.a
                        initial={{ y: 100, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1, transition: { duration: 1.0, delay: 0.2 } }} 
                        whileHover={{ scale: 1.4, marginBottom: '20px' }}
                        href="#">
                        <FacebookOutlinedIcon />
                    </motion.a>
                    <motion.a 
                        initial={{ y: 100, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1, transition: { duration: 1.0, delay: 0.2 } }} 
                        whileHover={{ scale: 1.4, marginBottom: '20px' }}
                        href="#">
                        <InstagramIcon />
                    </motion.a>
                    <motion.a 
                        initial={{ y: 100, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1, transition: { duration: 1.0, delay: 0.2 } }} 
                        whileHover={{ scale: 1.4, marginBottom: '20px' }}
                        href="#">
                        <LinkedInIcon />
                    </motion.a>
                    <motion.a 
                        initial={{ y: 100, opacity: 0 }} 
                        animate={{ y: 0, opacity: 1, transition: { duration: 1.0, delay: 0.2 } }} 
                        whileHover={{ scale: 1.4, marginBottom: '20px' }}
                        href="#">
                        <TwitterIcon />
                    </motion.a>
                </SocialMedia>
            </LeftBar>
            <Kali 
                click={click}
                onClick={() => setClick(!click)}
                src='https://ih0.redbubble.net/image.208539360.1700/sticker,375x360.png'>
            </Kali>
        </Container>
    )
}

export default Home

const Container = styled(motion.div)`
    color: white;
`

const LeftBar = styled(motion.div)`
    width: 80px;
    /* background-color: red; */
    border-right: 1.5px solid white;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 16px 0;
    box-sizing: border-box;
`

const Logo = styled(motion.div)`
    background-color: inherit;
    font-family: "Agustina Regular";
    font-size: 26px;
    font-weight: 800;
`

const SocialMedia = styled(motion.div)`
    background-color: inherit;
    display: flex;
    flex-direction: column;
    align-items: center;

    a {
        margin: 6px 0;
    }

    .MuiSvgIcon-root {
        color: #0f0;
        width: 2.5rem !important;
        height: 2.5rem !important;
    }
`

const rotate = keyframes`
    from {
        transform: translate(-50%, -50%) rotate(0);
    }
    to {
        transform: translate(-50%, -50%) rotate(360deg);
    }
`

const Kali = styled(motion.img)`
    position: fixed;
    top: ${ props => props.click ? '88%' : '50%' };
    left: ${ props => props.click ? '95%' : '50%' };
    cursor: pointer;
    width:  ${ props => props.click ? '6vw' : '20vw' };
    animation: ${rotate} infinite 1s linear;
    transition: all 0.6s ease-in-out;
    /* box-shadow: 0px 0px 20px white;
    border-radius: 200%;
    border: 2px solid black; */
`
