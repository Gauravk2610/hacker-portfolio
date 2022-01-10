import { Close, Dehaze } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

const MenuItem = ['Home', 'About', 'Services', 'Resume', 'Blog', 'Travel', 'Contact']
function Header() {

    const { pathname } = useLocation()
    const [show, setShow] = useState(false)
    const [active, setActive] = useState('')


    useEffect(() =>{ 
        const URL = (pathname.replace('/', ''));
        if (URL==='') {
            return setActive('home')
        }
        console.log(URL)
        setActive(URL)
    }, [pathname])

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
                    {
                        MenuItem.map((item, index) => 
                            <Link key={index} onClick={() => setShow(!show)} to={ item=='Home'? '/': item.toLowerCase()}>
                                <motion.li
                                    initial={{ x: 100, opacity: 0 }}
                                    animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                                className={` ${item.toLowerCase() === active && 'active'}`}>{item}</motion.li>
                            </Link>
                        )
                    }

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
        
        a {
            color: inherit;
            text-decoration: none;
        }

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