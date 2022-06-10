import { Construction, IndeterminateCheckBoxTwoTone } from '@mui/icons-material';
import { motion } from 'framer-motion';
import React from 'react';
import styled from 'styled-components';
import IOS from '../assests/resources/IOS.PNG'
import { CodeBlock, CopyBlock, monokaiSublime } from "react-code-blocks";

const IOSToolsList = [
    {
        title: 'Mobile Security Framework MobSF',
        link: 'https://github.com/MobSF/Mobile-Security-Framework-MobSF'
    },
    {
        title: 'Apple Configurator 2',
        link: 'https://apps.apple.com/in/app/apple-configurator-2/id1037126344?mt=12'
    },
    {
        title: 'Unc0ver', 
        link: 'https://topstore.vip/index.html'
    },
    {
        title: 'Objection',
        link: ''
    },
    {
        title: 'Frida'
    },
    {
        title: 'Impactor',
        link: 'http://www.cydiaimpactor.com'
    },
    {
        title: 'SqliteBrowser',
        link: 'https://sqlitebrowser.org/'
    },
    {
        title: 'iFunbox',
        link: 'http://www.i-funbox.com/en/index.html'
    },
    {
        title: 'Altstore',
        link: 'https://altstore.io'
    },
    
]

const Content = [
    {
        title: 'MOBSF',
        content: 'Mobile Security Framework (MobSF) is an automated, all-in-one mobile application (Android/iOS/Windows) pen-testing, malware analysis and security assessment framework capable of performing static and dynamic analysis.',
        sub: [
            {
                title: 'How to install MOBSF',
                img: require('../assests/resources/1.png'),
                code: 'git clone https://github.com/MobSF/Mobile-Security-Framework-MobSF.git\ncd Mobile-Security-Framework-MobSF\n./setup.sh\n./run.sh'
            }
        ]
    },
    {
        title: 'Jailbreaking iPhone',
        content: 'Jailbreaking is the privilege escalation of an Apple device for the purpose of removing software restrictions imposed by Apple on iOS, iPadOS, tvOS and watchOS operating systems.',
        sub: [
            {
                subtitle: 'Check IOS version',
                img: require('../assests/resources/2.png'),
                
            },
            {
                content: ['Go to //ahrefhttps://altstore.io///ahref Download Altstore application I’m using Macbook so ITunes is not required to install app in mobile if you are using windows make sure you install full version ITunes from the following link: https://support.apple.com/downloads/itunes',
                        'Connect your iPhone with Macbook via cable and install Altstore application your iCloud credentials are required you can create a new one if you don’t want to use your.',
                        'Enter your username and Password here'
                        ],
                img: require('../assests/resources/3.png'),
                
            },
            {
                content: ['After that go to //ahrefhttps://iosninja.io/ipa-library/download-unc0ver-jailbreak-ios-12-iphone-ipad-ipod//ahref from your mobile safari browser.'],
                img: require('../assests/resources/4.png')
            },
            {
                content: ['Once download is finished you can open application in AltStore.'],
                img: require('../assests/resources/5.png')
            },
            {
                content: ['You can see unc0ver is successfully install now you can open unc0ver application and run the jailbreak.'],
                img: require('../assests/resources/6.png')
            },
            {
                img: require('../assests/resources/7.png')
            },
            {
                img: require('../assests/resources/8.png')
            },
            {
                content: ['Install Mterminal from Cydia', 'Open Cydia Store and search Mterminal and install it.'],
                img: require('../assests/resources/9.png')
            },
            {
                img: require('../assests/resources/10.png')
            }
        ]
    },
    {
        title: 'SSH Connection',
        content: 'After that you need to install Openssh to get ssh connection for your iPhone.',
        sub: [
            {
                content: ['You can find your device ip from Settings > Wifi > Connected Wifi name > Click on info.', 'SSH Default Credentials:', 'root – alpine', 'mobile - alpine'],
                img: require('../assests/resources/11.png'),
            }
        ]
    },
    {
        title: 'Jailbreak Detection Bypass',
        content: 'Install Liberty Lite from Cydia store.',
        sub: [
            {
                img: require('../assests/resources/12.png'),
            },
            {
                content: ['You can find Liberty Lite in your device settings', 'You can select apps from block Jailbreak Detection'],
                img: require('../assests/resources/13.png'),
            },
        ]
    },
    {
        title: 'SSL Pinning Bypass',
        content: 'Download SSL kill switch2 from //ahrefhttps://github.com/nabla-c0d3/ssl-kill-switch2/releases/download/0.14/com.nablac0d3.sslkillswitch2_0.14.deb//ahref',
        sub: [
            {
                content: ['Copy file on mobile', 'Open Mterminal which we installed before to install Openssh and run', 'SU', 'After that install file which we copied earlier', 'dpkg -i ssl.deb', 'SSLKIll successfully installed now you can go to device setting to check the same.'],
                img: require('../assests/resources/14.png'),
            },
            {
                content: ['You can bypass ssl pinning by disabling certificate validation.'],
                img: require('../assests/resources/15.png'),
            },
        ]
    },
    {
        title: 'Installing Frida',
        content: 'Add source in Cydia Store and let it update the resources',
        sub: [
            {
                content: ['//ahrefhttps://build.frida.re//ahref', 'Once done search Frida in search-box and install it.'],
                img: require('../assests/resources/16.png'),
            },
        ]
    },
    {
        title: 'Installing Frida in Computer',
        content: 'pip install frida-tools',
        sub: [
            {
                content: ['After installing do a small test', 'Connect mobile to computer via cable and run following command', 'frida-ps -U'],
                img: require('../assests/resources/17.png'),
            },
        ]
    },
    {
        title: 'Installing Objection',
        content: 'Objection is a runtime mobile exploration toolkit, powered by Frida, built to help you assess the security posture of your mobile applications, without needing a jailbreak.',
        sub: [
            {
                content: ['Run following command to install Objection', 'pip3 install objection', 'Small test to see we have install everything successfully .', 'objection -g applicationname explore'],
                img: require('../assests/resources/18.png'),
            },
        ]
    },
    {
        title: 'Extra:',
        content: 'How to install IPA file in iPhone.',
        sub: [
            {
                content: ['Install Apple configurator from link we provided in tool list and launch it.'],
                img: require('../assests/resources/19.png'),
            },
            {
                content: ['Connect your phone via cable and give access to mobile.'],
                img: require('../assests/resources/20.png'),
            },
            {
                content: ['Click on add and select Apps'],
                img: require('../assests/resources/21.png'),
            },
            {
                content: ['After that click on choose from my mac and select IPA file it will be installed on your phone now you are ready to go.', 'Stay tuned for more updates.', '😄'],
            }
        ]
    },
]

function IOSLab() {
    return (
        <Container>
            <ToolsContainer>
                <LTool>
                    <Title>
                        <Construction />
                        Tools for IOS Testing
                    </Title>
                    <ul>
                        {
                            IOSToolsList.map((list, index) => (
                                <li key={index}><a href={list.link} target={'_blank'}>{list.title}</a></li>
                            ))
                        }
                    </ul>
                </LTool>

                <RTool>
                    <img src={IOS} alt="ios" />
                </RTool>
            </ToolsContainer>
            
            <Installation>
                {
                    Content.map((content, index) => (
                    <Steps key={index}>
                        <br />
                        <ContentTitle>{content?.title}</ContentTitle>
                        <ContentDesc>{content?.content?.split('//ahref').map((data, index) => (
                            index === 1 ? <a href={data} target={'_blank'}>{data}</a>
                            :<span>{data}</span>
                        ))}</ContentDesc>
                        {
                            content?.sub.map((item, index) => (
                                <React.Fragment key={index}>
                                <SubTitle key={index} >{item?.title}</SubTitle>
                                <SubSubTitle key={index} >{item?.subtitle}</SubSubTitle>
                                {
                                    item?.content?.map((content, index) => (
                                        <React.Fragment key={index}>
                                            <SubContent key={index}>{content?.split('//ahref').map((data, index) => (
                                                index === 1 ? <a href={data} target={'_blank'}>{data}</a>
                                                :<span>{data}</span>
                                            ))}</SubContent>
                                            <br />
                                        </React.Fragment>
                                    ))
                                }
                                <SubCode>
                                {
                                    item?.code &&   
                                    <CopyBlock
                                        text={item.code}
                                        language={"bash"}
                                        showLineNumbers={false}
                                        theme={monokaiSublime}
                                        />
                                }
                                </SubCode>
                                <br />
                                <div style={{ display: 'flex', justifyContent: 'center' }}>
                                    <img src={item?.img} alt="" />
                                </div>
                                </React.Fragment>
                            ))
                        }
                    </Steps>
                    ))
                }
            </Installation>
        </Container>
    );
}

export default IOSLab;

const Container = styled(motion.div)`
    width: 80vw;
    margin: 6vh auto;
    min-height: 100vh;
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

const ToolsContainer = styled.div`
    display: flex;
    justify-content: space-evenly;
    @media(max-width: 870px) {
        flex-direction: column-reverse;
    }
`

const LTool = styled.div`
    /* max-width: 560px;
    width: 100%; */
    min-width: 360px;
    a {
        text-decoration: none;
        color: green;
    }
    ul {
        margin: 24px 0;
        padding: 0;;
        list-style: none;
        li {
            line-height: 32px;
            font-size: 18px;
        }
    }
    @media(max-width: 870px) {
       min-width: 260px;
    }
`

const Title = styled.div`
    display: flex;
    align-items: center;
    font-size: 24px;

    .MuiSvgIcon-root {
        font-size: 36px !important;
        margin-right: 16px;
    }
`

const RTool = styled.div`
    margin-bottom: 24px;
    img {
        max-width: 760px;
        width: 100%;
    }

`

const Installation = styled.div`

`

const Steps = styled.div`
    margin: 0 auto;
    max-width:1260px;
    img {
        max-width: 860px;
        width: 100%;
        min-width: 260px;
        max-height: 560px;
        object-fit: contain;
    }
    a {
        color: green;
    }
`

const ContentTitle = styled.div`
    font-size: 24px;
    padding: 24px 0;
    border-top: 2px solid green;
`

const ContentDesc = styled.div`
    font-size: 18px;
    a {
        color: green !important;
    }
`

const SubTitle = styled.div`
    font-size: 22px;
    padding: 24px 0;
`

const SubSubTitle = styled.div`
    font-size: 20px;
`

const SubCode = styled.div`

`

const SubContent = styled.div`
    font: 18px;
    a {
        color: green
    }
`