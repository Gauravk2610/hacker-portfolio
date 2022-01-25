import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import Typewriter from "typewriter-effect";

const data = '<p class=``>&#707 <span id="y">ERROR CODE</span>: "<span id="lg">HTTP 403 Forbidden</span>" </p> \
  <p>&#707 <span id="y">ERROR DESCRIPTION</span>: "<span id="lg">Access Denied. You Do Not Have The Permission \
  To Access This Page On This Server</span>"</p><p>&#707 <span id="y">ERROR POSSIBLY CAUSED BY</span>: [<span id="b">\
  execute access forbidden, read access forbidden, write access forbidden, ssl required, ssl 128 required, ip address \
  rejected, client certificate required, site access denied, too many users, invalid configuration, password change, mapper\
  denied access, client certificate revoked, directory listing denied, client access licenses exceeded, client certificate\
  is untrusted or invalid, client certificate has expired or is not yet valid, passport logon failed, source access denied,\
  infinite depth is denied, too many requests from the same client ip...</span>]</p><p>&#707 <span id="y"> SOME PAGES ON THIS\
  SERVER THAT YOU DO HAVE PERMISSION TO ACCESS</span>: [Home Page, About Us, Contact Us, Blog...]</p>\
  <p>&#707 <span id="y">HAVE A NICE DAY SIR AXLEROD :-)</span></p>'

function Page403() {
  return (
    <Container>
      <h1>403</h1>
      <ContentWrapper>
        <Typewriter
          options={{
          delay: 0.1
          }}
          onInit={(typewriter)=> {

          typewriter
          
          .typeString(data)
          
          .pauseFor(1000)
          // .deleteAll()
          // .typeString("Welcomes You")
          .start();
          }}
      />
      </ContentWrapper>
    </Container>
    );
}

export default Page403;

const Container = styled(motion.div)`
@import url("https://fonts.googleapis.com/css?family=Share+Tech+Mono|Montserrat:700");
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

.Typewriter__cursor {
  display: none;
}
h1 {
    font-size: 45vw;
    text-align: center;
    position: fixed;
    /* width: 100vw; */
    z-index: 1;
    color: #ffffff26;
    text-shadow: 0 0 50px rgb(0 0 0 / 7%);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    /* transform: translateY(-50%) translateX(5%); */
    font-family: "Montserrat", monospace;
}

p {
  font-family: "Share Tech Mono", monospace;
  font-size: 2.4vh;
  color: #f5f5f5;
}

#y {
  color: #f0c674
}

#lg {
  color: #8abeb7;
}

#b {
  color: #81a2be;
}

`

const ContentWrapper = styled(motion.div)`
  display: flex;
  min-height: 80vh;
  max-width: 80vw;
  margin-top: 6vh;
  /* align-items: center; */
  /* justify-content: center; */
`