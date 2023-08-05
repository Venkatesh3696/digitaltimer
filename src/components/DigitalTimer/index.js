// Write your code here
import {Component} from 'react'
import './index.css'

class DigitalTimer extends Component {
  constructor(props) {
    super(props)
    this.state = {time: '00:00', status: false, timeLimit: 0}
  }

  renderStartOrPauseBtn = () => {
    const {status} = this.state
    status ? (
      <button className="button" type="button">
        <img
          className="button-image"
          alt="play icon"
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        />
        <h1>Pause</h1>
      </button>
    ) : (
      <button className="button" type="button">
        <img
          className="button-image"
          alt="play icon"
          src="https://assets.ccbp.in/frontend/react-js/play-icon-img.png"
        />
        <h1>Pause</h1>
      </button>
    )
  }

  render() {
    const {time, status, timeLimit} = this.state

    return (
      <div className="main-container">
        <h1>Digital Timer</h1>
        <div className="sub-container">
          <div className="left-container">
            <div className="time-container">
              <h1>{time}</h1>
              <p>{status}</p>
            </div>
          </div>
          <div className="right-container">
            <div className="buttons-container">
              {this.renderStartOrPauseBtn}
              <button className="button" type="button">
                <img
                  className="button-image"
                  alt="play icon"
                  src="https://assets.ccbp.in/frontend/react-js/reset-icon-img.png"
                />
                <h1>Reset</h1>
              </button>
            </div>
            <p>Set Timer Limit</p>
            <div className="btns-container">
              <button type="button" className="btn">
                <h1>-</h1>
              </button>
              <div className="timer-limit">
                <h1>{timeLimit}</h1>
              </div>
              <button type="button" className="btn">
                <h1>+</h1>
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default DigitalTimer
