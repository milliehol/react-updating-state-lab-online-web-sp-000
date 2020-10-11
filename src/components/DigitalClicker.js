// Code DigitalClicker Component Here

import React, {Component} from 'react';

class DigitalClicker extends Component {
  constructor() {
    super()
    // initial state has count set at 0
    this.state = {
      timesClicked: 0
    }
  }

  handleClick = () => {
    // when handleClick is called, newCount is set to whatever this.state.count is plus 1 PRIOR to calling this.setState
    this.setState(prevState => ({
    timesClicked: prevState.timesClicked+1
  }))
  }

  render() {
    return (
      <div>
        <h1>{this.state.count}</h1>
        <button onClick={this.handleClick}>Click Me</button>
      </div>
    )
  }
}

export default DigitalClicker
