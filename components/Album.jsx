require('./Album.less');

import React, { Component, PropTypes } from 'react';

class Album extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="album">
        <h1 className="album-title">{this.props.title}</h1>
        <ul className="album-tracks">
          {this.props.tracks.map((track) => <li className="album-track">{track.title}</li>)}
        </ul>
      </section>
    );
  }
}

Album.propTypes = {
  title: PropTypes.string,
  tracks: PropTypes.array,
};

export default Album;
