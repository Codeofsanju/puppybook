import React from 'react';
import SinglePuppy from './SinglePuppy';
import {connect} from 'react-redux';

class SinglePuppyContainer extends React.Component {
    render(){
        // console.log(this.props);
        return(
            <SinglePuppy  props = {this.props}/> 
        );
    }
}

const mapStateToProps = (state) => ({
    currPuppy: state.singlePuppy
});

export default connect(mapStateToProps, null)(SinglePuppyContainer);


