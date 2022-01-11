import React from 'react'
import styled from 'styled-components'
import FmdGoodIcon from '@mui/icons-material/FmdGood';
import { Fade } from 'react-reveal';

function ExpertiseComponent({ title, timeline, work }) {
    return (
            <SectionWrap>
                <Left className='left-section'>
                    <Fade bottom>
                        <LeftWrap className='left-wrap'>
                            <LeftDate>{timeline}</LeftDate>
                            <PTitle>{title}</PTitle>
                            {work.map((item, index) => 
                                <p><span className='dot'>·</span><div>{item}</div></p>
                            )}
                        </LeftWrap>
                    </Fade>
                </Left>
                <Fade bottom>
                    <Middle>
                        <Ball>
                            <FmdGoodIcon />
                        </Ball>
                    </Middle>
                </Fade>
                <Right className='right-section'>
                    <Fade bottom>
                        <Date>{timeline}</Date>
                    </Fade>
                </Right>
            </SectionWrap>
    )
}

export default ExpertiseComponent


const SectionWrap = styled.div`
    display: flex;
    justify-content: space-between;
    :nth-child(even) {
        flex-direction: row-reverse;
        .left-section {
            align-items: flex-end;
        }
        .left-wrap {
            /* margin: 0 48px; */
        }
        .right-section {
            justify-content: flex-end;
        }
    }
    :last-child {
        .left-section {
            padding-bottom: 0;
        }
    }

    @media(max-width: 640px) {
        :nth-child(odd) {
            flex-direction: row-reverse;
            .left-section {
                align-items: flex-end;
            }
            .left-wrap {
                /* margin: 0 48px; */
            }
            .right-section {
                justify-content: flex-end;
            }
        }
    }

`

const Left = styled.div`
    width: 100%;
    padding: 24px 0;
    display: flex;
    flex-direction: column;

    /* align-items: center; */
    p { 
        color: rgba(255,255,255,.5);
        font-weight: 300;
        margin: 1.0rem 0;
        margin-bottom: 0.5rem;
        display: flex;
        /* max-width: 60%; */
    }

    p .dot {
        margin-right: 4px;
        font-size: 18px;
    }
   
    @media(max-width: 640px) {
        padding: 0 10px 26px 10px;
    }
`

const LeftDate = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin: 0 48px;
    font-size: 18px;
    color: gray;
    display: none;
    @media(max-width: 640px) {
        margin: 0 12px 0 0; 
        width: 40px;
        font-size: 14px;
        display: inline-flex;
    }


`

const LeftWrap = styled.div`
    display: flex;
    max-width: 70%;
    width: 100%;
    flex-direction: column;
    &:after {
        content: '';
        width: 100%;
        height: 2px;
        background-color: green;
        margin-top: 16px;
    }
    @media(max-width: 640px) {
        max-width: 100%;
    }
`

const PTitle = styled.div`
    font-weight: 500;
    font-size: 24px;
`

const Middle = styled.div`
    position: relative;
    height: 100%;
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
    display: flex;
    @media(max-width: 640px) {
        width: auto;
        display: none;
    }
`

const Date = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    margin: 0 48px;
    font-size: 18px;
    color: gray;
    @media(max-width: 640px) {
        margin: 0 12px 0 0; 
        width: 40px;
        font-size: 14px;
    }
`
