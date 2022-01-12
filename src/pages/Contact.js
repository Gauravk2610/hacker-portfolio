import { useFormik } from 'formik';
import { motion } from 'framer-motion'
import React from 'react'
import styled from 'styled-components'
import ContactUser from '../assests/Contact2.JPG'

function Contact() {

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        onSubmit: async values => {
            alert(JSON.stringify(values, null, 2));
        },
    });

    return (
        <Main
        initial={{ x: '100%' }}
        animate={{ x: 0, transition: { duration: 1 } }}
        exit={{ x: '-100%', transition: { duration: 1 } }}
        >
            <Container>
                <Title>Contact</Title>
                <Wrap>
                    <Left>
                        <ImgWrap>
                            <img src={ContactUser} alt="" />
                        </ImgWrap>
                        <TextWrap>
                            <Intro>We are always open for business</Intro>
                            <Desc>
                                We dont hack to impress we hack to express We dont hack to impress we hack to express We dont hack to impress we hack to express We dont hack to impress we hack to express
                            </Desc>
                        </TextWrap>
                    </Left>
                    <Right>
                        <FormWrap>
                            <form onSubmit={formik.handleSubmit} >
                                <div>
                                    <label htmlFor="name">Name</label>
                                    <input 
                                        id='name' 
                                        className='name'                             
                                        onChange={formik.handleChange} 
                                        value={formik.values.name}  
                                        type='text' placeholder='Your Name' required />
                                </div>
                                <div>
                                    <label htmlFor="email">Email</label>
                                    <input 
                                        id='email' 
                                        className='email'                             
                                        onChange={formik.handleChange} 
                                        value={formik.values.email}  
                                        type='text' placeholder='Your Email' required />
                                </div>
                                <div>
                                    <label htmlFor="subject">Subject</label>
                                    <input 
                                        id='subject' 
                                        className='subject'                             
                                        onChange={formik.handleChange} 
                                        value={formik.values.subject}  
                                        type='text' placeholder='Your Subject' required />
                                </div>
                                <div>
                                    <label htmlFor="message">Message</label>
                                    <textarea 
                                        id='message' 
                                        className='message'                             
                                        onChange={formik.handleChange} 
                                        value={formik.values.message}  
                                        type='text' placeholder='Your Message' required />
                                </div>
                                <button type='submit'>Send your message</button>
                            </form>
                        </FormWrap>
                    </Right>
                </Wrap>
            </Container>
        </Main>
    )
}

export default Contact

const Main = styled(motion.div)`
    overflow-x: hidden;

`


const Container = styled(motion.div)`
    width: 80vw;
    margin: 6vh auto;
    /* display: flex; */
    @media(max-width: 1280px) {
        width: 90vw;
    }
    @media(max-width: 1024px) {
        /* flex-direction: column;
        align-items: flex-start; */
    }
    @media (max-width: 760px) {
        width: 80vw;
        flex-direction: column;
        /* align-items: center; */
    }
    @media (max-width: 420px) {
        width: 80vw;
    }
`

const Title = styled(motion.div)`
    display: flex;
    /* justify-content: center; */
    font-size: 36px;
    font-variant: small-caps;
`

const Wrap = styled(motion.div)`
    display: flex;
    margin: 26px 0;

    @media(max-width: 760px) {
        flex-direction: column;
    }
`

const Left  = styled(motion.div)`
    width: 100%;
`

const ImgWrap = styled.div`
    max-width: 560px;
    min-width: 260px;
    img {
        width: 100%;
        min-width: 360px;
    }
    @media(max-width: 760px) {
        img {
            min-width: 180px;
        }
    }
`

const TextWrap = styled(motion.div)`
    padding: 24px 0;
    max-width: 560px;
    color: green;
`

const Intro = styled(motion.div)`
    font-size: 28px;
    color: white;

`

const Desc = styled(motion.div)`
    margin-top: 12px;
`

const Right = styled(motion.div)`
    width: 100%;
    margin-left: 32px;
    @media(max-width: 760px) {
        margin-left: 0;
    }
`

const FormWrap = styled(motion.div)`
    div {
        display: flex;
        flex-direction: column;
        margin-bottom: 24px;
        max-width: 100%;
        min-width: 120px;
    }
    label {
        font-size: 18px;
    }
    input, textarea {
        /* width: 100%;
        min-width: 100px; */
        margin: 6px 0;
        padding: 12px 14px;
        background: rgb(255, 255, 255, 0.1);
        font-size: 16px;
        color: green;
        font-weight: 600;
        outline: none;
        border: none;
    }
    input:focus, input:active {
        /* color: green; */
    }
    textarea {
        height: 100px;
        resize: none;
    }
    #message::-webkit-scrollbar {
        width: 8px;
    }

        /* Track */
    #message::-webkit-scrollbar-track {
        background: rgb(255, 255, 255, 0.1); 
    }
    
    /* Handle */
    #message::-webkit-scrollbar-thumb {
        background: rgb(255, 255, 255, 0.2); 
        border-radius: 20px;
    }

    /* Handle on hover */
    #message::-webkit-scrollbar-thumb:hover {
        background: rgb(255, 255, 255, 0.3);  
    }

    button {
        padding: 14px 20px;
        background-color: white;
        font-weight: 600;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 4px 4px 10px white;
    }
`
