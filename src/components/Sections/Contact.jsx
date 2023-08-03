import React from "react";
import styled from "styled-components";
import { BsInstagram, BsTwitter } from 'react-icons/bs';
import { BiLogoLinkedin, BiLogoFacebook } from 'react-icons/bi';
import { AiFillGithub } from 'react-icons/ai';
import { Link } from 'react-router-dom';

export default function Contact() {
  return (
    <Wrapper id="contact">
      <div>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-12 text-lg-start text-center">
              <div data-aos='fade-right'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='300'>
                <HeaderInfo>
                  <h1 className="font40 extraBold">Let's get in touch</h1>
                  {/* <p className="font13">
                  I enjoy discussing new projects and design challenges.
                  Please share as much info, as possible so we can get the
                  most out of our first catch-up.
                </p> */}
                </HeaderInfo>
                <div className="lets pe-lg-5 pe-0">
                  <p className="mb-5" >
                    I enjoy discussing new projects and design challenges.
                    Please share as much info, as possible so we can get the
                    most out of our first catch-up.
                  </p>
                  <div className="mb-3">
                    <h3 className="mb-2">Living in: </h3>
                    <span>21 D , Gulshan-e-Ravi</span>
                  </div>
                  <div className="mb-3">
                    <h3 className="mb-2">Call: </h3>
                    <span>(+92) 301 4857067</span>
                  </div>
                </div>
                <div className='social-icons d-lg-none d-flex justify-content-center mt-4'>
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
            </div>
            <div className="col-lg-6 col-12">
              <div data-aos='fade-right'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='400'
              >
                <HeaderInfo>
                  <h1 className="font40 extraBold">Estimate your Project?</h1>
                </HeaderInfo>
                <Form className="pt-0">
                  <label className="fontform">First name:</label>
                  <input type="text" id="fname" name="fname" className="font20 extraBold" />
                  <label className="fontform">Email:</label>
                  <input type="text" id="email" name="email" className="font20 extraBold" />
                  <label className="fontform">Subject:</label>
                  <input type="text" id="subject" name="subject" className="font20 extraBold" />
                  <textarea rows="4" cols="50" type="text" id="message" name="message" className="font20 extraBold m-0" />
                </Form>
                <SumbitWrapper className="d-lg-none d-flex">
                  <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
                </SumbitWrapper>
              </div>
            </div>

          </div>
          <div className="row mt-3 d-lg-flex d-none">
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 ">
              <div className='social-icons d-flex' data-aos='fade-right'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='300'>
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
            <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6" data-aos='fade-right'
              data-aos-duration='800'
              data-aos-once='true'
              data-aos-delay='400'>
              <SumbitWrapper className="flex">
                <ButtonInput type="submit" value="Send Message" className="pointer animate radius8" style={{ maxWidth: "220px" }} />
              </SumbitWrapper>
            </div>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
`;
const HeaderInfo = styled.div`
  padding: 70px 0 30px 0;
  @media (max-width: 860px) {
    text-align: center;
  }
`;
const Form = styled.form`
  padding: 70px 0 30px 0;
  input,
  textarea {
    width: 100%;
    background-color: transparent;
    border: 0px;
    outline: none;
    box-shadow: none;
    border-bottom: 1px solid #707070;
    height: 30px;
    margin-bottom: 30px;
  }
  textarea {
    min-height: 100px;
  }
  @media (max-width: 860px) {
    padding: 30px 0;
  }
`;
const ButtonInput = styled.input`
  border: 1px solid #7620ff;
  background-color: #7620ff;
  width: 100%;
  padding: 15px;
  outline: none;
  color: #fff;
  :hover {
    background-color: #580cd2;
    border: 1px solid #7620ff;
    color: #fff;
  }
  @media (max-width: 991px) {
    margin: 0 auto;
  }
`;
const ContactImgBox = styled.div`
  max-width: 180px; 
  align-self: flex-end; 
  margin: 10px 30px 10px 0;
`;
const SumbitWrapper = styled.div`
  @media (max-width: 991px) {
    width: 100%;
    margin-bottom: 50px;
  }
`;









