import React from 'react';
import SinglePuppy from './SinglePuppy';
import {connect} from 'react-redux';
import { recieveSinglePuppyThunk } from './action-creators';


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

const mapDispatchToProps = (dispatch) => ({
    onLoadSinglePuppy: function(id) {dispatch(recieveSinglePuppyThunk(id));}
});

export default connect(mapStateToProps, mapDispatchToProps)(SinglePuppyContainer);


