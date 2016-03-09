import Album from 'components/Album';
import Dictionary from 'dictionaries/Main';
import Garbler from 'components/Garbler';
import Header from 'containers/Header';
import React, { Component } from 'react';
import Rule from 'components/Rule';
import Shows from 'components/Shows';
import Spacer from 'components/Spacer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const tracks = Dictionary.albums[0].tracks;
    return (
      <div className="u-container">
        <Header {...Dictionary.website} />
        <main className="u-main">
          <Rule title="listen" />
          {Dictionary.albums.map((album, index) => <Album {...album} key={index} />)}
          <Spacer />
          {!!Dictionary.shows &&
            <div>
              <Rule title="witness" />
              <Shows />
              <Spacer />
            </div>
          }
          <Rule title="contact" />
        </main>
				<Garbler logo={Dictionary.website.logo} tracks={tracks} />
      </div>
    );
  }
}

export default App;
