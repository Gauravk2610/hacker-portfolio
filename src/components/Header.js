import { Close, Dehaze } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'

function Header() {

    const [show, setShow] = useState(false)

    return (
        <Container>
            <Logo
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: {delay: 0.2, duration: 1} }}
            >SG</Logo>
            <motion.div
                initial={{ x: '100%', opacity: 0 }}
                animate={{ x: 0, opacity: 1, transition: {delay: 0.2, duration: 1} }}
            >
                <Dehaze onClick={setShow} />
            </motion.div>
            <Menu show={show}>
                <ul>
                    <Close onClick={() => setShow(!show)} />
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    className='active'>Home</motion.li>
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    >About</motion.li>
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    >Services</motion.li>
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    >Resume</motion.li>
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    >Blog</motion.li>
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    >Travel</motion.li>
                    <motion.li
                        initial={{ x: 100, opacity: 0 }}
                        animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                    >Contact</motion.li>
                </ul>
            </Menu>
        </Container>
    )
}

export default Header

const Container = styled.div`
    position: sticky;
    top: 0;
    width: 80vw;
    margin: 0 auto;
    padding: 16px 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: black !important;
    z-index: 1000000000;
    .MuiSvgIcon-root {
        display: none;
    }

    @media(max-width: 1280px) {
        width: 90vw;
    }
    
    @media (max-width: 760px) {
        width: 80vw;
        display: flex;
        .MuiSvgIcon-root {
            display: flex;
        }
    }
    @media (max-width: 420px) {
        width: 80vw;
    }

`

const Logo = styled(motion.div)`
    font-family: "Agustina Regular";
    font-size: 32px;
    font-weight: 800;
`

const Menu = styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    .MuiSvgIcon-root {
        display: none;
    }
    ul {
        display: flex;
        list-style: none;
        align-items: center;
        flex-grow: 1;
        justify-content: right;

        li {
            padding: 0 1.5vw;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
            font-variant: small-caps;
            /* transition:  all 200ms ease-in-out; */
        }
        
        li:hover, .active {
            color: green;
            cursor: pointer;
        }
    }

    @media (max-width: 760px) {
        .MuiSvgIcon-root {
            display: flex;
        }
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        display: flex;
        flex: 1;
        flex-direction: column;
        width: 100%;
        background-color: black;
        z-index: 1000;
        justify-content: left;
        transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
        transition: transform 500ms ease-in-out;

        ul {
            .MuiSvgIcon-root {
                position: absolute;
                top: 5%;
                right: 10%;
            }
            padding: 0;
            flex-direction: column;
            justify-content: space-evenly;
            li {
                
            }
        }
    }


`