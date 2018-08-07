import moment from "moment"
import React, { Component } from "react"
import Results from "./Results"
import Stopwatch from "./Stopwatch"

class TimeCalculator extends Component {
  state = { numTimesPerHour: 2 }

  handleStart = () => this.setState({ startTime: moment() })
  handleStop = () => {
    const startTime = this.state.startTime
    const stopTime = moment()
    this.props.onSave(moment.duration(stopTime.diff(startTime)))
    return this.setState({ stopTime })
  }

  handleReset = () => this.setState({ startTime: null, stopTime: null })

  handleChange = attrsToChange => this.setState(attrsToChange)

  render() {
    const { otherTotalTime } = this.props
    const { startTime, stopTime, numTimesPerHour } = this.state
    const numEventsPerYear = numTimesPerHour * 5 * 5 * 48
    return (
      <div>
        <Stopwatch
          startTime={startTime}
          stopTime={stopTime}
          onStart={this.handleStart}
          onStop={this.handleStop}
          onReset={this.handleReset}
          onChange={this.handleChange}
          numTimesPerHour={numTimesPerHour}
        />
        <p>
          Events per yr = {numTimesPerHour} (events per hr)<br /> * 5 (hrs per
          day) <br /> * 5 (days per week) <br /> * 48 (weeks per yr) <br /> ={" "}
          {numEventsPerYear}
        </p>
        <div style={{ display: "flex" }}>
          {otherTotalTime && (
            <Results
              totalTime={otherTotalTime}
              numEventsPerYear={numEventsPerYear}
            />
          )}
          <Results
            startTime={startTime}
            stopTime={stopTime}
            numEventsPerYear={numEventsPerYear}
          />
        </div>
      </div>
    )
  }
}

export default TimeCalculator
