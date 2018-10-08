import React from 'react'

const Header = () => {
  return (
    <div id="header-container">
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <img id="header-image" src="OmriHairLogo.png" />
        <div className="title" id="header">
          <h1>OMRI'S<br />HAIR<br />CARES</h1>
        </div>
      </div>
      <h2 id="tag-line" className="title-font">putting the hair in charity</h2>
    </div>
  )
}

export default Header
