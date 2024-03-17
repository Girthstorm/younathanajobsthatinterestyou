import Button from 'react-bootstrap/Button';
import React from 'react'
import './Stlyes/NvidiaStyles.css'
import { Container, Row, Col } from 'react-bootstrap';
import NvidiaGuy from '../../Assets/NvidiaGuy.png'
import Nvidia from '../../Assets/Nvidia.png'


const PageThreeComponent = () => {





  return (
    <div className='full-page-div'>
      <div className='spacing'>
        <div className='d-flex justify-content-center'>
          <img className='mt-5 mb-5 nvidiaImg' alt='NVIDIA logo' src={Nvidia}></img>
        </div>
        <div className='d-flex justify-content-center'>
          <img className='imageSize' alt='NVIDIA Headquarters Stairs' src={NvidiaGuy}></img>
        </div>
        <Container fluid className='mt-5  text-white'>
          <Row>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Reasons I want to work there</h3>
                <hr/>
                <ul className='txtDesign'>
                  <li>I believe NVIDIA is a huge innovator in the market and leagues ahead of competitors when it comes to their AI chipsets and all hardware</li>
                  <li>The Architecture of their facility is stunning. Apples circle is cool and all but this open floor plan triangular design is modern and shows complexity, its really cool, check it out!</li>
                  <li>I love their "Like No Place You’ve Ever Worked" stance. It is awesome to have a company policy where they say they wont fall back on policy but will instead do whats best for you and your family</li>
                  <li>I really appreciate their preventative care policy, its nice for a company to not only care about preventative care but also 100% cover the care in-network.</li>
                  <li>I love their diversity, its always great to have a safe and inclusive space for everyone and NVIDIA provides that</li>
                </ul>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center p-2 '>Does the job require the current stack that you know. Would you have learn new skills?</h3>
                <hr />
                <p className='txtDesign'>No, I would need to learn Python, Java, and C++ and familiarize myself with AWS, Google Cloud, and containerization technologies like Docker and Kubernetes and I would need to improve on the cleanliness of my code</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Goals I would Like To Achieve At NVIDIA</h3>
                <hr />
                <p className=' txtDesign'> At NVIDIA I would love to learn more about the software that goes into making the hardware I love work and help improve on that, I believe there is so much potential at NVIDIA. Plus I would love to join the team behind their AI advancements one day and help build better and safer AI and AI tools to help benefit humanity.</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Do I currently have the skill-sets for the job?</h3>
                <hr />
                <p className='txtDesign'>Unfortunately I do not. As of this moment I am lacking practical experience with the aforementioned languages and softwares but I am always willing to learn more and experiment with other softwares and technologies</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='d-flex justify-content-center mt-5 pb-5'>
          <Button href='https://nvidia.wd5.myworkdayjobs.com/en-US/NVIDIAExternalCareerSite/job/Software-Engineer_JR1981246-1?locationHierarchy1=2fcb99c455831013ea52fb338f2932d8&locations=91336993fab910af6d702fae0bb4c2e8' target='_blank'> Job Listing</Button>
        </div>
      </div>
    </div>
  )
}

export default PageThreeComponent
