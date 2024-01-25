import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Header from '../../components/header/Header'
import Footer from '../../components/footer/Footer'
import Featured from "../../components/featured/Featured";
import "./Home.css";
function Home() {
  return (
    <div>
       <Navbar/>
       <Header/>
       <div className="homeContainer">
        <Featured/>
        </div>
       <Footer/>
    </div>
  )
}

export default Home