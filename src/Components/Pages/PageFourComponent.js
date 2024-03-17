import Button from 'react-bootstrap/Button';
import React from 'react'
import './Stlyes/TeslaStyles.css'
import Riot from "../../Assets/Riot.png"
import RiotGuy from "../../Assets/RiotGuy.png"
import { Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom'

const PageFourComponent = () => {





  return (
    <div className='full-page-div2'>
      <div className='spacing'>
        <div className='d-flex justify-content-center'>
          <img className='mt-5 mb-5 nvidiaImg' src={Riot}></img>
        </div>
        <div className='d-flex justify-content-center'>
          <img className='imageSize' src={RiotGuy}></img>
        </div>
        <Container fluid className='mt-5  text-white'>
          <Row>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Reasons I want to work there</h3>
                <hr/>
                <ul className='txtDesign'>
                  <li>I really like Valorant and I would love to improve the game and fix the comp rewards!</li>
                  <li>Their company wide breaks at the end and middle of the year is actually a great idea and I love that.</li>
                  <li>Their donation matching is also a really cool program where not only do they match your money donated but your time so I think that is awesome!</li>
                  <li>Their wellness fund sounds like an awesome way to stay healthy mentally and physically.</li>
                  <li>I really like their games and art style.</li>
                </ul>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center p-2 '>Does the job require the current stack that you know. Would you have learn new skills?</h3>
                <hr />
                <p className='txtDesign'>No, I would need to learn C++ and get better at game development and learn how to use Unreal Engine.</p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Goals I would Like To Achieve At NVIDIA</h3>
                <hr />
                <p className=' txtDesign'> I would like to improve some of the issues killing their games, like how in Valorant their rank rewards have been the same since launch and people are beginning to lose their </p>
              </div>
            </Col>
            <Col className='colDesign mx-3'>
              <div>
                <h3 className='text-center'>Do I currently have the skill-sets for the job?</h3>
                <hr />
                <p className='txtDesign'>Unfortunately I do not. As of this moment I am lacking practical experience with the aforementioned languages and there are no open positions on the valorant team so I am sad now :( </p>
              </div>
            </Col>
          </Row>
        </Container>
        <p className='text-center text-white'>I couldnt find an exact job listing so I found something similar</p>
        <div className='d-flex justify-content-center mt-5 pb-5 '>
          
          <Button href='https://www.riotgames.com/en/work-with-us/job/5652130/staff-software-engineer-rendering-league-of-legends-los-angeles-usa' target='_blank'> Job Listing</Button>
        </div>
      </div>
    </div>
  )
}

export default PageFourComponent
