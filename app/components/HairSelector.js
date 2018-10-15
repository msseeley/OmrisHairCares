import React from 'react'

const haircuts = [
  { name: 'name', image: "https://tbdimmersive.com/wp-content/uploads/2017/09/LOGO-1.png", id: 1 },
  { name: 'name', image: "https://tbdimmersive.com/wp-content/uploads/2017/09/LOGO-1.png", id: 2 },
  { name: 'name', image: "https://tbdimmersive.com/wp-content/uploads/2017/09/LOGO-1.png", id: 3 },
  { name: 'name', image: "https://tbdimmersive.com/wp-content/uploads/2017/09/LOGO-1.png", id: 4 },
  { name: 'name', image: "https://tbdimmersive.com/wp-content/uploads/2017/09/LOGO-1.png", id: 5 },
  { name: 'name', image: "https://tbdimmersive.com/wp-content/uploads/2017/09/LOGO-1.png", id: 6 }
]

export default class HairSelector extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div className="centered" id="selector-container">
        <img src="https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg" alt="omri-stand-in" />
        <div id="haircut-container">
          {
            haircuts.map(cut => <img className="haircut-images" key={cut.id} src={cut.image} height="270" width="150" />)
          }
        </div>
      </div>
    )
  }
}
