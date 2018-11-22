import React from 'react';

export default class Profile extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        Profile details go here for guid: {this.props.match.params && this.props.match.params.id}
      </div>
    )
  }
}

