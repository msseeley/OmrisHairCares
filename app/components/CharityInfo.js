import React from 'react'

class CharityInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      open: false
    }
  }

  render() {
    return (
      <div id="charity-container" className="centered">
        <div id="charity-description">
          <h1 className="subheader" id="charity-title" onClick={(evt) => this.setState({ open: true })}>CHARITY</h1>
          <img src="https://pbs.twimg.com/profile_images/791675092921159684/QJSEB1IR_400x400.jpg" alt="Code Now Logo" />
          <p className="regular-font" id="charity-blurb">
            Too many young people face obstacles to success caused by poverty, violence, and systemic inequities in education and employment. By giving teens access to software development training, exposure to mentors employed at tech companies, and practical steps to build a career path, we reveal to students a previously unknown and unavailable pathway to a brighter future.
        </p>
        </div>
      </div>
    )
  }
}

export default CharityInfo
