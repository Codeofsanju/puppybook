import React from 'react';
import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';
import { recievePuppies } from './action-creators';

class AllPuppiesContainer extends React.Component {
    render(){
        return(
            <AllPuppies allPups={this.props.allPups} onLoadPuppies={this.props.onLoadPuppies}/>
        );
    }
}

const hardCodedPuppies = 
    [
        { id: 1, name: 'Cody' },
        { id: 2, name: 'Ben' },
        { id: 3, name: 'Bubba' }
    ];


const mapStateToProps = (state) => ({
    allPups : state.allPuppies
});

const mapDispatchToProps = (dispatch) => ({
    onLoadPuppies: function() {dispatch(recievePuppies(hardCodedPuppies));}
});



export default connect(mapStateToProps, mapDispatchToProps)(AllPuppiesContainer);