require('./Rule.less');

import React, { Component, PropTypes } from 'react';

class Rule extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="rule">
        <h3 className="rule-title">{this.props.title}</h3>
      </div>
    );
  }
}

Rule.propTypes = {
  title: PropTypes.string,
};

export default Rule;
