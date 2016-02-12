import Album from 'components/Album';
import Dictionary from 'dictionaries/Main';
import Header from 'containers/Header';
import React, { Component } from 'react';
import Rule from 'components/Rule';
import Shows from 'components/Shows';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="u-container">
        <Header {...Dictionary.website} />
        <Rule title="listen" />
        <main className="u-main">
          {Dictionary.albums.map((album) => <Album {...album} />)}
        </main>
        <Rule title="witness" />
        <Shows />
        <Rule title="contact" />
      </div>
    );
  }
}

export default App;
