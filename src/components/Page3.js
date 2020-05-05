import React from 'react';
import styled from 'styled-components';
import Page3SpashImage from './Page3SplashImage';
import DivClip from './divClip.js';

const Page3Container = styled.section`
   height: 250vh;
   width: 100%;
   display: flex;
   background: linear-gradient(125.65deg, #462631 1.27%, #DBD1C7 112.48%);
   flex-flow: row nowrap;
   overflow: hidden;
`;

const SplashText = styled.div`
   position: absolute;
   margin-top: 30px;
   margin-left: 80px;
   font-family: Inria_bold;
   font-size: 60px;
   line-height: 72px;
   text-align: center;
   letter-spacing: -0.02em;
   color: #F2F2F2;
   background-color: #c3b9ae;
   padding: 1.5rem;
`;

const ProgressLine = styled.div`
   width: 5px;
   z-index: 4;
   background-color: #e0dcdc;
   height: 300px;
`;

const ProgressMarker = styled.div`
   width: 75px;
   height: 75px;
   border-radius: 50%;
   background-color: #e0dcdc;
`;

const ProgressionBarContainer = styled.div`
   display: flex;
   flex-flow: column nowrap;
   justify-content: center;
   align-items: center;
   position: absolute;
   top: 250vh;
   left: calc(50% - 37.5px);
`;

const FirstStep = styled.div`
   position: absolute;  
   margin: 40px;
   padding: 20px;
   width: 425px;
   left: 15vw;
   top: 235vh;
   z-index: 2;
   background: #DBD1C7;
   font-family: Inria_bold;
   font-style: normal;
   font-size: 24px;
   justify-content: center;
   letter-spacing: -0.02em;
   font-family: Inria;
   letter-spacing: -0.05emw;
   color: #000000;
`;

const Label = styled.div`
   background: #C5B9AD;
   width: 350px;
   text-align: center;
   display: flex;
   align-items: center;
   justify-content: center;
   color: #F9F9F9;
   font-size: 40px;
   transform: translate(-60px, -60px);
`;

const FirstStepLabel = styled(Label)`
   height: 70px;
   margin-bottom: -40px;
`;

const SecondStep = styled.div`
   position: absolute;  
   margin: 40px;
   padding: 20px;
   width: 425px;
   right: 10%;
   top: 270%;
   z-index: 2;
   background: #DBD1C7;
   font-family: Inria_bold;
   font-style: normal;
   font-size: 24px;
   justify-content: center;
   letter-spacing: -0.02em;
   font-family: Inria;
   letter-spacing: -0.05emw;
   color: #000000;
`;

const SecondStepLabel = styled(Label)`
   height: 100px;
   line-height: 40px;
   margin-bottom: -40px;
`;

const ThirdStep = styled.div`
   position: absolute;  
   margin: 40px;
   padding: 20px;
   width: 425px;
   right: 10%;
   top: 310%;
   z-index: 2;
   background: #DBD1C7;
   font-family: Inria_bold;
   font-style: normal;
   font-size: 24px;
   justify-content: center;
   letter-spacing: -0.02em;
   font-family: Inria;
   letter-spacing: -0.05emw;
   color: #000000;
`;

const ThirdStepLabel = styled(Label)`
   width: 400px;
   height: 100px;
   line-height: 40px;
   margin-bottom: -40px;
`;

const H1 = styled.div`
   font-family: Inria_bold;
   font-size: 24px;
   margin-top: -45px;
   margin-bottom: 15px;
`;

const Gradient = styled.div`
   z-index: 1;
   position: absolute;
   width: 500px;
   height: 700px;
   background: 
   linear-gradient(89.57deg, rgba(181, 168, 152, 0.61) -0.52%,
   rgba(181, 168, 152, 0.4697) -0.5%,
   rgba(181, 168, 152, 0.3111) 174.83%);
`;

const ImageContainer = styled.div`
   position: absolute;
   top: 285vh;
   left: 13%;
`;

const SecondSpashText = styled(SplashText)`
   background: #462631;
   top: 380vh;
   left: 2vw;
`;

const SecondDisplay = styled.div`
   padding: 50px;
   color: white;
   line-height: 35px;
   position: absolute;
   font-family: Inria;
   font-size: 30px;
   top: 379vh;
   height: 626px;
   width: 950px;
   background: #C5B9AD;
   right: 7%;
`;

const SecondDisplayH1 = styled(H1)`
   margin-top: 0;
   font-size: 45px;
   margin-left: -20px;
   margin-bottom: 40px;
   color: white;
`;

const Line = styled.div`
   height: 2px;
   width: 600px;
   float: right;
   margin-top: 50px;
   border: 3px solid #82786E;
`;

const StyledDivClip = styled(DivClip)`
   position: absolute;
   display: block;
   z-index: 10;
`;

const ProgressionBar = () =>
   <ProgressionBarContainer>
      <ProgressMarker />
      <ProgressLine />
      <ProgressMarker />
      <ProgressLine />
      <ProgressMarker />
      <ProgressLine />
   </ProgressionBarContainer>;


const Page2 = () =>
   <>
      <StyledDivClip />
      <Page3Container>
         <SplashText>
            How can I help?
         </SplashText>
         <FirstStep>
            <FirstStepLabel>
               Cleanse and Edit
            </FirstStepLabel>
            A 2-hour appointment, with the goal of pulling clothing from your closet that are in great condition but you are no longer wearing. Did you know that statistically we wear 23% of our wardrobe? Let me help! We'll create space in your closet so you can breathe. Pulling the things that don't work, making sure those get donated to local nonprofits, getting them into the right hands.
      </FirstStep>
         <SecondStep>
            <SecondStepLabel>
               Are you a<br />‘closet-stander’?
         </SecondStepLabel>
         The person who stands there looking, but unsure what to put together? Let's shop from your closet! Putting together a wardrobe that you can easily Grab & Go. <br />
         Adding additional pieces as necessary from local boutiques or your favorite online avenue.
      </SecondStep>
         <ThirdStep>
            <ThirdStepLabel>
               Are you on a quest?
            </ThirdStepLabel>
            Are you on a quest for something specific but don't have time? The perfect dress for an event? The perfect pair of denim for girls weekend? I have my finger on the pulse of local boutiques so we can support our fellow women in business!
      </ThirdStep>
         <ProgressionBar />
         <ImageContainer>
            <Gradient />
            <Page3SpashImage />
         </ImageContainer>
         <SecondSpashText>
            ...most importantly
         </SecondSpashText>
         <SecondDisplay>
            <SecondDisplayH1>
               I am a first generation purger
            </SecondDisplayH1>
            and I understand the emotional connection we get to our things. We wore them during a certain times of our life, we paid a lot of money  for them, we feel like we will get back in them or back to them soon. Your closet is personal, and a vulnerable space. I understand and can gently help walk you  through the process. < br />
            A big part of my business is making sure that the things you no longer need go to local charities. Giving to someone in need is a life-changing experience! Dress for Success, the Assistance League of Denver, the Gathering Place, all amazing organizations that have boots on the ground and change people's lives.
            <Line />
         </SecondDisplay>
      </Page3Container>
   </>;

export default Page2;