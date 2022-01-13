import { motion, useAnimation } from 'framer-motion'
import React, { useEffect } from 'react'
import styled from 'styled-components'
import { useInView } from 'react-intersection-observer';
import { buildStyles, CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import AnimatedProgressProvider from './AnimatedProgressProvider';
import { easeQuadInOut } from "d3-ease";

const draw = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i) => {
      const delay = 1 + i * 0.5;
      return {
        pathLength: 1,
        opacity: 1,
        transition: {
          pathLength: { delay, type: "spring", duration: 1.5, bounce: 0 },
          opacity: { delay, duration: 0.01 }
        }
      };
    }
};

const SkillList = [
    {
        title: 'Web Application Security Testing',
        count: 90
    },
    {
        title: 'Mobile Application Security Testing',
        count: 70
    },
    {
        title: 'Api Security Testing',
        count: 70
    },
    {
        title: 'Network Security Testing',
        count: 80
    },
    {
        title: 'Red Teaming',
        count: 70
    },
]

function Skills() {
    const controls = useAnimation();
    const { ref, inView } = useInView();

    useEffect(() => {
        if (inView) {
          controls.start('visible');
        }
        if (!inView) {
          controls.start('hidden');
        }
      }, [controls, inView]);
      
    return (
        <Container>
            <Title>My Skills</Title>
            <Wrap>
            <motion.svg height={1}>
                <linearGradient y1="0" y2="1" id="gradient">
                    <stop stop-color="#00ff4f" offset="0"></stop>
                    <stop stop-color="#00ffff" offset="0.33"></stop>
                    <stop stop-color="#ff69b4" offset="0.66"></stop>
                    <stop stop-color="#4169e1" offset="1"></stop>
                </linearGradient>
            </motion.svg>
            <SkillCard ref={ref}>
                {SkillList.map((data, index) => 
                    <Circle>
                        <AnimatedProgressProvider
                            valueStart={0}
                            valueEnd={data.count}
                            duration={1.4}
                            easingFunction={easeQuadInOut}
                            >
                            {(value) => {
                                const roundedValue = Math.round(value);
                                return (
                                <CircularProgressbar
                                    value={value}
                                    text={`${roundedValue}%`}
                                    /* This is important to include, because if you're fully managing the
                                animation yourself, you'll want to disable the CSS animation. */
                                    styles={buildStyles({ pathTransition: "none" })}
                                >
                                
                                </CircularProgressbar>
                                );
                            }}
                        </AnimatedProgressProvider>
                        <SkillName>{data.title}</SkillName>
                    </Circle>
                )}

                </SkillCard>
            </Wrap>
        </Container>
    )
}

export default Skills

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
    padding: 26px 0;
`

const SkillCard = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    
    @media (max-width: 760px) {
        align-items: center;
        flex-direction: column;
    }
`

const Circle = styled(motion.div)`
    max-width: 120px;
    width: 100%;
    min-width: 10px;
    padding: 0 24px;
    margin-bottom: 32px;
`

const SkillName = styled(motion.div)`
    padding: 26px 0;
    font-size: 24px;
    text-align: center;
    color: rgb(255, 255, 255, 0.8);
`