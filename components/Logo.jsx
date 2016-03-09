require('./Logo.less');

import React, { Component, PropTypes } from 'react';

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="logo">
        <img src={this.props.logo} className="logo-left-image" />
        <h1>{this.props.title}</h1>
        <img src={this.props.logo} className="logo-right-image" />
      </span>
    );
  }
}

Logo.propTypes = {
  description: PropTypes.string,
  logo: PropTypes.string,
  title: PropTypes.string,
};

export default Logo;
