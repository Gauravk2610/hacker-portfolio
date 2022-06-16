import { KeyboardArrowDown, KeyboardArrowUp } from '@mui/icons-material';
import { Accordion } from 'responsive-react-accordion';
import { useFormik } from 'formik';
import { motion } from 'framer-motion'
import React, { useState } from 'react'
import styled from 'styled-components'
import ContactUser from '../assests/hacker1.gif'
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { db } from './firebase';
import toast, { Toaster } from "react-hot-toast";


const QNA = [
    {
        question: 'What is Bug Bounty?',
        answer: "A bug bounty is a monetary reward given to ethical hackers for successfully discovering and reporting a vulnerability or bug to the application's developer."
    },
    // {
    //     question: 'How can i become an Hacker?',
    //     answer: ""
    // },
    {
        question: 'Can i get a JOB after I become an Ethical Hacker?',
        answer: "Computer experts are often hired by companies to hack into their system to find vulnerabilities and weak endpoints so that they can be fixed."
    },
    // {
    //     question: 'How do I earn money from Ethical Hacking?',
    //     answer: ""
    // },
    // {
    //     question: 'Can i learn these things in college?',
    //     answer: ""
    // },
    {
        question: 'How many bugbounty platforms are there?',
        answer: "Hackerone, Bugcrowd, Synack, Yogosha, Yeswehack, Intigiri"
    },
]

function Contact() {
    const [loading, setLoading] = useState(false)

    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            subject: '',
            message: '',
        },
        onSubmit: async values => {
            // alert(JSON.stringify(values, null, 2));
            setLoading(true)
            const { name, email, subject, message} = values
            addDoc(collection(db, 'contactus'), {
                name: name,
                email: email,
                subject: subject,
                message: message,
                timestamp: serverTimestamp()
            })
            toast.success("Your message has been sent ")
            formik.resetForm()
            setLoading(false)
        },
    });

    return (
        <Main
        initial={{ x: '100%' }}
        animate={{ x: 0, transition: { duration: 1 } }}
        exit={{ x: '-100%', transition: { duration: 1 } }}
        >
            <Toaster />
            <Container>
                <Title>Contact</Title>
                <Wrap>
                    <Left>
                        <ImgWrap>
                            <img src={'https://guptashubham.com/archieve/assets/gif/hacking.gif'} alt="" />
                        </ImgWrap>
                        <TextWrap>
                            {/* <Intro>We Don't Hack To Impress We Hack To Express.</Intro> */}
                            {/* <Desc>
                                
                            </Desc> */}
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
                                <button disabled={loading} style={{opacity: loading ? 0.4: 1}} type='submit'>Send your message</button>
                            </form>
                        </FormWrap>
                    </Right>
                </Wrap>
            </Container>
            <FAQ>
                <Title style={{ justifyContent: 'center', marginBottom: 32 }}>FAQ</Title>
                {
                    QNA.map((data, index) => (
                        <Accordion 
                            key={index}
                            title={data.question} 
                            content={data.answer} 
                            openIcon={<KeyboardArrowDown />}
                            closeIcon={<KeyboardArrowUp />}
                            spacing={10} 
                        />
                    ))
                }
            </FAQ>
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
    justify-content: center;
    font-size: 32px;
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
    max-width: 660px;
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
    font-size: 24px;
    color: green;

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
        max-width: 560px;
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
        background-color: green;
        font-weight: 600;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        color: white;
    }
`
const FAQ = styled.div`
    width: 80vw;
    display: flex;
    flex-direction: column;
    margin: 0vh auto;
    padding: 0 0 6vh 0;
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
    .accordion-container {
        max-width: 700px;
        width: 100%;
        margin: 0 auto;
    }
    .accordion {
    /* here you can add a univeral bg color and style the remainig component according */
    /* example */
    background-color: #000;
    border: 2px solid white;
    border-radius: 12px;
    color: white;
    }

    /* .accordion-title this is where the title of accordion is kept */
    .accordion-title {
    /* style the title of the accordion  */
    /* example */
    font-size: 18px;
    font-weight: 600;
    padding: 12px 28px !important;
    }

    /* .accordion-collapsible the collapsible content */
    .accordion-collapsible {
    /* style the content of the accordion */
    /* example */
    background-color: black;
    border-bottom-left-radius: 12px;
    font-size: 18px;
    border-bottom-right-radius: 12px;
    color: white;
    }

    /* .accordion-icon  the icons in the .accordion-title element */
    .accordion-icon  {
    /* to set the size of the icon */
    /* example */
    width: 20px;
    }

    .accordion-active {
        border-top: 2px solid green;
    }

    @media (max-width: 420px) {
        .accordion-title {
            font-size: 18px !important;
        }
        .accordion-collapsible {
            font-size: 18px;
        }
    }
`