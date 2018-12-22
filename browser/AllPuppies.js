import React from 'react';
import {Link} from 'react-router-dom';

export default class AllPuppies extends React.Component {

  componentDidMount(){
    this.props.onLoadPuppies();
  }

  render () {
    const {allPups} = this.props;
    return (
      <div>
        <ul className="list-unstyled">
          {
            allPups.map(pup => <li key = {pup.id}><Link to ={`puppies/${pup.id}`}>{pup.name}</Link></li>)
          }
        </ul>
      </div>
    );
  }
}



