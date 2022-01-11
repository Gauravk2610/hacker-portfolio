import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ExpertiseComponent from './ExpertiseComponent';
const ExperienceList = [
    {
        title: 'Pyramid Cyber Security & Forensic Pvt. Limited.',
        timeline: '2016',
        work: [
            'Conducting Web application penetration testing based on OWASP Top 10 flaws.',

        ]
    },
    {
        title: 'ISYX Technologies',
        timeline: '2017',
        work: [
            'Conducting Web application penetration testing based on OWASP Top 10 flaws.',
            'Config Review.',
            'Mobile Penetration testing'
        ]
    },
    {
        title: 'Broctagon Fintech Group',
        timeline: '2018',
        work: [
            'Conducting Web application penetration testing based on OWASP Top 10 flaws.',
            'Android Penetration testing'
        ]
    },
    {
        title: 'Assistant Manager - Risk Advisory',
        timeline: 'Current',
        work: [
            'Red Teaming',
            'Conducting Web application Penetration Testing Based on OWASP Top 10 Flaws.',
            'Conducting Android Application Penetration Testing.',
            'Conducting iOS Application Penetration Testing.',
            'Source Code Review'
        ]
    },
]

const EducationList = [
    {
        title: 'High School',
        timeline: '2012',
        work: [
            'MP Board Govt. Boys School, MP, India',
        ]
    },
    {
        title: 'Bachelor of Computer Application',
        timeline: '2015',
        work: [
            'Jiwaji University, Gwalior, MP, India',
        ]
    },
]

function Expertise() {
    return (
        <Container>
            <Title>My Expertises</Title>
            <Wrap>
                {
                    EducationList.map((item, index) => 
                        <ExpertiseComponent 
                            key={index}
                            title={item.title}
                            timeline={item.timeline}
                            work={item.work}
                        />
                    )
                }
                {
                    ExperienceList.map((item, index) => 
                        <ExpertiseComponent 
                            key={index}
                            title={item.title}
                            timeline={item.timeline}
                            work={item.work}
                        />
                    )
                }
                {/* <SectionWrap>
                    <Left>
                        <PTitle>High School</PTitle>
                        <p>MP Board Govt. Boys School, MP, India</p>
                    </Left>
                    <Middle>
                        <Ball>
                            <FmdGoodIcon />
                        </Ball>
                    </Middle>
                    <Right>
                        <Date>2012</Date>
                    </Right>
                </SectionWrap>
                <SectionWrap>
                    <Left>
                        <Date>2012</Date>
                    </Left>
                    <Middle>
                        <Ball>
                            <FmdGoodIcon />
                        </Ball>
                    </Middle>
                    <Right>
                        <PTitle>High School</PTitle>
                        <p>MP Board Govt. Boys School, MP, India</p>
                    </Right>
                </SectionWrap> */}
                {/* <Experience>
                    <Heading>My Experience</Heading>
                    {
                        ExperienceList.map((data, index) => 
                            <ProfileCard key={index}>
                                <div>
                                    <PrTitle>{data.title}</PrTitle>
                                    <TimeLine>{data.timeline}</TimeLine>
                                    {data.work.map((item, index) => 
                                        <p key={index} >{item}</p>   
                                    )}
                                </div>
                            </ProfileCard>
                        )
                    }
                </Experience>

                <Education>
                    <Heading>My Education</Heading>
                    {
                        EducationList.map((data, index) => 
                            <ProfileCard key={index}>
                                <div>
                                    <PrTitle>{data.title}</PrTitle>
                                    <TimeLine style={{ width: 'fit-content' }} >{data.timeline}</TimeLine>
                                    {data.work.map((item, index) => 
                                        <p key={index} >{item}</p>   
                                    )}
                                </div>
                            </ProfileCard>
                        )
                    }
                </Education> */}
            </Wrap>
        </Container>
    )
}

export default Expertise

const Container = styled(motion.div)`
`

const Title = styled(motion.div)`
    display: flex;
    justify-content: center;
    font-size: 36px;
    font-variant: small-caps;
    /* font-weight: 600; */
`

const Wrap = styled(motion.div)`
    /* display: flex; */
    margin: 26px 0;
    /* justify-content: space-between; */
    position: relative;
    @media(max-width: 760px) {
        flex-direction: column;
    }
`

const SectionWrap = styled.div`
    display: flex;
    justify-content: space-between;

`

const Left = styled.div`
    width: 100%;
    padding: 24px 0;
    display: flex;
    flex-direction: column;
    /* align-items: flex-end; */
    p {
        color: rgba(255,255,255,.5);
        font-weight: 300;
        margin: 1.0rem 0;
        margin-bottom: 0.5rem;
    }
`

const PTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
`

const Middle = styled.div`
    position: relative;
    /* top: 0;
    left: 0;
    right: 0;
    bottom: 0; */
    display: flex;
    justify-content: center;
    &:before {  
        position: absolute;

        width: 2px;
        content: '';
        height: 100%;
        background-color: green;
        border-radius: 40px;
    }
`

const Ball = styled.div`
    position: relative;
    width: 40px;
    height: 40px;
    background-color: green;
    border-radius: 40px;
    display: flex;
    justify-content: center;
    align-items: center;

`


const Right = styled.div`
    width: 100%;
    box-sizing: border-box;
`

const Date = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin-left: 48px;
    font-size: 18px;
    color: gray;
`

const Experience = styled(motion.div)`
    width: 100%;
`

const Heading = styled(motion.div)`
    font-size: 26px;
`

const Education = styled(motion.div)`
    width: 100%;
    margin-left: 24px;
    @media(max-width: 760px) {
        margin-left: 0;
        margin-top: 24px;
    }
` 

const ProfileCard = styled(motion.div)`
    max-width: 620px;
    display: flex;
    margin-top: 20px;
    padding: 16px 24px;
    background-color: #101214;
    border-radius: 30px;
    border: 1px solid #131a21;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    box-shadow: 10px 10px 36px rgb(0 0 0 / 50%), -13px -13px 23px rgb(255 255 255 / 3%);
    border-width: 2px 0px 0 2px;

    p {
        color: rgba(255,255,255,.5);
        font-weight: 300;
        margin: 0 0;
        margin-bottom: 0.5rem;
    }
`

const PrTitle = styled(motion.h5)`
    font-weight: 500;
    font-size: 18px;
    margin: 0;
`

const TimeLine = styled(motion.div)`
    margin: 12px 0;
    background-color: #343a40;
    width: fit-content;
    padding: 2px 10px;
    border-radius: 6px;

    @media(max-width: 420px) {
        /* max-width: 200px; */
        width: 180px;
        min-width: 10px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`