import React from "react";
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Nav from 'react-bootstrap/Nav';
import ProgressBar from "./ProgressBar";

export default function About() {
  return (
    <section id="about" className="">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div>
              <h1 className="font40 extraBold text-center" data-aos='fade-up'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='200'>About Me</h1>
              <div className="aboutme mt-5" data-aos='fade-up'
                data-aos-duration='800'
                data-aos-once='true'
                data-aos-delay='300'>
                As an experienced React developer with 2 years in the field,
                I'm passionate about crafting seamless web applications that
                prioritize user experiences. My journey is a testament to continuous
                learning and staying up-to-date with cutting-edge technologies.
                Proficient in React, HTML, CSS, and JavaScript, I take pride in
                creating scalable, maintainable, and visually appealing front-end solutions.
                My diverse portfolio showcases my dedication to clean code and innovative design.
                Always up for a challenge, I thrive in collaborative environments and bring
                adaptability to every project. With an eye for detail and a commitment to
                growth, I'm eager to contribute my skills to impactful ventures that shape
                the future of web development.
              </div>
              <div>
                <Tab.Container defaultActiveKey="tab1">
                  <Nav variant="pills" className="mt-3 mb-4" data-aos='fade-up'
                    data-aos-duration='800'
                    data-aos-once='true'
                    data-aos-delay='400'>
                    <Nav.Item className="pill">
                      <Nav.Link eventKey="tab1">Skills</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="pill">
                      <Nav.Link eventKey="tab2">Experience</Nav.Link>
                    </Nav.Item>
                    <Nav.Item className="pill">
                      <Nav.Link eventKey="tab3">Education</Nav.Link>
                    </Nav.Item>
                  </Nav>

                  <Tab.Content>
                    <Tab.Pane eventKey="tab1">
                      <div className="row">
                        <div className="col-lg-6 col-md-6 col-12 pe-lg-5">
                          <div className="position-relative" data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='500'>
                            <ProgressBar label="Web Design"
                              visualParts={[
                                {
                                  percentage: "90%",
                                  color: "#ecbf4f"
                                }
                              ]} />
                          </div>
                          <div className="position-relative" data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='600'>
                            <ProgressBar label="Javascript"
                              visualParts={[
                                {
                                  percentage: "70%",
                                  color: "#ecbf4f"
                                }
                              ]} />
                          </div>
                          <div className="position-relative" data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='700'>
                            <ProgressBar label="React Js"
                              visualParts={[
                                {
                                  percentage: "70%",
                                  color: "#ecbf4f"
                                }
                              ]} />
                          </div>
                        </div>
                        <div className="col-lg-6 col-md-6 col-12 mt-lg-0 mt-md-0 mt-3 ps-lg-5">
                          <div className="position-relative" data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='500'>
                            <ProgressBar label="HTML/CSS"
                              visualParts={[
                                {
                                  percentage: "95%",
                                  color: "#ecbf4f"
                                }
                              ]} />
                          </div>
                          <div className="position-relative" data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='600'>
                            <ProgressBar label="Bootstrap"
                              visualParts={[
                                {
                                  percentage: "95%",
                                  color: "#ecbf4f"
                                }
                              ]} />
                          </div>
                          <div className="position-relative" data-aos='fade-up'
                            data-aos-duration='800'
                            data-aos-once='true'
                            data-aos-delay='700'>
                            <ProgressBar label="Sass"
                              visualParts={[
                                {
                                  percentage: "97%",
                                  color: "#ecbf4f"
                                }
                              ]} />
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab2">
                      <div className="row position-relative" data-aos='fade-up'
                        data-aos-duration='800'
                        data-aos-once='true'
                        data-aos-delay='200'>

                        <div className="col-lg-6 col-md-7 col-12">
                          <div className="border-left">

                          </div>
                          <div className="mt-4 pt-2 ms-4">
                            <h5>Developer</h5>
                            <em>2000-2004 (4 year Experience)</em>
                            <p>There are many variations of passages of
                              Lorem Ipsum available, but the majority have fered altation in
                              some form, by injmour, or randomised words which don't look even
                              slightlievable. </p>
                          </div>
                        </div>
                      </div>
                    </Tab.Pane>
                    <Tab.Pane eventKey="tab3">

                      <div className="row position-relative" data-aos='fade-up'
                        data-aos-duration='800'
                        data-aos-once='true'
                        data-aos-delay='200'>

                        <div className="col-lg-6 col-md-7 col-12">
                          <div className="border-left">

                          </div>
                          <div className="mt-4 pt-2 ms-4">
                            <h5>Computer Science</h5>
                            <em>2015-2017 (2 year)</em>
                            <p>There are many variations of passages of
                              Lorem Ipsum available, but the majority have fered altation in
                              some form, by injmour, or randomised words which don't look even
                              slightlievable. </p>
                          </div>
                        </div>

                      </div>
                      <div className="row position-relative">

                        <div className="col-lg-6 col-md-7 col-12">
                          <div className="border-left">

                          </div>
                          <div className="mt-4 pt-2 ms-4">
                            <h5>Master Computer Science</h5>
                            <em>2017-2020 (2 year)</em>
                            <p>There are many variations of passages of
                              Lorem Ipsum available, but the majority have fered altation in
                              some form, by injmour, or randomised words which don't look even
                              slightlievable. </p>
                          </div>
                        </div>

                      </div>

                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

