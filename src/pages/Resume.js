import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import Certifications from '../components/Certifications'
import Expertise from '../components/Expertise'
import Interviews from '../components/Interviews'
import Skills from '../components/Skills'

function Resume() {
    return (
        <Main
            initial={{ x: '100%' }}
            animate={{ x: 0, transition: { duration: 1 } }}
            exit={{ x: '-100%', transition: { duration: 1 } }}
        >
            <Container>
                <Expertise />
                <Skills />
                <Certifications />
                <Interviews />
            </Container>
        </Main>
    )
}

export default Resume

const Main = styled(motion.div)``

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