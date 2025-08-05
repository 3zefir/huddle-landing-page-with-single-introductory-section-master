import {type ReactElement, useEffect, useRef} from "react";
//@ts-ignore
import './App.css';
//@ts-ignore
import logoImage from '../assets/images/logo.svg'
//@ts-ignore
import mocupsImage from '../assets/images/illustration-mockups.svg'
//@ts-ignore
import facebookImage from '../assets/images/free-icon-facebook-3128208.png';
//@ts-ignore
import twitterImage from '../assets/images/free-icon-twitter-black-shape-25660.png';
//@ts-ignore
import instagramImage from '../assets/images/free-icon-instagram-1077042.png';
import {uiComponents} from '../assets/data/uiComponents/ui-components.ts';
//@ts-ignore
import ScrollReveal from 'scrollreveal';
import Box from "@mui/material/Box";

const {Title, Paragraph, WhiteButton} = uiComponents;

function App(): ReactElement {
    const logoRef = useRef(null);
    const imageRef = useRef(null);
    const titleRef = useRef(null);
    const paragraphRef = useRef(null);
    const buttonRef = useRef(null);
    const footerRef = useRef(null);

    useEffect(() => {
        const sr = ScrollReveal({
            reset: true,
            distance: '450px'
        })

        sr.reveal(logoRef.current, {
            origin: 'top',
            duration: 1000
        })

        sr.reveal(imageRef.current, {
            origin: 'left',
            duration: 1500,
            delay: 500
        })

        sr.reveal(titleRef.current, {
            origin: 'right',
            duration: 1500,
            delay: 2000
        })

        sr.reveal(paragraphRef.current, {
            origin: 'right',
            duration: 1500,
            delay: 1500
        })

        sr.reveal(buttonRef.current, {
            origin: 'bottom',
            duration: 1500,
            delay: 1000
        })

        sr.reveal(footerRef.current, {
            origin: 'bottom',
            duration: 1500,
            delay: 2500
        })
    }, [])

  return (
    <>

        <main className="main">

            <Box className="main__images" component='div'>
                <img src={logoImage} alt="" className="images__logo" ref={logoRef}/>
                <img src={mocupsImage} alt="" className="images__image" ref={imageRef}/>
            </Box>
            <Box className="main__content" component='div'>
                <Title ref={titleRef} className="content__title">Build The Community Your Fans Will Love</Title>
                <Paragraph ref={paragraphRef} className="content__info">Huddle re-imagines the way we build communities. You have a voice,
                    but so does your audience.
                    Create connections with your users as you engage in genuine discussion.</Paragraph>
                <WhiteButton className="content__button" ref={buttonRef}>Register</WhiteButton>
            </Box>


            <footer className="main__footer" ref={footerRef}>
                <img src={facebookImage} alt="" className="footer__image"/>
                <img src={twitterImage} alt="" className="footer__image"/>
                <img src={instagramImage} alt="" className="footer__image"/>
            </footer>
        </main>


    </>
  )
}

export default App


