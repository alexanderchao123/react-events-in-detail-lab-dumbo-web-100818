import React, { Component } from 'react';

class CoordinatesButton extends Component {
  clickHandler = (event) => {
    let coordinates = [event.clientX, event.clientY]
    this.props.onReceiveCoordinates(coordinates)
  }

  render () {
    return (
      <button onClick={this.clickHandler}>Get Coordinates</button>
    )
  }
}

export default CoordinatesButton
