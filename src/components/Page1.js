import React from 'react';
import styled from 'styled-components';
import StyledBackgroundSection from './BackgroundImageScreen1';
import _ProfilePic from './ProfilePic';

const Page1Container = styled.div`
   @media only screen and (max-width: 800px) {
      flex-direction: column;
   }
   height: 100vh;
   max-height: 100vh;
   overflow-y: hidden;
   width: 100vw;
   display: flex;
   align-items: center;
   justify-content: center;
   flex-wrap: nowrap;
   flex-direction: row;
`;

const ProfilePic = styled(_ProfilePic)`
   @media only screen and (max-width: 800px) {
      width: 250px;
      height: 250px;
   }
`;

const ProfileContainer = styled.div`
   @media all and (max-width: 500px) {
      width: 200px;
      height: 200px;
      transform: translate(-7px,-7px);
   }
   width: 400px;
   height: 400px;
   background: linear-gradient(108.75deg, #9A9086 14.18%, #AAA39C 206.1%, #FFFFFF 206.12%);
`;

const LandingInfo = styled.div`
   @media only screen and (max-width: 800px) {
      margin: 0;
      height: auto;
      width: auto;
   }
   display: block;
   justify-content: center;
   align-items: space-around;
   margin: 8%;
   width: 40%;
   height: auto;
`;

const Name = styled.div`
   @media only screen and (max-width: 800px) {
      display: none;
   }
   @media only screen and (max-width: 1200px) {
      font-size: 48px;
   }
   font-family: 'Inria_bold';
   font-size: 68px;
   display: inline-block;
   height: 80px;
   line-height: 60px;
   width: 90vw;
   white-space: nowrap;
   color: #5E2828;
   transform: translate(-5vw);
`;

const SplashBox = styled.div`
   @media only screen and (max-width: 800px) {
      width: 80vw;
      font-size: 2rem;
      text-align: center;
      padding: 0;
      height: auto;
      padding: 20px;
      margin: 0;
      float: none;
      line-height: 45px;
      transform: translate(0, 40px);
   }
   height: 40vh;
   margin-left: 100px;
   width: 40vw;
   float: right;
   position: relative;
   display: block;
   padding: 20px;
   padding-right: 50px;
   align-items: center;
   justify-content: center;
   font-size: 28px;
   font-weight: 300;
   text-align: center;
   line-height: 38px;
   font-family: 'Inria_bold';
   background: linear-gradient(90deg, #F2F2F1 0%, rgba(242, 242, 241, 0.86) 140.78%);
   color: #873954;
`;

const Subheader = styled.div`
   @media only screen and (max-width: 800px) {
      translate: none;
   }
   font-family: Inria_italic;
   transform: translate(10%);
   font-size: 28px;
`;

const P = styled.div`
   @media only screen and (max-width: 800px) {
      font-size: 18px;
      line-height: 24px;
   }
   font-family: Inria;
   margin-top: 10px;
   margin-bottom: 30px;
   font-size: 22px;
   line-height: 40px;
   text-align: center;
`;

const Line = styled.div`
   height: 3px;
   width: 90%;
   border: 3px solid #82786E;
   margin-left: 50%;
   transform: translate(-50%);
`;

const Page1 = () =>
   <>
      <StyledBackgroundSection>
         <Page1Container>
            <ProfileContainer>
               <ProfilePic />
            </ProfileContainer>
            <LandingInfo>
               <Name>Your Style Rehabist</Name>
               <SplashBox>
                  I'm Monika Nielsen -
                     Your Style Rehabist. 
                  <br />
                  <Subheader>
                  </Subheader>
                  <P>I specialize in the 3 C's.
                     <br />
                     Cleansing and Clarifying your closet <br /> to create a Capsulated wardrobe.
                     <br />
                     I will take the chaos of your closet into calm in your life - so you're no longer standing and staring at the things you never wear.
                  </P>
                  <Line />
               </SplashBox>
            </LandingInfo>
         </Page1Container>
      </StyledBackgroundSection>
   </>;

export default Page1;