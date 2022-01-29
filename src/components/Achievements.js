import { BugReport, BusinessCenter, MilitaryTech } from '@mui/icons-material';
import { style } from '@mui/system';
import React from 'react';
import styled from 'styled-components';
import CountUp from 'react-countup';
import VisibilitySensor  from 'react-visibility-sensor'

const CardListItem = [
    {
        title: 'Hall Of Fame',
        icon: <MilitaryTech />,
        count: 600
    },
    {
        title: 'Bugs Reported',
        icon: <BugReport />,
        count: 1337
    },
    {
        title: 'Projects',
        icon: <BusinessCenter />,
        count: 50
    },
] 

const Card = ({data: {title, icon, count}}) => (
    <CardContainer>
        <CardWrapper>
            <CardIcon>
                {icon}
            </CardIcon>
            <CardTitle>{title}</CardTitle>
            <CardCount>
                    <CountUp end={count} >
                    {({ countUpRef, start }) => (
                        <VisibilitySensor onChange={start}>
                            <div>
                                <span ref={countUpRef} />
                                <span>+</span>
                            {/* <button  onClick={start}>Start</button> */}
                            </div>
                    </VisibilitySensor> 
                    )}
                    </CountUp>
            </CardCount>
        </CardWrapper>
    </CardContainer>
)

function Achievements() {
    return (
        <Container>
            <Title>Achievements</Title>
            <Wrapper>
                {
                    CardListItem.map((data, index) => <Card key={index} data={data} />)
                }
            </Wrapper>
        </Container>
    );
}

export default Achievements;

const Container = styled.div`
    width: 80vw;
    margin: 6vh auto;
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
    position: relative;
    margin-bottom: 36px;
`

const Wrapper = styled.div`
    display: flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    padding-top: 36px;
`

const CardContainer = styled.div`
    max-width: 240px;
    width: 100%;
    min-width: 300px;
    margin: 24px 24px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    background-image: linear-gradient(to right, #006175 0%, #00a950 100%) !important;
    height: 160px;
    /* height: 100%; */
    .MuiSvgIcon-root {
        font-size: 80px !important;
    }
`

const CardWrapper = styled.div`
    /* max-width: 230px; */
    width: 100%;
    /* height: 100%; */
    height: 140px;
    box-sizing: border-box;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* padding-top: 40px; */
    margin: 10px;
    /* margin-top: 10px; */
    background-color: black;
`

const CardIcon = styled.div`
    position: absolute;
    top: -25%;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
`

const CardTitle= styled.div`
    font-size: 22px;
    text-align: center;
`

const CardCount = styled.div`
    font-size: 36px;
    text-align: center;
`