import React from "react";
import { MdCached } from 'react-icons/md';
import { FaDesktop } from 'react-icons/fa';
import { BsFillLayersFill } from 'react-icons/bs';
import { BiSolidInbox } from 'react-icons/bi';
import { AiOutlineLineChart } from 'react-icons/ai';
import { HiOutlineMailOpen } from 'react-icons/hi';
import Nav from 'react-bootstrap/Nav';


export default function Services() {
  return (
    <section id="services">

      <div className="whiteBg">
        <div className="container">
          <div className="mb-5">
            <div data-aos='fade-up'
              data-aos-duration='800'
              data-aos-once='true'
              data-aos-delay='200'><h1 className="font40 extraBold text-center">Services</h1></div>

            {/* <p className="font13">
              Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut
              <br />
              labore et dolore magna aliquyam erat, sed diam voluptua.
            </p> */}
          </div>
          <div className="row g-4">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-item p-4 text-center"
                data-aos='zoom-in'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='300'
              >
                <div className="text-center">
                  <MdCached className="icons" />
                </div>
                <h6 className="mt-2">Research & Analysis</h6>
                <p>We use a customized application specifically designed a testing
                  gnose to keep away for people.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-item p-4 text-center" data-aos='zoom-in'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='400'>
                <div>
                  <FaDesktop className="icons" />
                </div>
                <h6 className="mt-2">Web Development</h6>
                <p>We use a customized application specifically designed a testing
                  gnose to keep away for people.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="info-item p-4 text-center" data-aos='zoom-in'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='500'>
                <div>
                  <BsFillLayersFill className="icons" />
                </div>
                <h6 className="mt-2">Network Management</h6>
                <p>We use a customized application specifically designed a testing
                  gnose to keep away for people.</p>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12 ">
              <div className="info-item p-4 text-center" data-aos='zoom-in'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='300'>
                <div className="text-center">
                  <BiSolidInbox className="icons" />
                </div>
                <h6 className="mt-2">UI/UX Development</h6>
                <p>We use a customized application specifically designed a testing
                  gnose to keep away for people.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-item p-4 text-center" data-aos='zoom-in'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='400'>
                <div>
                  <AiOutlineLineChart className="icons" />
                </div>
                <h6 className="mt-2">Mobile App Development</h6>
                <p>We use a customized application specifically designed a testing
                  gnose to keep away for people.</p>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 col-12">
              <div className="info-item p-4 text-center" data-aos='zoom-in'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='500'>
                <div>
                  <HiOutlineMailOpen className="icons" />
                </div>
                <h6 className="mt-2">Network Management</h6>
                <p>We use a customized application specifically designed a testing
                  gnose to keep away for people.</p>
              </div>
            </div>

            <div className="mt-5 d-flex justify-content-center">
              <Nav.Link as="a" download="AbdulQadeer.pdf" href={'AbdulQadeer.pdf'} id="resume">Download Resume</Nav.Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

