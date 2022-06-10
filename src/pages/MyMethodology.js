import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import dArrow from '../assests/down_arrow.png'

const Arrow = () => (
    <DownArrow>
        <img src={dArrow} alt="" />
    </DownArrow>
)

function MyMethodology() {
    return (
        <Container>
            <Wrapper>
                <Title className='heading' style={{ maxWidth: 490, width: '100%' }} href='https://github.com/hackerspider1/EchoPwn' target={'_blank'}>Recon</Title>
                    <Arrow />
                <SubWrapper>
                    <Category>
                        <Title className='main-title'  href='https://github.com/projectdiscovery/subfinder' target={'_blank'}>
                            Subdomain Discovery
                            <HoverBox className='comment'>
                                A subdomain is, as the name would suggest, an additional section of your main domain name.
                                The more subdomains you find, the bigger attack surface you have.
                            </HoverBox>
                        </Title>
                        <Arrow />
                        <Title  style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/projectdiscovery/subfinder' target={'_blank'} >SubFinder</Title>
                        <Arrow />
                        <Title  style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/tomnomnom/assetfinder' target={'_blank'} >AssetFinder</Title>
                        <Arrow />
                        <Title  style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/Findomain/Findomain' target={'_blank'} >Findomain</Title>
                    </Category>
                    <Category>
                        <Title className='main-title'  href='#'>
                            Content Discovery
                            <HoverBox className='comment'>
                                Content can be different types such as images, files, etc. There are 3 main ways to discover content: Manually, Automated, Osint(Open-Source Intelligence) methods.
                            </HoverBox>
                        </Title>
                        <Arrow />
                        <Title  style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/assetnote/kiterunner' target={'_blank'}>KiteRunner</Title>
                        <Arrow />
                        <Title  style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/maurosoria/dirsearch' target={'_blank'}>DirSearch</Title>
                        <Arrow />
                        <Title  style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/ffuf/ffuf' target={'_blank'}>Ffuf</Title>
                    </Category>
                    <Category>
                        <Title className='main-title'  href='#'>
                            OSINT
                            <HoverBox className='comment'>
                                OSINT framework focused on gathering information from free tools or resources. The intention is to help people find free OSINT resources.
                            </HoverBox>
                        </Title>
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://www.shodan.io/' target={'_blank'}>Shodan</Title>
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/lanmaster53/recon-ng' target={'_blank'}>Recon-ng</Title>
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://spyse.com' target={'_blank'}>Spyse</Title>
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://haveibeenpwned.com/' target={'_blank'}>HaveibeenPwned</Title>
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://www.exploit-db.com/google-hacking-database' target={'_blank'}>Google Dorks</Title>
                    </Category>
                    <Category>
                        <Title className='main-title'  href='#'>Active Scanning</Title>
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://nmap.org/' target={'_blank'}>Nmap</Title> 
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/projectdiscovery/naabu' target={'_blank'}>Naabu</Title> 
                        <Arrow />
                        <Title style={{ backgroundColor: 'white', color: 'black' }} href='https://github.com/projectdiscovery/nuclei' target={'_blank'}>Nuclei</Title> 
                    </Category>
                </SubWrapper>
                <Title className='heading' style={{ maxWidth: 390, width: '100%' }}  href='https://github.com/hackerspider1/Recon-bugbounty' target={'_blank'}>Automation</Title>
            </Wrapper>
        </Container>
    );
}

export default MyMethodology;

const Container = styled(motion.div)`
    width: 80vw;
    margin: 6vh auto;
    min-height: 100vh;
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

const Wrapper = styled.div`
    .main-title {
        background-image: linear-gradient(to right,#006175 0%,#00a950 100%)
    }
    .heading {
        background-image: linear-gradient(to right, #00ff4f 0%, #00ffff 25%, #ff69b4 50%, #4169e1 100%);
    }
`

const Title = styled.a`
    text-align: center;
    text-decoration: none;
    margin: 0 auto;
    font-size: 22px;
    width: 240px;
    height: 60px;
    color: inherit;
    background-color: green;
    display: flex;
    position: relative;
    justify-content: center;
    align-items: center;
    font-weight: 600;
    border-radius: 10px;
    
    &:hover{
        .comment {
            height: auto;
            /* display: inline-flex; */
            top: -200%;
            left: -20%;
            width: 260px;
            font-size: 12px;
            opacity: 1;
            padding: 10px 16px;
            &:before {
                border-left: 20px solid transparent;
                border-top: 20px solid #fff;
                bottom: -20px;
                right: 20px;
                content: "";
                height: 0;
                position: absolute;
                width: 0;
            }
        }
    }
`

const DownArrow = styled.div`
    margin: 16px 0;
    display: flex;
    justify-content: center;
    img {
        max-height: 63px;
    }

`

const SubWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const Category = styled.div`
    position: relative;
    margin: 0 32px;
    padding-bottom: 64px;
`

const HoverBox = styled.div`
    position: absolute;
    top: -0%;
    left: -0%;
    width: 0;
    background-color: white;
    padding: 0px;
    height: 0;
    opacity: 1;
    overflow: none;
    font-size: 0;
    color: black;
    /* display: none; */
    /* height: 40px; */
    box-sizing: border-box;
    transition: all 400ms ease-in-out;

`