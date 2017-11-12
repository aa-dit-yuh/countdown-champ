import React, { Component } from 'react';

import './App.css';

class Clock extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  componentWillMount() {
    this.getTimeUntil(this.props.deadline);
  }

  componentDidMount() {
    setInterval(() => this.getTimeUntil(this.props.deadline), 1000);
  }

  getTimeUntil(deadline) {
    const time = Date.parse(deadline) - Date.parse(new Date());
    const seconds = Math.floor((time/1000)%60);
    const minutes = Math.floor((time/1000/60)%60);
    const hours = Math.floor((time/1000/60/60)%24);
    const days = Math.floor(time/1000/60/60/24);

    this.setState({seconds, minutes, hours, days});
  }

  render() {
    return (
      <div className="Clock">
        <div className="Days">{this.state.days} days</div>
        <div className="Hours">{this.state.hours} hours</div>
        <div className="Minutes">{this.state.minutes} minutes</div>
        <div className="Seconds">{this.state.seconds} seconds</div>
      </div>
    );
  }
}

export default Clock;