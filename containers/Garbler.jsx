import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="garbler">
        <div className="garbler-toggle-play"></div>
        <div className="garbler-progress"></div>
        <div className="garbler-tracks">
          <div className="garbler-tracks-next"></div>
          <div className="garbler-tracks-prev"></div>
        </div>
      </div>
    );
  }
}

export default Header;
