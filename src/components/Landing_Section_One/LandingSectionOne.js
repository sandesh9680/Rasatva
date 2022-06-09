import React from 'react'
import HeaderLandingOne from '../Header/HeaderLandingOne'
import LandingRecipeSection from './LandingRecipeSection'
import SectionProductFeatures from './SectionProductFeatures'
import SectionReviews from './SectionReviews'

const LandingSectionOne = () => {
  return (
      <>
    <HeaderLandingOne/>
    <LandingRecipeSection/>
    <SectionProductFeatures/>
    <SectionReviews/>
      </>
   
  )
}

export default LandingSectionOne