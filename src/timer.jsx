import React, { Component } from 'react';


export class Time extends Component {
  constructor(props){
    super(props);
    this.state = {
      timer: null,
      counter:0
    };
}
componentDidMount() {
    let timer = setInterval(this.tick, 1000);
    this.setState({timer});
  }
componentWillUnmount() {
    this.clearInterval(this.state.timer);
  }

tick() {
    this.setState(
      {
      counter: this.state.counter + 1,
    });
  }
render() {
  return(
    <div>
      {/* {"...".substr(0, this.state.counter % 3 + 1)} */}
    </div>
)

}
}
