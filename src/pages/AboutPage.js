import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import LargeBanner from '../components/LargeBanner.js'
import photo_head from '../images/tristanpieters.jpg'
import '../App.css';
import Content from '../components/Content.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import Carousel from '../components/Carousel.js';
import { Tweet } from 'react-twitter-widgets';

function AboutPage(props) {

    return (
        <div id="body-tag">
            <LargeBanner title={props.title} />
            <Container fluid>
                <Row>
                    <Col sm="auto" md="auto" ld="auto" style={{marginLeft: "4rem"}}>                    
                            <img
                                    src={photo_head}
                                    alt="avatar"
                                    style={{height: '300px', marginBottom: "2.5rem"}}
                            />
                            <div className="button_cont" align="center"><a className="example_e" href="/files/TristanPietersCV.pdf" download><strong>Download my Resume</strong></a></div>
                            </Col>
                    
                    <Col>
                        <Content>
                            <p>
                            Dedicated and self-motivated individual with great attention to detail capable of completing tasks with minimal supervision whilst being able to work under pressure. Excellent at communicating in groups and confident to take leadership where needed. Enthusiastic and ambitious individual looking to develop and learn new skills whilst experiencing new challenges.
                            </p>
                        </Content>
                    </Col>
                </Row>
            </Container>
            <LargeBanner title="North-West University" subTitle="B.Sc. in Information Technology" homeText="2018 to 2021"/>
            <Container fluid>
            
            <LargeBanner title="Hartbeespoort High School" subTitle="NSC Certificate" homeText="2013 to 2017"/>

            <Row>
                <Col>
                <LargeBanner subTitle="Work Experience"/>
                <Content>
                    <h3>Accounting Clerk – 01/2020 to Present</h3>
                    <p>Menthe Accounting, Lanseria</p>
                    <p>During university recess, I work at Menthe Accounting as a clerk. My responsibilities mainly consist of data capturing, reconciliation, IT support and any other task handed to me. Every time I return during recess, I am taught to do a new task.</p>

                    <h3>Student Intern – 07/2019 to 07/19</h3>
                    <p>Sibanye Stillwater, Marikana</p>
                    <p>As part of our second year of university, I was tasked to intern at a company of my choice. During this time, I experienced the work environment of various fields of IT professionals and received mentorship on how to approach and solve IT-related problems.</p>
                </Content>
                </Col>
            </Row>
            <Row>
                <Col>
                <LargeBanner subTitle="Hostel committees"/>
                <Content>
                    <p>I served on various committees for Villagers Men’s Residence. From 2018 to 2021, I have been part of the social, SRCS, recruitment, R&O and arts committees of which I have been a ‘bar captain’ of the social committee for 2 years. During 2021 I was chosen as a member of the Seniorbond and elected chairman of finances.</p>
                </Content>
                </Col>
            </Row>
            <Row>
                <Col>
                <LargeBanner subTitle="RAG/JOOL NPO"/>
                <Content>
                    <p>I served on the RAG committee for 2 years. RAG is a large NPO organized and run by students. My responsibilities of my portfolio included stock management, event preparation and team building.</p>
                </Content>
                </Col>
            </Row>
            </Container>
            <LargeBanner title="Skills" subTitle="During my time at the NWU, we were required to learn a variety of software languages, interfaces and methods, some of which include:"/>

            <Container fluid>
            <Row style={{justifyContent:"center"}}>
                <div style={{marginTop: "1.5rem", marginBottom: "1.5rem", justifyContent: "center"}}>
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'python']} />    
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'java']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'js']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'css3-alt']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'react']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'aws']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'git']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'npm']} />
                    <FontAwesomeIcon id="font-icon-skills" className="p-2.5" icon={['fab', 'microsoft']} />
                    
                </div>
            </Row>
            </Container>  
            <Content>
                <h2>Programming tools:</h2>
                <p>Java, Python, C#. C++, HTML/HTML5, CSS, Django, ReactJS,Maven, AWS, mySQL/SQLite, ASP.NET, Oracle</p>
                <h2>Software:</h2>
                <p>Microsoft Office, VS Code, Atom, Eclipse, Cisco, IntelliJ IDEA</p>
                <h2>Other technologies:</h2>
                <p>Git, AWS, Heroku</p>
            </Content>
                    

            <LargeBanner title="Tweets"/>
            <Container fluid>
            <Row>      
                <Col md={8} sm={12} style={{marginLeft: "4rem"}}>
                <Tweet tweetId={props.tweetId} options={{align: "center"}}/>
                </Col>
                <Col>
                <LargeBanner subTitle="Check out some of the latest tweets from @developer_news" />
                </Col>
            </Row>
            </Container>


            <Container fluid={true}>
                        <Row className="justify-content-center py-5">
                            <Col md={8} sm={12}>
                                <div style={{marginTop: "2.5rem", marginBottom: "2.5rem"}}>
                                <a className="effect1" href="/contact">
                                    Get in touch, contact me!
                                    <span className="bg"></span>
                                </a>
                                </div>
                            </Col>
                        </Row>
            </Container>
        </div>     
    )
}

export default AboutPage;