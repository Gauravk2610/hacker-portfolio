import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Footer() {
  return (
    <Container>
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
        <CopyWright>Copyright © 2022, All rights reserved.</CopyWright>
        <Info><a href="https://www.linkedin.com/in/gaurav-konde-51aab6193/" target='_blank'>Personally Crafted 🎨 By <span>Gaurav Konde</span></a></Info>
    </Container>
  );
}

export default Footer;

const Container = styled(motion.div)`
    border-top: 0.5px solid white;
    padding: 16px 0;
    margin: 6vh auto;
    margin-bottom: 0px;
    /* display: flex; */
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

const SocialMedia = styled.div`

    display: flex;
    justify-content: space-between;
    margin: 10px auto;
    max-width: 300px;

    img {
        width: 26px;
        height: 36px;
        object-fit: contain;
    }

`

const CopyWright = styled.div`
    font-size: 14px;
    text-align: center;
    @media(max-width: 560px){
        font-size: 15px;
    }
`

const Info = styled.div`
    margin: 6px 0;
    text-align: center;
    font-size: 14px;
    a {
        text-decoration: none;
        color: white;
    }
    span {
        color: green;
    }
    @media(max-width: 560px){
        font-size: 12px;
    }
`