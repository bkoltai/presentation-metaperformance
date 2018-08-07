import moment from "moment"
import React, { Component } from "react"
import BigButton from "./BigButton"
import styled from "styled-components"

const StopwatchStyled = styled.div`
  display: flex;
  flex-direction: column;

  .controls {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  label {
    margin-right: 8px;
  }

  input {
    font-size: 2rem;
    width: 100px;
    text-align: center;
  }
`
class Stopwatch extends Component {
  state = {}

  componentDidMount() {
    this.interval = setInterval(() => this.setState({ now: moment() }), 50)
  }

  componentWillUnmount() {
    clearInterval(this.interval)
  }

  handleKeyUp = e => {
    if (e.which === 32) {
      if (this.state.startTime) {
        this.props.onStop()
      } else {
        this.props.onStart()
      }
    }
    e.preventDefault()
    e.stopPropagation()
  }

  render() {
    const {
      startTime,
      stopTime,
      onStart,
      onStop,
      onReset,
      onChange,
      numTimesPerHour
    } = this.props
    return (
      <StopwatchStyled>
        <div className="controls">
          {!startTime ? (
            <BigButton onClick={onStart}>start</BigButton>
          ) : !stopTime ? (
            <BigButton onClick={onStop}>stop</BigButton>
          ) : (
            <React.Fragment>
              <BigButton onClick={onReset}>reset</BigButton>
            </React.Fragment>
          )}
          <div>
            <label>Events per hr</label>
            <input
              onKeyUp={this.handleKeyUp}
              type="number"
              value={numTimesPerHour}
              onChange={e => onChange({ numTimesPerHour: e.target.value })}
            />
          </div>
        </div>
      </StopwatchStyled>
    )
  }
}

export default Stopwatch
