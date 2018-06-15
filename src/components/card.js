import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

  constructor() {
    super()
    this.state = {
      color: '',
      pluralNoun: '',
      adjective: '',
      noun: ''
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value  })
  }

  render() {
    return (
      <div className="card">
        <h1>{this.state.color}</h1>
        { Input('Color', this.state.color, this.handleInputChange, 'color') }
        <h1>{this.state.pluralNoun}</h1>
        { Input('Plural Noun', this.state.pluralNoun, this.handleInputChange, 'pluralNoun') }
        <h1>{this.state.adjective}</h1>
        { Input('Adjective', this.state.adjective, this.handleInputChange, 'adjective') }
        <h1>{this.state.noun}</h1>
        { Input('Noun', this.state.noun, this.handleInputChange, 'noun') }
      </div>
    )
  }
}

export default Card;