import React from 'react'

const haircuts = [
  { name: 'name', image: "https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg", id: 1 },
  { name: 'name', image: "https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg", id: 2 },
  { name: 'name', image: "https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg", id: 3 },
  { name: 'name', image: "https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg", id: 4 },
  { name: 'name', image: "https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg", id: 5 },
  { name: 'name', image: "https://image.freepik.com/free-icon/british-man-with-long-hair-and-beard_318-42080.jpg", id: 6 }
]

export default class HairSelector extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  render() {
    return (
      <div>
        <div>
          {
            haircuts.map(cut => <img key={cut.id} src={cut.image} />)
          }
        </div>
      </div>
    )
  }
}
