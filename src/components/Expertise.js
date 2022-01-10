import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'

const ExperienceList = [
    {
        title: 'Assistant Manager - Risk Advisory',
        timeline: '2018 - Current | Deloitte.',
        work: [
            'Red Teaming',
            'Conducting Web application Penetration Testing Based on OWASP Top 10 Flaws.',
            'Conducting Android Application Penetration Testing.',
            'Conducting iOS Application Penetration Testing.',
            'Source Code Review'
        ]
    },
    {
        title: 'Broctagon Fintech Group',
        timeline: '2017 - 2018 | Broctagon Fintech Group.',
        work: [
            'Conducting Web application penetration testing based on OWASP Top 10 flaws.',
            'Android Penetration testing'
        ]
    },
    {
        title: 'ISYX Technologies',
        timeline: '2016 - 2017| ISYX Technologies.',
        work: [
            'Conducting Web application penetration testing based on OWASP Top 10 flaws.',
            'Config Review.',
            'Mobile Penetration testing'
        ]
    },
    {
        title: 'Pyramid Cyber Security & Forensic Pvt. Limited.',
        timeline: '2015 - 2016 | Pyramid Cyber Security & Forensic Pvt. Limited...',
        work: [
            'Conducting Web application penetration testing based on OWASP Top 10 flaws.',

        ]
    },
]

const EducationList = [
    {
        title: 'Bachelor of Computer Application',
        timeline: '2012-2015',
        work: [
            'Jiwaji University, Gwalior, MP, India',
        ]
    },
    {
        title: 'High School',
        timeline: '2012',
        work: [
            'MP Board Govt. Boys School, MP, India',
        ]
    },
]

function Expertise() {
    return (
        <Container>
            <Title>My Expertises</Title>
            <Wrap>
                <Experience>
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
                </Education>
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
    display: flex;
    margin: 26px 0;
    
    @media(max-width: 760px) {
        flex-direction: column;
    }
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