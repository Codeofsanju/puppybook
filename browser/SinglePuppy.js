import React, { Component } from 'react';

export default class SinglePuppy extends Component {

  render () {
    const {props} = this.props;
    console.log(props);
    return (
      <div>
        <h2>{props.currPuppy.name}</h2>
        <div>
          <img src={props.currPuppy.image} />
        </div>
      </div>
    )
  }
}