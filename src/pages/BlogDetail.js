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
                    <Title>{singlePost?.title}</Title>
                    <PortableText 
                      value={singlePost?.body}
                      components={{
                        block: {
                          // h3: ({children}) => <h1>{children}</h1>  
                        },
                        types: {
                          // image: SampleImageComponent,
                          image: ({value}) => <BlogImage  src={urlBuilder(client).image(value).url()} />,
                        },
                      }}
                      projectId="mr5wnv0b"
                      dataset="production"
                    />

                    {/* <BlockContent
                        blocks={singlePost?.body}
                        projectId="mr5wnv0b"
                        dataset="production"
                        serializers={serializers}
                    /> */}
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

const BlogImage = styled.img`
  width: 100%;
  height: 100%;
`
