import Button from 'react-bootstrap/Button';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import Carousel from 'react-bootstrap/Carousel';
import Rivian from '../../Assets/Rivian.svg'

import RivianGuy from '../../Assets/RivianGuy.png'
import './Stlyes/RIvianStyles.css'
import { Container, Row, Col } from 'react-bootstrap';


const PageOneComponent = () => {
  return (
    <div className='full-page-div'>
      <div className='spacing'>
        <div className='d-flex justify-content-center'>
          <img className='mt-5 mb-5' src={Rivian}></img>
        </div>
        <div className='d-flex justify-content-center'>
          <img className='imageSize' src={RivianGuy}></img>
        </div>
        <Container fluid className='mt-5  text-white'>
          <Row>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Reasons I want to work there</h3>
                <hr/>
                <ul className='txtDesign'>
                  <li>I love their cars</li>
                  <li>Total Compensation is great with plenty with a good 401k matching and stock buying program</li>
                  <li>Their Mental Health benefits are amazing for me</li>
                  <li>I love the innovation they are bringing to the industry with their cars</li>
                  <li>Their offices are beautiful</li>
                </ul>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center p-2 '>Does the job require the current stack that you know. Would you have learn new skills?</h3>
                <hr/>
                <p className='txtDesign'>I would have learn Python, Rust, and Golang but I do know a bit of Java. I would also have to dive deeper into databases, AWS, AI/Machine Learning, and learn robust system and component-level design and troubleshooting skills, including memory and CPU profiling on cloud-based services.</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Goals I would Like To Achieve At Rivian</h3>
                <hr/>
                <p className=' txtDesign'>At Rivian I would love to increase the reliability and safety of the systems inside the cars. I believe if I had that position it would be a stepping stone towards a higher position where I can really make a change in the cars for the better. I love electric vehicles and I believe there will be a more sustainable way in the future to pave the way to the electric future and I believe Rivian will be part of that.</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Do I currently have the skill-sets for the job?</h3>
                <hr/>
                <p className='txtDesign'>Not Yet. The things I am lacking are things I could learn now and get a head start. For example, I could begin learning about AI/Machine Learning and Databases on CodeCademy today. This job is attainable with just more work and time.</p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='d-flex justify-content-center mt-5 pb-5'>
          <Button href='https://careers.rivian.com/careers-home/jobs/15740?lang=en-us' target='_blank'> Job Listing</Button>
        </div>
      </div>
    </div>
  )
}

export default PageOneComponent
