import axios from 'axios';
import { motion } from 'framer-motion';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import Typewriter from "typewriter-effect";
import { data } from '../assests/splash';

function Splash({setShowSplash}) {
    const [completed, setCompleted] = useState(false)
    const [trigger, setTrigger] = useState(false)
    var ip

    const getData = async () => {
        const res = await axios.get('https://geolocation-db.com/json/')
        console.log(Boolean(res.data));
        if (Boolean(res.data)) {
            ip = res.data.IPv4
            // setIP(res.data.IPv4)
            console.log(res.data.IPv4)
        }
    }
    
    function sleep(milliseconds) {  
        return new Promise(resolve => setTimeout(resolve, milliseconds));  

    }  
    const updateIP = async() => {
        console.log(ip)
        for (var i=0; i<= ip.length; i++){
            document.querySelector('.ip').innerHTML += ip.charAt(i)
            await sleep(50)
        }
        setCompleted(true)
    }

    const clicked = async() => {
        if (completed) {
            setTrigger(true)
            await sleep(1200)
            setShowSplash(false)
        }
    }

    useEffect(() => {
        const listener = async event => {
            if (completed) {
                if (event.code === "Enter" || event.code === "NumpadEnter") {
                  console.log("Enter key was pressed. Run your function.");
                  event.preventDefault();
                  setTrigger(true)
                  await sleep(1200)
                  setShowSplash(false)
                  // callMyFunction();
                }
            }
        };
        document.addEventListener("keydown", listener);
        return () => {
          document.removeEventListener("keydown", listener);
        };
      }, [completed]);

    return (
        <Container
            initial={{ x: 0 }}
            animate={ trigger && [{ x: '-100%', transition: {delay: 0.2, duration: 1} }]}
            onClick={clicked}
        >
            <Wrap>
                <Typewriter
                    options={{
                    delay: 0.2
                    }}
                    onInit={(typewriter)=> {
                    getData()

                    typewriter
                    
                    .typeString(data + "<br />Your IP address is: <span class='ip'></span>")
                    
                    .pauseFor(1000)
                    .callFunction(()=>updateIP())
                    // .deleteAll()
                    // .typeString("Welcomes You")
                    .start();
                    }}
                />
            </Wrap>
        </Container>
    )
}

export default Splash

const Container = styled(motion.div)`
    background-color: black;
    height: 100vh;
    width: 100%;
`

const Wrap = styled.div`

    font-family: courier, monospace;
    color: #fff;
    width:80vw;
    margin-left:auto;
    margin-right:auto;
    padding-top:100px;
    font-size:2vh;
    /* font-size:14px; */

    a {
        color: #0bc;
        text-decoration: none;
    }
    #danger {
        color: red;
    }

    #a {
        color: #0f0;
    }

    #c {
        color: #0bc;
    }

    #b {
        color: #ff0096;
    }

    #k {
            animation: change infinite 1s linear;
    }

    #op{
            color: #888888
    }

    @keyframes change {
            0%  { color:  #0f0; }
            50% { color:  #0f0; }
            80% { color: black; }
            100% {color: #0f0;}
    }
`