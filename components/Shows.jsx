import React, { Component, PropTypes } from 'react';

class Shows extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const hasShows = !!this.props.shows;
    return (
      <section className="witness">
        {hasShows &&
          <ul className="witness-shows">
            {this.props.shows.map((show) => <li className="album-track">{show.title}</li>)}
          </ul>
        }

        {!hasShows &&
          <p>Man, we ain't got now shows.</p>
        }
      </section>
    );
  }
}

Shows.propTypes = {
  title: PropTypes.string,
  shows: PropTypes.array,
};

export default Shows;
