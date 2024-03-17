import Button from 'react-bootstrap/Button';
import React from 'react'
import { useNavigate } from 'react-router-dom'
import './Stlyes/TeslaStyles.css'
import { Container, Row, Col } from 'react-bootstrap';
import TeslaGuy from '../../Assets/TeslaGuy.png'

const PageTwoComponent = () => {

  return (
    <div className='full-page-div2'>
      <div className='spacing'>
        <div className='d-flex justify-content-center'>
        <svg alt="Tesla Logo" class=" mt-5 mb-5 tds-icon tds-icon-logo-wordmark tds-site-logo-icon" viewBox="0 0 342 35" xmlns="http://www.w3.org/2000/svg" width="400" ><path d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z" fill="white"></path></svg>
        </div>
        <div className='d-flex justify-content-center'>
          <img className='imageSize' alt='Tesla Model S Plaid' src={TeslaGuy}></img>
        </div>
        <Container fluid className='mt-5 text-white txtDesign'>
          <Row>
            <Col className='colDesign mx-3'>
              <div className=' text-white'>
                <h3 className='text-center'>Reasons I want to work there</h3>
                <hr/>
                <ul className='txtDesign'>
                  <li>I also love their cars</li>
                  <li>I know their products and see where there could be improvement</li>
                  <li>They have a benefits for commuters(ME)</li>
                  <li>They have a cool weight loss program</li>
                  <li>EMPLOYEE DISCOUNTS</li>
                </ul>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Does the job require the current stack that you know. Would you have learn new skills?</h3>
                <hr/>
                <p>For the most part, surprisingly, yes! They require JS,HTML,CSS,React,WebGL,React,Svelte, or UIML. I happen to know a few of those and svelte has always interested me so I think I would thrive here!</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Goals I would Like To Achieve At Tesla</h3>
                <hr/>
                <p>If I were to work here I would love to help improve the UI/UX of their cars and become better at UI/UX(You can tell im not too good at it) and I would also love to branch out and possibly move to a position where I can add new apps and features to the cars!</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Do I currently have the skill-sets for the job?</h3>
                <hr/>
                <p>Unfortunately I am not familiar with launching products to millions of users and have no experience building foundational layout and typographic systems to be used across the team, but luckily I know a bit of unity and am learning Godot, and really want to learn Unreal Engine. </p>
              </div>
            </Col>
          </Row>
        </Container>
        <div className='d-flex justify-content-center mt-5 pb-5'>
          <Button className='bb-5' href='https://www.tesla.com/careers/search/job/staff-frontend-engineer-vehicle-ui-218001' target='_blank'> Job Listing</Button>
        </div>
        
      </div>
    </div>
  )
}

export default PageTwoComponent
