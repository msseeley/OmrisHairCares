import React from 'react'
import HowItWorks from './HowItWorks'
import CharityInfo from './CharityInfo';
import HairSelector from './HairSelector';
import DonationChart from './DonationChart';
import Header from './Header';

const Root = () => {
  return (
    <div>
      <Header />
      <DonationChart />
      <HowItWorks />
      <CharityInfo />
      <HairSelector />
    </div>
  )
}

export default Root

