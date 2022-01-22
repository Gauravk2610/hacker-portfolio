import { style } from '@mui/system';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Blog() {
  return (
    <Container>
        <BlogCard>
            <img src="https://media.istockphoto.com/photos/cyber-attack-a05-picture-id486818628?k=6&m=486818628&s=170667a&w=0&h=UeAdHnrHlJ99V1KL7Y935v9CRNuZjLaM59Myc9PrM1w=" alt="" />
            <Detail  className='details'>
                <Title>The Synack Platform Expands to Confront the Cyber Skills Gap</Title>
                <Category>Bug Bounty</Category>
                <Date>12 OCTOBER</Date>
            </Detail>
        </BlogCard>
        <BlogCard>
            <img src="https://cdnm.synack.com/wp-content/uploads/2021/11/malcolm-stagg-blog-top-image-285x180.jpg" alt="" />
            <Detail>
                <Title>The Synack Platform Expands to Confront the Cyber Skills Gap</Title>
                <Category>Bug Bounty</Category>
                <Date>12 OCTOBER</Date>
            </Detail>
        </BlogCard>
        <BlogCard>
            <img src="https://cdnm.synack.com/wp-content/uploads/2021/11/malcolm-stagg-blog-top-image-285x180.jpg" alt="" />
            <Detail>
                <Title>The Synack Platform Expands to Confront the Cyber Skills Gap</Title>
                <Category>Bug Bounty</Category>
                <Date>12 OCTOBER</Date>
            </Detail>
        </BlogCard>
        <BlogCard>
            <img src="https://cdnm.synack.com/wp-content/uploads/2021/11/malcolm-stagg-blog-top-image-285x180.jpg" alt="" />
            <Detail>
                <Title>The Synack Platform Expands to Confront the Cyber Skills Gap</Title>
                <Category>Bug Bounty</Category>
                <Date>12 OCTOBER</Date>
            </Detail>
        </BlogCard>
    </Container>
  );
}

export default Blog;

const Container = styled(motion.div)`
    width: 80vw;
    margin: 1vh auto;
`

const BlogCard = styled(motion.div)`
    display: flex;
    cursor: pointer;
    transition: all 200ms ease-in-out;
    margin-bottom: 26px;
    position: relative;
    
    img {
        max-width: 420px;
        width: 100%;

        max-height: 200px;
        height: 100%;
        object-fit: cover;
        margin-right: 42px;
    }
    :first-child {
        flex-direction: column;
        img {
            max-width: 100%;
            min-height: 420px;
        }
        .details {
            position: absolute !important;
            bottom: 0;
            padding: 10px 20px;
            max-width: 100%;
            box-sizing: border-box;
            width: 100%;
            background-image: linear-gradient(
                180deg,
                transparent,
                rgba(37, 37, 37, 0.81),
                #111
            );
        }
        
        &:hover{
            box-shadow: none;
        }
    }

    &:hover{
        box-shadow: 0px 0px 10px 1px green;
    }

    @media(max-width: 760px) {
        flex-direction: column;
        
        img {
            max-width: 100%;
            max-height: 160px;
        }
    }
`

const Detail = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 760px;

    @media(max-width: 760px) {
        padding: 10px 16px;
    }
`

const Title = styled(motion.div)`
    font-size: 26px;
    margin: 10px 0;
`

const Category = styled(motion.div)`
    font-size: 18px;
    margin: 10px 0;
    color: #0f5fff;
`

const Date = styled(motion.div)`
    font-size: 16px;
    margin: 10px 0;
    color: gray;
    font-weight: bold;
`
