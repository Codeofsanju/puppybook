import React from 'react';

export default class AllPuppies extends React.Component {

  render () {
    const {allPups} = this.props.allPups;
    return (
      <div>
        <ul className="list-unstyled">
          {
            allPups.map(pup => <li key = {pup.id}><a href="#">{pup.name}</a></li>)
          }
        </ul>
      </div>
    );
  }
}



