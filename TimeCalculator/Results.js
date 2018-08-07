import moment from "moment"
import React from "react"
import styled from "styled-components"

const round = (number, precision) =>
  Math.round(number * (100 * precision)) / (100 * precision)
class Results extends React.Component {
  state = {}

  componentDidMount() {
    if (!this.props.totalTime) {
      this.interval = setInterval(() => this.setState({ now: moment() }), 50)
    }
  }

  componentWillUnmount() {
    if (!this.props.totalTime) {
      clearInterval(this.interval)
    }
  }

  render() {
    const { now } = this.state
    const { startTime, stopTime, numEventsPerYear } = this.props
    let totalTime = this.props.totalTime
    if (!totalTime) {
      totalTime = stopTime ? moment.duration(stopTime.diff(startTime)) : null
    }

    return (
      <div style={{padding: 16}}>
        <div style={{ opacity: totalTime ? 1 : 0 }}>
          <h2>
            Time per Year:{" "}
            {round(moment.duration(totalTime * numEventsPerYear).asHours(), 2)}{" "}
            hrs
          </h2>
        </div>
        <h2 style={{ opacity: startTime || totalTime ? 1 : 0 }}>
          {(startTime || totalTime) &&
          moment
            .duration(totalTime || (stopTime || now).diff(startTime))
            .as("seconds")}{" "}
          s
        </h2>
      </div>
    )
  }
}

Results.propTypes = {}

export default Results
