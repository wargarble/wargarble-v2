import React, { Component, PropTypes } from 'react';

class Shows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="witness u-inner">
        <ul className="witness-shows">
          {this.props.shows.map((show) => <li className="album-track">{show.title}</li>)}
        </ul>
      </section>
    );
  }
}

Shows.propTypes = {
  title: PropTypes.string,
  shows: PropTypes.array,
};

export default Shows;
