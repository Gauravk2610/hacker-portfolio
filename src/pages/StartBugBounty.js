import { motion } from "framer-motion";
import React from "react";
import styled from "styled-components";

const DataList = [
  {
    img: require("../assests/resources/bounty/basics.gif"),
  },
  {
    img: require("../assests/resources/bounty/books.gif"),
    links: [
        {
            title: "The Web Application Hacker's Handbook: Finding and Exploiting Security Flaws",
            link: 'https://www.amazon.in/Web-Application-Hacker′s-Handbook-Exploiting/dp/1118026470/ref=sr_1_3?keywords=hackers+handbook&qid=1651750097&sprefix=hackers+%2Caps%2C210&sr=8-3'
        },
        {
            title: "Android Hacker's Handbook 1st Edition",
            link: 'https://www.amazon.in/Android-Hackers-Handbook-Joshua-Drake-ebook/dp/B00K5B5Q80/ref=sr_1_5?keywords=hackers+handbook&qid=1651750097&sprefix=hackers+%2Caps%2C210&sr=8-5'
        },
        {
            title: "The Web Application Hacker′s Handbook: Discovering and Exploiting Security Flaws",
            link: 'https://www.amazon.in/Web-Application-Hacker′s-Handbook-Discovering/dp/0470170778/ref=sr_1_7?keywords=hackers+handbook&qid=1651750097&sprefix=hackers+%2Caps%2C210&sr=8-7'
        },
        {
            title: "The Mobile Application Hacker's Handbook 1st Edition",
            link: 'https://www.amazon.in/Mobile-Application-Hackers-Handbook-ebook/dp/B00TSA6KLG/ref=sr_1_14?keywords=hackers+handbook&qid=1651750097&sprefix=hackers+%2Caps%2C210&sr=8-14'
        },
    ]
  },
  {
    img: require("../assests/resources/bounty/video.gif"),
    links: [
        {
            title: 'Nahamsec',
            link: 'https://www.youtube.com/c/nahamsec'
        },
        {
            title: 'STOKfredrikc',
            link: 'https://www.youtube.com/c/STOKfredrikc'
        },
        {
            title: 'CodingGo',
            link: 'https://www.youtube.com/c/codingo'
        },
        {
            title: 'LiveOverflow',
            link: 'https://www.youtube.com/c/LiveOverflow'
        },
    ]
  },
];

const CardWrap = ({ data: { img, links } }) => (
  <CardContainer>
    <Left>
      <img src={img} alt="" />
    </Left>
    <Right>
        <div>
            {
                links?.map((book, index) => (
                <Links key={index}>
                    <a
                    href={book.link}
                    target={"_blank"}
                    rel="noopener noreferrer"
                    >{book?.title}</a>
                </Links>

                ))
            }

        </div>
    </Right>
  </CardContainer>
);

function StartBugBounty() {
  return (
    <Container>
      <Wrapper>
        {DataList.map((data, index) => (
          <CardWrap data={data} />
        ))}
      </Wrapper>
    </Container>
  );
}

export default StartBugBounty;

const Container = styled(motion.div)`
  width: 80vw;
  margin: 6vh auto;
  min-height: 100vh;
  /* display: flex; */
  @media (max-width: 1280px) {
    width: 90vw;
  }
  @media (max-width: 1024px) {
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
`;

const Wrapper = styled.div``;

const CardContainer = styled.div`
  display: flex;
  margin-bottom: 24px;
  /* flex-wrap: wrap; */
  justify-content: space-evenly;
  :nth-child(even) {
    flex-direction: row-reverse;
  }

  @media (max-width: 870px) {
    flex-direction: column;
    :nth-child(even) {
      flex-direction: column;
    }
  }
`;

const Left = styled.div`
  width: 100%;
  height: 470px;
  img {
    max-width: 560px;
    width: 100%;
    max-height: 420px;
    height: 100%;
    object-fit: contain;
  }
  @media (max-width: 870px) {
    height: fit-content;
    margin-bottom: 24px;
  }
`;

const Right = styled.div`
  width: 100%;
  margin-top: 36px;
  display: flex;
  font-size: 20px;
  flex-direction: column;
  ul {
    list-style: none;
  }
  :nth-child(even) {
    align-items: center;
    }

  @media (max-width: 870px) {
    align-items: flex-start;
    margin-top: 0px;
    :nth-child(even) {
        align-items: flex-start;
        
    }
  }

`;

const Links = styled.div`
    
    margin: 12px 0;

    a {
        color: white;
        text-decoration: none;
        font-size: 22px;
        transition: text-decoration 500ms ease-in-out;
    }
    a:hover {
        text-decoration: underline;
    }
`