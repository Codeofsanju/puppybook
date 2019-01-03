import React, { Component } from 'react';

export default class SinglePuppy extends Component {
  componentDidMount(){
    const {props} = this.props;

    props.onLoadSinglePuppy(props.match.params.id);
  }


  render () {
    const {props} = this.props;
    const msg = new SpeechSynthesisUtterance(`Hello! my name is ${props.currPuppy.name}`);
    return (
      <div>
        <h2>{props.currPuppy.name}</h2>
        <button type="submit" onClick={() => window.speechSynthesis.speak(msg)}> Hi! </button>
        <div>
          <img src={props.currPuppy.image} />
        </div>
      </div>
    );
  }
}