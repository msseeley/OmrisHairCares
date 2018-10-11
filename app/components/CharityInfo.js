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
      <div id="btn-and-charity">
        <div id="btn-wrapper">
          <button id="charity-btn" type="button" onClick={() => this.setState({ open: !this.state.open })}>
            ABOUT
        </button>
        </div>
        {
          this.state.open &&
          <div id="outer-about-container">
            <div id="about-background">
              <div id="about-container">
                <h1 id="about-title" >HOW IT WORKS</h1>
                <div className="about-explanation" >
                  <p className="regular-font"> 1.) Choose a haircut.</p>
                  <p className="regular-font"> 2.) Put a dollar amount behind it, representing how much you'd pay to see Omri wearing it.</p>
                  <p className="regular-font"> 3.) On January 2nd, the haircut with the highest amount of $$ behind it is chosen</p>
                  <p className="regular-font"> 4.) Meeting a 2K fundraising goal unlocks the ability to add hair colors and beard styling</p>
                </div>
              </div>
            </div>
            <div id="charity-container" className="centered">
              <div id="charity-description">
                <h1 className="subheader" id="charity-title" onClick={(evt) => this.setState({ open: true })}>CHARITY</h1>
                <img src="https://pbs.twimg.com/profile_images/791675092921159684/QJSEB1IR_400x400.jpg" alt="Code Now Logo" />
                <p className="regular-font" id="charity-blurb">
                  Too many young people face obstacles to success caused by poverty, violence, and systemic inequities in education and employment. By giving teens access to software development training, exposure to mentors employed at tech companies, and practical steps to build a career path, we reveal to students a previously unknown and unavailable pathway to a brighter future.
              </p>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}

export default CharityInfo
