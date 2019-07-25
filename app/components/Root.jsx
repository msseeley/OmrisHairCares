import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HowItWorks from './HowItWorks'
import CharityInfo from './CharityInfo';
import HairSelector from './HairSelector';
import DonationChart from './DonationChart';
import Header from './Header';
// import NavBar from './NavBar'


const Root = () => {
  return (
    <div id="entire-page">
      <div id="grid">
        <Header />
        <div id="col1-row1" style={{ flex: 1, }}>
          <img id="header-image" src="OmrisHairOnly.png" />
        </div>
        <div id="col2-row2">
          <DonationChart />
          <HowItWorks />
          <CharityInfo />
        </div>
      </div>
      <HairSelector />
    </div>
  )
}

export default Root

