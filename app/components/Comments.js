import React, { Component } from 'react'

export default class Comments extends Component {
  constructor() {
    super()
    this.state = {
      name: "",
      comment: ""
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit(this)
  }
  handleChange(evt) {
    this.setState({ [evt.target.name]: evt.target.value })
  }
  handleSubmit(evt) {
    evt.preventDefault()
    //add to comments database
  }
  render() {
    console.log(this.state)
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name:</label>
        <input name="name" type="text" value={this.state.name} />
        <label>Comment:</label>
        <input name="comment" type="text" value={this.state.comment} />
      </form>
    )
  }
}
