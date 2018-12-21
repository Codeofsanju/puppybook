import React from 'react';
import {connect} from 'react-redux';
import AllPuppies from './AllPuppies';

class AllPuppiesContainer extends React.Component {
    render(){
        return(
            <AllPuppies allPups={this.props}/>
        );
    }
}

const mapStateToProps = (state) => ({
    allPups : state.allPuppies
});



export default connect(mapStateToProps, null)(AllPuppiesContainer);