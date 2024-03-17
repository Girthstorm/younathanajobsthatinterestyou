import Button from 'react-bootstrap/Button';
import React from 'react'
import './Stlyes/PlayStationStyles.css'
import { Container, Row, Col } from 'react-bootstrap';
import PlayStation from "../../Assets/PlayStation.png"
import PlayStationGuy from "../../Assets/PlayStationGuy.png"

const PageFiveComponent = () => {
  return (
    <div className='full-page-div5'>
      <div className='spacing'>
        <div className='d-flex justify-content-center'>
          <img className='mt-5 mb-5 nvidiaImg' src={PlayStation}></img>
        </div>
        <div className='d-flex justify-content-center'>
          <img className='imageSize' src={PlayStationGuy}></img>
        </div>
        <Container fluid className='mt-5  text-white'>
          <Row>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Reasons I want to work there</h3>
                <hr/>
                <ul className='txtDesign'>
                  <li>I love their consoles and the software they make</li>
                  <li>I like their Flex Modes model where its a hybrid of remote and in person.</li>
                  <li>Their facilities are nice.</li>
                  <li>I like their generous time off with 12 paid holidays and an additional PTO program</li>
                  <li>I like the discounts on their products and the access to game launch events</li>
                </ul>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center p-2 '>Does the job require the current stack that you know. Would you have learn new skills?</h3>
                <hr />
                <p className='txtDesign'>Not 100%, I would need to get better at UI/UX and learn Adobe Experience Manager. I would also need to deep dive into Java and learn a whole host of frameworks</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Goals I would Like To Achieve At Playstation</h3>
                <hr />
                <p className=' txtDesign'> I would like to build more dynamic UI and help build the future of consoles however that would look like.</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Do I currently have the skill-sets for the job?</h3>
                <hr />
                <p className='txtDesign'>Not at all, seeing as how the job is a Senior position due to there not being anything for junior-mid level devs I do not have the leadership experience nor do I have the general experience and I also don't have deep knowledge of marketing technologies but one day I hopefully will.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='d-flex justify-content-center mt-5 pb-5'>
          <Button href='https://boards.greenhouse.io/sonyinteractiveentertainmentglobal/jobs/5053889004' target='_blank'> Job Listing</Button>
        </div>
      </div>
    </div>
  )
}

export default PageFiveComponent
