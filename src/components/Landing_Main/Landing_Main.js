import React from 'react'
import Header from '../Header/Header'
import Section_Main from './Section_Main'
import Section_Recipe from './Section_Recipe'
import Section_Popular_Product from './Section_Popular_Product'
import SectionProductAdvertisement from './SectionProductAdvertisement'
import SectionLatestNews from './SectionLatestNews'
import SectionHappyClient from './SectionHappyClient'
import SectionNewsLetter from './SectionNewsLetter'
import Footer from '../Footer/Footer'

const Landing_Main = () => {
  return (
<>
    <Header/>
    <Section_Main/>
    <Section_Recipe/>
    <Section_Popular_Product/>
    <SectionProductAdvertisement/>
    <SectionLatestNews/>
    <SectionHappyClient/>
    <SectionNewsLetter/>
    <Footer/>


</> 
         )
}

export default Landing_Main