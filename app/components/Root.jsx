import React, { Component } from 'react'
// import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom'
import HowItWorks from './HowItWorks'
import CharityInfo from './CharityInfo';
import HairSelector from './HairSelector';
import DonationChart from './DonationChart';
import Header from './Header';
// import NavBar from './NavBar'


export default class Root extends Component {
  constructor() {
    super()
    this.state = {
      openHowItWorks: false,
      openCharityInfo: false,
      openFundingGraph: false,
    }
  }
  render() {
    return (
      <div id="entire-page">
        <div id="grid">
          <Header />
          <div id="col1-row1" style={{ flex: 1, backgroundColor: "#011936" }}>
            <img id="header-image" src="OmriLogo.png" />
          </div>
          <div id="col1-row2">
            <button id="charity-btn" type="button" onClick={() => this.setState({ openHowItWorks: !this.state.openHowItWorks })}>
              HOW IT WORKS
          </button>
            <button id="charity-btn" type="button" onClick={() => this.setState({ openCharityInfo: !this.state.openCharityInfo })}>
              THE CHAIRITY
          </button>
            <button id="charity-btn" type="button" onClick={() => this.setState({ openFundingGraph: !this.state.openFundingGraph })}>
              FUNDRAISING GOALS
          </button>
          </div>
          <div id="col2-row2">
            {
              this.state.openHowItWorks &&
              <HowItWorks />
            }
            {
              this.state.openCharityInfo &&
              <CharityInfo />
            }
            {
              this.state.openFundingGraph &&
              <DonationChart />
            }
          </div>
        </div>
        <HairSelector />
      </div>
    )
  }
}

