import React, { Component, PropTypes } from 'react';

class Logo extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <span className="u-logo">
        <img src={this.props.logo} className="u-logo-left-image" />
        <h1>{this.props.title}</h1>
        <img src={this.props.logo} className="u-logo-right-image" />
        <p className="u-description">{this.props.description}</p>
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
