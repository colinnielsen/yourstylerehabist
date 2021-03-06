import React from 'react';
import styled from 'styled-components';
import SplashImage from './Slide2SplashImage';
import StyledBackgroundSection from './BackgroundImageSlide2';
import useWindowSize from '../hooks/useWidth';

const Container = styled.section`
   @media only screen and (max-width: 800px) {
      transform: none;
      flex-flow: column wrap;
      height: auto;
      min-height: 60vh;
      padding: 0 0 10vh 0;
   }
   min-height: 90vh;
   padding: 10vh 0 10vh 0;
   width: 100vw;
   display: flex;
   background: rgba(181, 168, 152, 0.08);
`;

const ContentContainer = styled.div`
   @media only screen and (max-width: 800px) {
      transform: none;
      flex-flow: column wrap;
      height: auto;
      position: inherit;
   }
   position: absolute;
   width: 100%;
   display: flex;
   align-items: center;
   justify-content: center;
`;

const ImageContainer = styled.div`
   @media only screen and (max-width: 800px) {
      transform: translate(0,-5vh);
      z-index: 2;
      display: flex;
      align-items: top;
      justify-content: center;
      width: 100%;
   }
   z-index: -1;
   transform: translate(10%);
`;

const Gradient = styled.div`
   @media only screen and (max-width: 800px) {
      width: 100%;
   }
   z-index: 1;
   position: absolute;
   width: 1000px;
   height: 700px;
   background: 
      linear-gradient(91.73deg, rgba(205, 195, 185, 0.88) -1.02%,
      rgba(70, 38, 49, 0.77) -1%,
      rgba(71, 39, 50, 0.38) 103.57%);
`;

const SplashBox = styled.div`
   @media only screen and (max-width: 800px) {
      width: 100%;
      font-style: normal;
      font-size: 36px;
      margin: 0 0 40px 0;
      left: -10px;
      margin-top: 3vh;
      position: relative;
      left: 0;
   }
   position: absolute;
   margin: 40px;
   margin-left: 8vw;
   z-index: 4;
   width: 400px;
   background: #DBD1C7;
   color: #462631;
   font-family: Inria_bold;
   font-style: normal;
   font-size: 64px;
   line-height: 77px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-direction: column;
   letter-spacing: -0.02em;
`;

const SplashTextBox = styled.div`
   @media only screen and (max-width: 800px) {
      transform: none;
      width: 85%;
      position: inherit;
      padding: 15px;
      height: auto;
      margin: 0 0 10vh 0;
   }
   background: #C5B9AD;
   z-index: 2;
   width: 500px;
   transform: translate(-10vw, 10vw);
   height: 650px;
   padding: 50px;
`;

const Header = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 1.8rem;
      line-height: 35px;
   }
   font-family: Inria;
   font-size: 34px;
   line-height: 2.2rem;
   letter-spacing: -0.05em;
   color: #F9F9F9;
   width: 320px;
`;

const Line = styled.div`
   @media only screen and (max-width: 800px) {
      margin: .2rem;
   }
   height: 3px;
   width: 75%;
   border: 2px solid #575757;
   margin-top: 8px;
`;

const Text = styled.div`
   @media only screen and (max-width: 800px) {
      margin: 0;
      font-size: 1.2rem;
      line-height: 1.5rem;
      margin-top: 20px;
   }
   margin-top: 25px;
   font-family: Inria_italic;
   font-size: 1.3rem;
   padding: .5rem 2rem 2rem 1.5rem;
   line-height: 2rem;
   letter-spacing: -0.05em;
   color: #F9F9F9;
`;

const Slide2 = () => {
   const size = useWindowSize();

   const Slide2Mobile = () =>
      <StyledBackgroundSection>
         <Container>
            <ContentContainer>
               <SplashBox>
                  What I do for you -
                  <Text>I will walk you through the mental gymnastics of a Cleanse and Edit, help you Clarify your style and give you tools to Capsulate your wardrobe.</Text>
               </SplashBox>
               <SplashTextBox>
                  <Header>
                     “You should be<br /> able to get ready<br /> in 10 minutes...”
                  <Line />
                  </Header>
                  <Text>
                     ...feeling amazing with clothing that you know fits you well and you look good in. Walking out the door feeling confident and fierce, ready to walk into any room- command that meeting, show up at the party, close the deal, make the new friend.
               </Text>
               </SplashTextBox>
            </ContentContainer>
         </Container>
      </StyledBackgroundSection>;

   const Slide2Desktop = () =>
      <Container>
         <ContentContainer>
            <ImageContainer>
               <SplashBox>
                  What I do for you -
               <Text>I will walk you through the mental gymnastics of a Cleanse and Edit, help you Clarify your style and give you tools to Capsulate your wardrobe.</Text>
               </SplashBox>

               <Gradient />
               <SplashImage />
            </ImageContainer>
            <SplashTextBox>
               <Header>
                  “You should be<br /> able to get ready<br /> in 10 minutes...”
                  <Line />
               </Header>
               <Text>
                  ...feeling amazing with clothing that you know fits you well and you look good in. Walking out the door feeling confident and fierce, ready to walk into any room- command that meeting, show up at the party, close the deal, make the new friend.
               </Text>
            </SplashTextBox>
         </ContentContainer>
      </Container>;

   return (
      <>
         {size.width < 800
            ? <Slide2Mobile />
            : <Slide2Desktop />
         }
      </>
   );
}

export default Slide2;