/**
 * @file The main thread web shit.
 * @author foley
 */

if (module.hot) {
  module.hot.accept();
}

// TODO: figure out a good way to manage this shit.
require('../css/main.less');

import React from 'react';
import ReactDOM from 'react-dom';
import App from 'containers/App';

const Wargarble = {
  init() {
    ReactDOM.render(<App />, document.getElementById('wargarble'));
  },
};

if (
  document.readyState === 'complete' ||
  document.readyState === 'interactive' ||
  document.readyState === 'loaded'
) {
  Wargarble.init();
} else {
  document.addEventListener('DOMContentLoaded', Wargarble.init);
}
