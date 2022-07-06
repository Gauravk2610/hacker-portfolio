import { Close, Dehaze, KeyboardArrowDown } from '@mui/icons-material'
import { motion } from 'framer-motion'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'
import logo from '../assests/logo.PNG'

const MenuItem = [
    {
        title: 'Home',
    }, 
    {
        title: 'About',
    }, 
    {
        title: 'Resume',
    }, 
    {
        title: 'Blog',
    }, 
    {
        title: 'Resources',
        list: ['My methodology', 'How to start into bugbounty']
    }, 
    {
        title: 'Contact',
    }
]
function Header() {

    const { pathname } = useLocation()
    const [show, setShow] = useState(false)
    const [active, setActive] = useState('')


    useEffect(() =>{ 
        const URL = (pathname.replace('/', ''));
        if (URL==='') {
            return setActive('home')
        }
        setActive(URL)
    }, [pathname])

    return (
        <Main>
            <Container>
                <Link to={'/'}>
                    <Logo
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, transition: {delay: 0.2, duration: 1} }}
                    >
                    <img src={logo} alt="" />
                    </Logo>
                </Link>
                <motion.div
                    initial={{ x: '100%', opacity: 0 }}
                    animate={{ x: 0, opacity: 1, transition: {delay: 0.2, duration: 1} }}
                >
                    <Dehaze onClick={setShow} />
                </motion.div>
                <Menu show={show}>
                    <ul>
                        <Close className='close' onClick={() => setShow(!show)} />
                        {
                            MenuItem.map((item, index) => 
                                <div key={index} className='content'>
                                    <Link key={index} onClick={() => setShow(!show)} to={ item.title=='Home'? '/': item?.list ? '#': item.title.toLowerCase()}>
                                        <motion.li
                                            initial={{ x: 100, opacity: 0 }}
                                            animate={{ x: 0, opacity: 1, transition: { delay: 0.2, duration: 1 } }}
                                        className={` ${item.title.toLowerCase() === active && 'active'}`}>{item.title} { item?.list && <KeyboardArrowDown className='arrow' /> }</motion.li>
                                    </Link>
                                    <SubMenu className='dropdown'>
                                        {
                                            item.list?.length > 0 ? item.list.map((subMenu, index) => (
                                                <Link key={index} to={item.title.toLowerCase() + '/' + subMenu.split(' ').join('-')} >{subMenu}</Link>
                                            )): ''
                                        }
                                    </SubMenu>
                                </div>
                            )
                        }

                    </ul>
                </Menu>
            </Container>
            <BurgerNav show={show}>
                <Close className='close' onClick={() => setShow(!show)} />
                <ul className='dropdown'>
                {
                    MenuItem.map((data, index) => (
                        <React.Fragment key={index}>
                            <Link key={index} onClick={() => data?.list ? '' : setShow(!show)} to={ data.title=='Home'? '/': data?.list ? '#': data.title.toLowerCase()}>
                                <li className={` ${data.title.toLowerCase() === active && 'active'}`}>
                                    {data.title} {data?.list && <KeyboardArrowDown />}
                                </li>
                            </Link>
                            {
                                data?.list?.map((item, index) => (
                                    <Link key={index} onClick={() => item?.list ? '' : setShow(!show)} to={data.title.toLowerCase() + '/' + item.split(' ').join('-')}><li key={index} className='dropdown-content'>{item}</li></Link>
                                ))
                            }
                        </React.Fragment>
                            ))
                        }
                </ul>
            </BurgerNav>
        </Main>
    )
}

export default Header

const Main = styled(motion.div)`
    position: sticky;
    top: 0;
    background-color: black !important;
    z-index: 1000000000;
`

const Container = styled.div`

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
            cursor: pointer;
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
    display: flex;
    align-items: center;
    img {
        width: 60px;
        height: 60px;
        object-fit: contain;
    }
`

const Menu = styled.div`
    display: flex;
    flex: 1;
    justify-content: right;
    .close {
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

        .content:hover .dropdown {
            display: flex;
            flex-direction: column;
        }
    }

    .arrow {
        display: inline-flex !important;
    }

    @media (max-width: 760px) {
        display: none;
        /* .close {
            display: flex;
        }
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
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
            .close {
                position: absolute;
                top: 5%;
                right: 10%;
            }
            padding: 0;
            flex-direction: column;
            justify-content: space-evenly;
            li {
                
            }
        } */
    }


`

const SubMenu = styled(motion.div)`
    display: none;
    position: absolute;
    min-width: 150px;
    box-shadow: 0px 8px 16px 0px rgba(255,255,255,0.2);
    z-index: 10000;
    font-size: 20px;
    font-variant: small-caps;
    background-color: black;
    a {
        padding: 16px 24px; 
        cursor: pointer;
    }
    a:hover {
        color: green
    }

    /* @media (max-width: 760px) {
        display: flex;
        flex-direction: column;
        box-shadow: none;
        position: relative;
        min-width: 0;
        a {
            text-align: center;
            padding-left: 0px;
            padding-right: 0px;
        }
    } */
`

const BurgerNav = styled(motion.div)`
    display: none;

    position: fixed;
    inset: 0;
    height: 100vh;
    overflow-y: scroll;
    background-color: black;
    padding: 32px 0px;
    transform: ${props => props.show ? 'translateX(0)' : 'translateX(100%)'};
    transition: transform 500ms ease-in-out;
    .active {
        color: green;
    }
    a:hover {
        color: green;
    }
    a {
        text-decoration: none;
        color: inherit;
    }
    ::-webkit-scrollbar {
        display: none;
    }
    ul {
        display: flex;
        flex-direction: column;
        list-style: none;
        padding: 0;
        li {
            text-align: center;
            font-size: 20px;
            font-variant: small-caps;
            cursor: pointer;
            padding: 16px 0;
            display: flex;
            justify-content: center;
            align-items: flex-end;
        }
        li:hover .dropdown-content {
            display: flex;
        }
        .dropdown-content {
            /* display: none; */
            color: gray;
            font-size: 18px;
            padding: 6px 0;

        }
        .dropdown-content:hover {
            color: green;
        }
    }
    .close {
        position: absolute;
        top: 5%;
        right: 10%;
        cursor: pointer;
    }
    @media (max-width: 760px) {
        display: flex;
        flex-direction: column;
    }
`