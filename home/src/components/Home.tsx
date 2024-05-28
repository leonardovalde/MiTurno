import React, { useState } from 'react'
import './Home.css'
import BannerHome from '../../assets/banner-home.jpeg';
function Home({ }: any) {
  return (
    <div >
      <img className="home-container"src={BannerHome} alt="banner-home" />
    </div>
  )
}

export default Home
