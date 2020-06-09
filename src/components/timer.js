import React, { Component } from "react";

class timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hours: "",
      min: "",
      sec: "",
    };
  }
  componentDidMount() {
    this.gettime = setInterval(() => {
      let date = new Date();
      let hrs = date.getHours();
      let m = date.getMinutes();
      let s = date.getSeconds();
      hrs = hrs < 10 ? "0" + hrs : hrs;
      m = m < 10 ? "0" + m : m;
      s = s < 10 ? "0" + s : s;
      this.setState({
        hours: hrs,
        min: m,
        sec: s,
      });
    }, 1000);
  }

  render() {
    const { hours, min, sec } = this.state;
    let day = hours >= 12 ? "PM" : "AM";
    return <div className='text-white'>{`${hours}:${min}:${sec} ${day}`}</div>;
  }
}

export default timer;
