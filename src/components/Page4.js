import React from 'react';
import styled from 'styled-components';
import Page4SpashImage from './Page4SplashImage';

const Page4Container = styled.section`
   height: 100vh;
   width: 100%;
   display: flex;
   justify-content: space-between;
   background: #F9F8F7;
   flex-flow: row wrap;
   overflow: hidden;
   padding: 10%;
`;

const ReviewContainer = styled.div`
   width: 600px;
   font-family: Inria;
   font-size: 22px;
   margin: 30px;
   margin-top: 80px;
`;

const Gradient = styled.div`
   position: absolute;
   width: 500px;
   height: 400px;
   z-index: 1;
   background: linear-gradient(89.39deg, rgba(181, 168, 152, 0.82) -0.52%, 
      rgba(181, 168, 152, 0.6314) -0.5%,
      rgba(181, 168, 152, 0.4182) 174.83%);
`;

const SplashText = styled.div`
   position: absolute;
   font-family: Inria_bold;
   font-size: 50px;
   right: 0;
   line-height: 72px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #F2F2F2;
   background-color: #462631;
   padding: 1.5rem;
   z-index: 10;
   transform: translate(60px, -60px);
`;

const ImageAndText = styled.div`
   position: absolute;
   right: 15vw;
   top: 475vh;
`;

const QuoteEnd = styled.div`
   font-family: Inria_lightItalic;
   font-size: 22px;
   float: right;
   margin-top: 20px;
`;

const Page4 = () =>
   <>
      <Page4Container>
         <ReviewContainer>
            “I had the pleasure of working with Monika as a personal stylist. We met at the mall to shop for a dress to wear to a wedding I was attending last Fall. She was incredible!
            <br />She picked out the cutest dresses for me to try on some that I wouldd have NEVER picked myself, but I did it anyway. We found the perfect dress for the occasion! It was one of the best shopping experiences ever. We had so muchh fun - laughing, chatting, and she taught me about how to fit to my body! Monika is the best! ♥️”
            <QuoteEnd>by Carrie - Castle Rock</QuoteEnd>
         </ReviewContainer>
         <ImageAndText>
            <SplashText>
               What people<br />are saying...
            </SplashText>
            <Gradient />
            <Page4SpashImage />
         </ImageAndText>
         <ReviewContainer />
         <ReviewContainer>
            “Monika is wonderful to work with both as an organizer and personal shopper. Her keen eye for fashion and wide knowledge of style and what works for my body type makes shopping with her a breeze.
            <br />I have worked with her to organize my closet and she makes an overwhelming job relatively easy and painless.
            <QuoteEnd>by Julie - Arlington</QuoteEnd>
         </ReviewContainer>
         <ReviewContainer>
            “Monika is wonderful to work with both as an organizer and personal shopper. Her keen eye for fashion and wide knowledge of style and what works for my body type makes shopping with her a breeze.
            <br />I have worked with her to organize my closet and she makes an overwhelming job relatively easy and painless.
            <QuoteEnd>by Deanna - Highlands Ranch</QuoteEnd>
         </ReviewContainer>
      </Page4Container>
   </>;

export default Page4;