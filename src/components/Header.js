import { Close, Dehaze } from '@mui/icons-material'
import React, { useState } from 'react'
import styled from 'styled-components'

function Header() {

    const [show, setShow] = useState(false)

    return (
        <Container>
            <Logo>SG</Logo>
            <Dehaze onClick={setShow} />
            <Menu show={show}>
                <ul>
                    <Close onClick={() => setShow(!show)} />
                    <li className='active'>Home</li>
                    <li>About</li>
                    <li>Services</li>
                    <li>Resume</li>
                    <li>Blog</li>
                    <li>Travel</li>
                    <li>Contact</li>
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
    background-color: black;
    .MuiSvgIcon-root {
        display: none;
    }

    @media(max-width: 1280px) {
        width: 90vw;
    }
    
    @media (max-width: 760px) {
        display: flex;
        .MuiSvgIcon-root {
            display: flex;
        }
    }
    @media (max-width: 420px) {
        width: 80vw;
    }

`

const Logo = styled.div`
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
            transition:  all 200ms ease-in-out;
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