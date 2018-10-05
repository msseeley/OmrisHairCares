import React from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from './About'
import CharityInfo from './CharityInfo';
import HairSelector from './HairSelector';
import DonationChart from './DonationChart';


const Root = () => {
  return (
    <div className="centered" id="container">
      <About />
      <CharityInfo />
      <DonationChart />
      <HairSelector />
    </div>
  )
}
export default Root
