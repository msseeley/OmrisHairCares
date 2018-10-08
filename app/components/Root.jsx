import React from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import About from './About'
import CharityInfo from './CharityInfo';
import HairSelector from './HairSelector';
import DonationChart from './DonationChart';
import Header from './Header';


const Root = () => {
  return (
    <div id="container">
      <div className="centered">
        <div id="header-about" style={{ display: "flex" }}>
          <Header />
          <About />
        </div>
        <CharityInfo />
        <DonationChart />
        <HairSelector />
      </div>
    </div>
  )
}
export default Root
