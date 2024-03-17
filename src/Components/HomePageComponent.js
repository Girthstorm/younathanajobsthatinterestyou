import React from 'react'
import { Link } from 'react-router-dom';

const HomePageComponent = () => {
  return (
    <div className="container py-5">
    <h1 className="text-center mb-5">5 Jobs That Interest Me</h1>
    <div className="d-flex flex-column align-items-center">
      <Link to="/pageOne" className="btn btn-outline-success btn-lg w-50 mb-3">Rivian</Link>
      <Link to="/pageTwo" className="btn btn-outline-danger btn-lg w-50 mb-3">Tesla</Link>
      <Link to="/pageThree" className="btn btn-outline-success btn-lg w-50 mb-3">NVIDIA</Link>
      <Link to="/pageFour" className="btn btn-outline-danger btn-lg w-50 mb-3">Riot</Link>
      <Link to="/pageFive" className="btn btn-outline-primary btn-lg w-50 mb-3">PlayStation</Link>
    </div>
  </div>
  )
}

export default HomePageComponent
