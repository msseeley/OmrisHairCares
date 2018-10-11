import React from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import CharityInfo from './CharityInfo';
import HairSelector from './HairSelector';
import DonationChart from './DonationChart';
import Header from './Header';
// import NavBar from './NavBar'


const Root = () => {
  return (
    <div id="grid">
      <Header />
      <div id="col1-row1" style={{ flex: 1, backgroundColor: "#011936" }}>
        <img id="header-image" src="OmriLogo.png" />
      </div>
      <div>
        <CharityInfo />
        {/* <DonationChart /> */}
        {/* <HairSelector /> */}
      </div>
    </div>
  )
}
export default Root
