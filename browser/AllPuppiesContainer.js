import React from 'react';
import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';
import { recievePuppiesThunk } from './action-creators';

class AllPuppiesContainer extends React.Component {
    render(){
        return(
            <div>
                <AllPuppies allPups={this.props.allPups} onLoadPuppies={this.props.onLoadPuppies}/>

            </div>
        );
    }
}


const mapStateToProps = (state) => ({
    allPups : state.allPuppies
});

const mapDispatchToProps = (dispatch) => ({
    onLoadPuppies: function() {dispatch(recievePuppiesThunk());}
});



export default connect(mapStateToProps, mapDispatchToProps)(AllPuppiesContainer);