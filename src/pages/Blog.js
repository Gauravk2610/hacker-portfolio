import { style } from '@mui/system';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import client from '../client';

function Blog() {

    const [posts, setPosts] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        client
          .fetch(
            `*[_type == "post"] {
            title,
            slug,
            body,
            categories,
            publishedAt,
            mainImage {
              asset -> {
                _id,
                url
              },
              alt
            }
          }`
          )
          .then((data) => setPosts(data))
          .catch(console.error)
          setTimeout(() => {
              setIsLoading(false)
          }, 400);
    }, [])

  return (
    <Container>
        {
            isLoading ? 
            <Loading>
                <Kali 
                    src='https://ih0.redbubble.net/image.208539360.1700/sticker,375x360.png'>
                </Kali>
            </Loading>
            :
            posts.map((post, index) => 
                <BlogCard key={index}>
                    <Link style={{display: 'flex', flex: 1}} to={`/blog/${post.slug.current}`}>
                        <img src={post.mainImage.asset.url} alt="" />
                        <Detail  className='details'>
                            <Title>{post.title}</Title>
                            <Category>Bug Bounty</Category>
                            <Date>{post.publishedAt}</Date>
                        </Detail>
                    </Link>
                </BlogCard>
            )
            }
                
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
    
    a {
        color: inherit;
        text-decoration: none
    }

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
        a {
           flex-direction: column;
        }
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

const rotate = keyframes`
    from {
        transform: rotate(0);
    }
    to {
        transform: rotate(360deg);
    }
`

const Loading = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 60vh;

`

const Kali = styled(motion.img)`
    cursor: pointer;
    /* margin: 0 auto; */
    width: 160px;
    animation: ${rotate} infinite 1s linear;
    transition: all 0.6s ease-in-out;
    /* box-shadow: 0px 0px 20px white;
    border-radius: 200%;
    border: 2px solid black; */

`
