require('components/Garbler.less');

import React, { Component, PropTypes } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // We're doing this here so we get access to the logo as a prop. There may
    // be a better way to handle this but I can't figure it out right now.
    // foley, march 9, 2016
    const playStyles = {
      backgroundImage: `url(${this.props.logo})`,
    };

    return (
      <div className="garbler">
        <div className="garbler-toggle-play" style={playStyles}></div>
        <div className="garbler-progress"></div>
        <div className="garbler-tracking">
          <div className="garbler-tracking-next"></div>
          <div className="garbler-tracking-prev"></div>
        </div>
        <div className="garbler-tracks">
          {this.props.tracks && this.props.tracks.map((track, index) => {
            const url = track.url;
            let autoplay = false;

            if (index === 0) {
              autoplay = true;
            }

            return (
              <audio key={index}
                controls="false"
                loop="false"
                mediaset="garbler"
                controls="false"
                loop="false"
                src={url}
                autoPlay={autoplay}
              ></audio>
            );
          })}
        </div>
      </div>
    );
  }
}

Header.propTypes = {
  logo: PropTypes.string,
  tracks: PropTypes.array,
};

export default Header;
