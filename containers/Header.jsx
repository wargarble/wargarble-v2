require('./Header.less');

import Logo from 'components/Logo';
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <header className="header">
        <Logo {...this.props} />
      </header>
    );
  }
}

export default Header;
