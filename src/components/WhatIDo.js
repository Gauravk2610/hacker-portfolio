import { BorderColor, BugReport, FlagOutlined, Laptop } from '@mui/icons-material';
import React from 'react';
import styled from 'styled-components';

const List = [
    {                
        icon: <Laptop />,
        title: 'Penetration Testing',
        desc: 'Doing web/mobile application security assessments and network security testings'
    },
    {                
        icon: <BorderColor />,
        title: 'Blogging',
        desc: 'I write blogs on topics related to cybersecurity for clients and for my own blog.'
    },
    {                
        icon: <BugReport />,
        title: 'Bug Bounty Hunting',
        desc: 'Doing bug bounty hunting currently ranked...'
    },
    {                
        icon: <FlagOutlined />,
        title: 'CTF Player',
        desc: 'I actively take part in web and mobile based CTF(Capture the flag) challenges to learn new things and sharpen my skills'
    },
]

const Card = ({item: {icon, title, desc}}) => (
    <MainCard>
        <Circle>
            <Icon>{icon}</Icon>
        </Circle>
        <CardTitle>{title}</CardTitle>
        <CardDesc>{desc}</CardDesc>
    </MainCard>
)

function WhatIDo() {
  return (
    <Container>
        <Title>What I Do?</Title>
        <CardWrapper>
            {
                List.map((item, index) => <Card key={index} item={item} />)
            }
        </CardWrapper>
    </Container>
  );
}

export default WhatIDo;

const Container = styled.div`
    width: 80vw;
    margin: 0 auto;
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

const Title = styled.div`
    font-size: 32px;
    font-variant: small-caps;
    text-align: center;

    &:before{
        position: absolute;
        bottom: 0;
        width: 100%;
        height: 1px;
        background-color: green;
    }
`

const CardWrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
`

const MainCard = styled.div`
    max-width: 360px;
    margin: 32px 0;
    width: 100%;
    min-width: 260px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const Circle = styled.div`
    background-image: linear-gradient(to right, #006175 0%, #00a950 100%) !important;
    border-radius: 50%;
    height: 100px;
    width: 100px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const Icon = styled.div`
    width: 90px;
    height: 90px;
    background: black;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    .MuiSvgIcon-root {
        font-size: 32px !important;
    }
`

const CardTitle = styled.div`
    margin: 10px 0;
    font-size: 20px;
`

const CardDesc = styled.div`
    text-align: center;
    font-size: 16px;
    color: gray;
    max-width: 90%;
`