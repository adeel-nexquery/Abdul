import React from "react";
import styled from "styled-components";
// Components
import FullButton from "../Buttons/FullButton";
// Assets
import HeaderImage from "../../assets/img/header-img.png";
import QuotesIcon from "../../assets/svg/Quotes";
import Dots from "../../assets/svg/Dots";
import Typewriter from 'typewriter-effect';
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <Wrapper id="home" className="container flexSpaceCenter">
      <LeftSide className="flexCenter">
        <div>
          <p style={{ fontSize: "16px", fontWeight: "600", color: "rgb(234, 166, 46)" }} className="mb-0">Hello! I AM</p>
          <h1 style={{ fontSize: "40px" }}> <Typewriter
            className="my-5" // Add your desired class here
            options={{
              strings: ['Abdul Qadeer', 'Front-End Web Developer'],
              autoStart: true,
              loop: true,
            }}
          /></h1>
          <HeaderP className="font13 semiBold py-2">
            As a frontend web developer, I find joy in solving complex problems while crafting simple and elegant solutions. My passion lies in building beautiful and intuitive interfaces that enhance user experiences. I thrive on exploring new technologies and pushing the boundaries of creativity to create minimalistic and impactful products.
          </HeaderP>
          <div className='social-icons d-flex justify-content-lg-start justify-content-md-start justify-content-center mt-4'>
            <ul className="p-0 d-flex">
              <li>
                <Link to={'/'} target="_blank" rel="noopener noreferrer" className='ms-0  social-icon fb'><BiLogoFacebook className="icon" /></Link>
              </li>
              <li>
                <Link to={'/'} target="_blank" rel="noopener noreferrer" className=" social-icon insta"><BsInstagram className="icon" /></Link>
              </li>
              <li>
                <Link to={'/'} target="_blank" rel="noopener noreferrer" className="social-icon twitter"><BsTwitter className="icon" /></Link>
              </li>
              <li>
                <Link to={'/'} target="_blank" rel="noopener noreferrer" className="social-icon linkd"><BiLogoLinkedin className="icon" /></Link>
              </li>
              <li>
                <Link to={'/'} target="_blank" rel="noopener noreferrer" className="social-icon github"><AiFillGithub className="icon" /></Link>
              </li>
            </ul>
          </div>
        </div>
      </LeftSide>
      <RightSide>
        <ImageWrapper>
          <Img className="radius8" src={HeaderImage} alt="office" style={{ zIndex: 9 }} />
          <QuoteWrapper className="flexCenter darkBg radius8">
            <QuotesWrapper>
              <QuotesIcon />
            </QuotesWrapper>
            <div>
              <p className="font15 whiteColor">
                <em>In the realm of coding, true friendships are forged in the lines of React. Like components
                  working in harmony, friendship thrives in the ability to stand alone, yet choose to come together.</em>
              </p>
              {/* <p className="font13 orangeColor textRight" style={{ marginTop: '10px' }}>Ralph Waldo Emerson</p> */}
            </div>
          </QuoteWrapper>
          <DotsWrapper>
            <Dots />
          </DotsWrapper>
        </ImageWrapper>
        <GreyDiv className="lightBg"></GreyDiv>
      </RightSide>
    </Wrapper>
  );
}


const Wrapper = styled.section`
  padding-top: 80px;
  width: 100%;
  min-height: 840px;
  @media (max-width: 960px) {
    flex-direction: column;
  }
`;
const LeftSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 2;
    margin: 50px 0;
    text-align: center;
  }
  @media (max-width: 560px) {
    margin: 80px 0 50px 0;
  }
`;
const RightSide = styled.div`
  width: 50%;
  height: 100%;
  @media (max-width: 960px) {
    width: 100%;
    order: 1;
    margin-top: 30px;
  }
`;
const HeaderP = styled.div`
  max-width: 470px;
  padding: 15px 0 50px 0;
  line-height: 1.5rem;
  @media (max-width: 960px) {
    padding: 15px 0 50px 0;
    text-align: center;
    max-width: 100%;
  }
`;
const BtnWrapper = styled.div`
  max-width: 190px;
  @media (max-width: 960px) {
    margin: 0 auto;
  }
`;
const GreyDiv = styled.div`
  width: 30%;
  height: 700px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 0;
  @media (max-width: 960px) {
    display: none;
  }
`;
const ImageWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  z-index: 9;
  @media (max-width: 960px) {
    width: 100%;
    justify-content: center;
  }
`;
const Img = styled.img`
  @media (max-width: 560px) {
    width: 80%;
    height: auto;
  }
`;
const QuoteWrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 50px;
  max-width: 330px;
  padding: 30px;
  z-index: 99;
  @media (max-width: 960px) {
    left: 20px;
  }
  @media (max-width: 560px) {
    bottom: -50px;
  }
`;
const QuotesWrapper = styled.div`
  position: absolute;
  left: -20px;
  top: -10px;
`;
const DotsWrapper = styled.div`
  position: absolute;
  right: -100px;
  bottom: 100px;
  z-index: 2;
  @media (max-width: 960px) {
    right: 100px;
  }
  @media (max-width: 560px) {
    display: none;
  }
`;


