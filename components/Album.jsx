require('./Album.less');

import React, { Component, PropTypes } from 'react';

class Album extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="album u-inner u-cf">
        <figure className="album-cover">
          <img src={this.props.cover} />
        </figure>
        <div className="album-info">
          <h1 className="album-title">{this.props.title}</h1>
          <ul className="album-tracks">
            {this.props.tracks.map((track, index) => {
              const title = track.title;
              return <li className="album-track" key={index}>{title}</li>;
            })}
          </ul>
        </div>
      </section>
    );
  }
}

Album.propTypes = {
  cover: PropTypes.string,
  title: PropTypes.string,
  tracks: PropTypes.array,
};

export default Album;
