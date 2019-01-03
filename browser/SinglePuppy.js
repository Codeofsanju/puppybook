import React, { Component } from 'react';

export default class SinglePuppy extends Component {
  componentDidMount(){
    const {props} = this.props;

    props.onLoadSinglePuppy(props.match.params.id);
  }

  render () {
    const {props} = this.props;
    console.log('after: ', props.currPuppy);
    return (
      <div>
        <h2>{props.currPuppy.name}</h2>
        <div>
          <img src={props.currPuppy.image} />
        </div>
      </div>
    );
  }
}