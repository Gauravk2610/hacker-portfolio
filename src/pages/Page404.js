import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';

function Page404() {
  return (
    <Container>
        <Main>
            <Wrapper>
                <img src="https://cdn.dribbble.com/users/285475/screenshots/2083086/dribbble_1.gif" alt="" />
                <Content>
                    <div>404</div>
                </Content>
            </Wrapper>
        </Main>
    </Container>
    );
}

export default Page404;

const Container = styled(motion.div)`
    width: 80vw;
    margin: 1vh auto;
    @media(max-width: 1280px) {
        width: 90vw;
    }
    @media(max-width: 1024px) {

    }
    @media (max-width: 760px) {
        width: 80vw;
    }
    @media (max-width: 420px) {
        width: 80vw;
    }

`

const Main = styled(motion.div)`
    width: 88%;
    margin: 15vh auto;
`

const Wrapper = styled(motion.div)`
    position: relative;
    img {
        position: relative;
        /* position: absolute;
        top: 0;
        left: 0;
        right: 0; */
        display: flex;
        margin: 0 auto;
        max-height: 500px;
        height: 100%;
        max-width: 860px;
        min-width: 260px;
        width: 100%;
        object-fit: contain;
    }
`

const Content = styled(motion.div)`
    position: absolute;
    inset: 0;
    text-align: center;
`