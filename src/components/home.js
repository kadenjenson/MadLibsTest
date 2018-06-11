import React, { Component } from 'react';

import Header from './header';
import Card from './card';

class Home extends Component {
  render() {
    return (
      <div className="home">
        { Header('Kadens Mad Libs', 'Fill in the blanks below and then hit the generate button to see your Mad Lib story!') }
        <Card />
      </div>
    );
  }
}

export default Home;