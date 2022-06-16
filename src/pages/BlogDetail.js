import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import client from '../client';
import BlockContent from "@sanity/block-content-to-react"
import {PortableText} from '@portabletext/react'
import imageUrlBuilder from "@sanity/image-url";
import { motion } from 'framer-motion';
import kali from '../assests/kali.png'
import urlBuilder from '@sanity/image-url'
import moment from 'moment';
import { getImageDimensions } from '@sanity/asset-utils'

const builder = imageUrlBuilder(client);
function urlFor(source) {
  return builder.image(source);
}

// Barebones lazy-loaded image component
const SampleImageComponent = ({value}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      src={urlBuilder(client).image(value).width('auto').fit('max').auto('format').url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
      }}
    />
  )
}


function BlogDetail() {

    const { slug } = useParams()
    const [singlePost, setSinglePost] = useState([])
    const [isLoading, setIsLoading] = useState(true)
  
    useEffect(() => {
      client
        .fetch(
          `*[slug.current == "${slug}"] {
          title,
          body,
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
        .then((data) => setSinglePost(data[0]))
      client
        .fetch(
          `*[slug.current == "${slug}"]`
        )
        .then((data) => console.log(data))
      setIsLoading(false)
    }, [slug])

    const serializers = {
        types: {
          code: (props) => (
            <pre data-language={props.node.language}>
              <code>{props.node.code}</code>
            </pre>
          ),
        },
      }
      

    return (
        <Container>
            {
                isLoading ? 
                <Loading>
                    <Kali 
                        src={kali}>
                    </Kali>
                </Loading>

                :
                <>
                  <Blog>
                    <BlogContent>
                      <BlogTitle>{singlePost?.title}</BlogTitle>
                      <BlogDate>{moment(singlePost?.publishedAt).format('Do MMMM YYYY')}</BlogDate>
                      <PortableText 
                        value={singlePost?.body}
                        components={{
                          
                          block: {
                            h1: ({children}) => <h1 className="">{children}</h1>,
                            blockquote: ({children}) => <RenderBlockQuote className="code">{children}</RenderBlockQuote>
                          },
                          types: {
                            // image: SampleImageComponent,
                            image: ({value}) => <BlogImage  src={urlBuilder(client).image(value).url()} />,
                          },
                        }}
                        projectId="mr5wnv0b"
                        dataset="production"
                        />
                      </BlogContent>
                      <BlogRedirects>
                        <div className='sticky'>
                          <Discord>
                            <MdTitle>Community</MdTitle>
                            <SmDesc>Get help, raise issues and connect with people</SmDesc>
                            <RedirectButton className='discord' href='https://discord.gg/QTRjdpxFTE' target={'_blank'}  rel="noopener noreferrer">Join our Discord</RedirectButton>
                          </Discord>
                          <Discord>
                            <MdTitle>Chit Chat</MdTitle>
                            <SmDesc>Connect and interact and track cyber security</SmDesc>
                            <RedirectButton className='telegram' href='https://t.me/hackerspider1337' target={'_blank'}  rel="noopener noreferrer">Telegram Group</RedirectButton>
                          </Discord>
                        </div>
                      </BlogRedirects>

                    {/* <BlockContent
                        blocks={singlePost?.body}
                        projectId="mr5wnv0b"
                        dataset="production"
                        serializers={serializers}
                    /> */}
                  </Blog>
                  
                </>
            }
            {console.log(singlePost)}
            {/* <img src={singlePost?.mainImage?.asset?.url} alt="" /> */}
        </Container>
    );
}

export default BlogDetail;

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

    p {
      font-family: 'Kanit', sans-serif;
      font-weight: 300;
      color: rgb(209, 209, 209);
      font-size: 18px;
      word-wrap: break-word;
    }
`
const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 36px;
    font-weight: 600;
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

const Blog = styled.div`
  display: flex;
  position: relative;
  @media(max-width: 1064px) {
    flex-direction: column;
  }
`

const BlogImage = styled.img`
  width: auto;
  max-width: 720px;
  min-width: 260px;
  height: auto;
  @media(max-width: 836px) {
    width: 100%;
  }
`

const BlogContent = styled.div`
  /* max-width: 800px; */
  width: 100%;
  margin-right: 64px;
  flex: 0.7;
  @media(max-width: 1064px) {
    margin-right: 0px;
    flex: 1;
  }
`

const BlogRedirects = styled.div`
  max-width: 420px;
  flex: 0.3;
  margin: 48px auto;
  .sticky {
    position: sticky !important;
    position: -webkit-sticky;
    top: 120px;
  }
  @media(max-width: 1064px) {
    flex: 1;
  }

`

const Discord = styled.div`
  margin-bottom: 48px;
  .discord {
    background-color: rgb(86, 97, 245);
  }
  
  .telegram {
    background-color: #0088CC;
  }
  

`

const MdTitle = styled.h3`
  font-family: "Kanit", sans-serif;
  font-weight: 700;
  font-size: 42px;
  text-transform: uppercase;
  margin: 0;
  text-align: center;
`

const SmDesc = styled.div`
  font-family: "Kanit", sans-serif;
  font-size: 18px;
  font-weight: 300;
  text-align: center;
  margin-bottom: 1rem;
`

const RedirectButton = styled.a`
  font-family: "Kanit", sans-serif;
  text-align: center;
  display: flex;
  width: 100%;
  cursor: pointer;
  align-items: center;
  color: inherit;
  text-decoration: none;
  justify-content: center;
  padding: 12px 12px;
  font-size: 28px;

`

const BlogTitle = styled.h1`
  font-weight: 700;
  font-family: 'Kanit', sans-serif;
  font-size: 54px;
  text-transform: uppercase;
  margin-bottom: 5px;
`

const BlogDate = styled.div`
  font-family: 'Kanit', sans-serif;
  /* font-weight: 300; */
  margin-top: 10px;
  font-kerning: auto;
  font-stretch: 100%;
  font-style: normal;
  letter-spacing: 0px;
  /* line-height: 1.5; */
  color: green;
  text-decoration: none;
  font-size: 15px;
`

const RenderBlockQuote = styled.blockquote`
  margin: 10px 0;
  font-family: 'Kanit', sans-serif;
  padding: 12px 24px;
  border-radius: 4px;
  background: #272727;
  color: #5661f5;
  font-size: 18px;
  word-break: break-word;
`