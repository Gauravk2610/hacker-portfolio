import React from 'react';
import styled from 'styled-components';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import rajeev from '../assests/testimonials/rajeev_verma.jfif'
import def from '../assests/testimonials/default.jfif'

const TestimonialCardList = [
    {
        message: 'Being a rookie by age and education he might just amaze you with the technical knowledge he owns about Pentest. He is a great resource to a team a good team player and a quick learner. I am sure he will be an asset to any team.',
        userImg: rajeev,
        name: 'Rajeev Verma',
        position: 'Information Security Leader @ SRF Limited'
    },
    {
        message: 'In a very young age he is having very good technical knowledge in Penetration Testing especially, he is good in web application. He is passionate about his work and dedicated for his work. His bug bounty skills makes him different from others and his dedication.',
        userImg: def,
        name: 'Manish Rohilla',
        position: 'Senior SecurityConsultant @ NotSoSecure'
    },
    {
        message: "I've known Shubham for more than 2 years. His vast experience and clear understanding of the concepts makes him an outstanding InfoSec professional. His sound knowledge on domains such as web application security assessments marks him as a key resource anywhere he is placed. Highly recommended as a professional and a friend.",
        userImg: def,
        name: 'Lalit Mohan Sharma',
        position: 'Application Security @ Zynga'
    },
]

const TestimonialCard = ({data: {message, userImg, name, position}}) => (
    <Card>
        <CardWrapper>
            <BoxWrapper>
                <Box>
                    <p>{message}</p>
                </Box>
            </BoxWrapper>
            <Footer>
                <img src={userImg} alt={name} />
                <Info>
                    <div className='name'>{name}</div>
                    <div className='post'>{position}</div>
                </Info>
            </Footer>
        </CardWrapper>
    </Card>
)

function Testimonials() {

    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 5000,
        slidesToScroll: 1
    };

    return (
        <Container>
            <Title>Testimonials</Title>
            <Slider {...settings}>
                {
                    TestimonialCardList.map((data, index) => <TestimonialCard key={index} data={data} />)
                }
            </Slider>
        </Container>
        );
}

export default Testimonials;

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
    font-size: 32px;
    font-variant: small-caps;
    text-align: center;
    position: relative;
    margin-bottom: 36px;
`

const Card = styled.div`

    display: flex;
    justify-content: center;
`

const CardWrapper = styled.div`
    max-width: 660px;
    width: 100%;
    min-width: 200px;
    margin: 0 24px;
 
`

const BoxWrapper = styled.div`
`

const Box = styled.div`
    padding: 30px 36px;
    background-color: white;
    position: relative;
    p {
        margin: 0;
        color: black;
        font-size: 18px;
        font-weight: 600;
    }
    &:before {
        border-right: 30px solid transparent;
        border-top: 30px solid #fff;
        bottom: -30px;
        content: "";
        height: 0;
        position: absolute;
        width: 0;
    }

    
    @media(max-width: 640px) {
        p {
            font-size: 24px;
        }   
    }
    
    @media(max-width: 500px) {
        padding: 26px 32px;
        p {
            font-size: 16px;
        }   
    }

`

const Footer = styled.div`
    margin: 46px 0;
    display: flex;

    img {
        width: 76px;
        height: 76px;
        object-fit: cover;
        margin-right: 24px;
        border-radius: 50%;
    }
    @media(max-width: 500px) {
        img {
            width: 56px;
            height: 56px;
        }
    }
`

const Info = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    .name {
        font-size: 20px;
        font-weight: 600;
    }
    .post {
        color: gray;
    }
    @media(max-width: 500px) {
    .name {
        font-size: 20px;
        }  
    }
`