import React, { Component } from 'react';

export default class App extends Component {
  render() {
    return (
      <div>
        <div className="background">
          <div className="header">
            <h1>MadLibs</h1>
          </div>
          <div className="sub-header">
            Fill out the fields below and click the generate button to see your Mad Lib.
          </div>
        </div>
      </div>
    );
  }
}
