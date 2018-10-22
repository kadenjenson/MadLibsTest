import React, { Component } from 'react';

import Input from './input';

class Card extends Component {

  constructor() {
    super()
    this.state = {
      color: '',
      pluralNoun: '',
      adjOne: '',
      adjTwo: '',
      adjThree: '',
      adjFour: '',
      adjFive: '',
      celebOne: '',
      celebTwo: '',
      celebThree: '',
      numOne: '',
      numTwo: '',
      nounOne: '',
      nounTwo: '',
      nounThree: '',
      history: '',
    }
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.name]: event.target.value  })
    console.log(this.state)
  }

  render() {

    const inputData = [
      { title: 'Color', state: this.state.color, name: 'color' },
      { title: 'Plural Noun', state: this.state.pluralNoun, name: 'pluralNoun' },
      { title: 'Adjective', state: this.state.adjOne, name: 'adjOne' },
      { title: 'Celebrity', state: this.state.celebOne, name: 'celebOne' },

      { title: 'Adjective', state: this.state.adjTwo, name: 'adjTwo' },
      { title: 'Noun', state: this.state.nounOne, name: 'nounOne' },
      { title: 'Number', state: this.state.numOne, name: 'numOne' },
      { title: 'Number', state: this.state.numTwo, name: 'numTwo' },

      { title: 'Noun', state: this.state.nounTwo, name: 'nounTwo' },
      { title: 'Adjective', state: this.state.adjThree, name: 'adjThree' },
      { title: 'Celebrity', state: this.state.celebTwo, name: 'celebTwo' },
      { title: 'Historical Figure', state: this.state.history, name: 'history' },

      { title: 'Adjective', state: this.state.adjFour, name: 'adjFour' },
      { title: 'Noun', state: this.state.nounThree, name: 'nounThree' },
      { title: 'Celebrity', state: this.state.celebThree, name: 'celebThree' },
      { title: 'Adjective', state: this.state.adjFive, name: 'adjFive' },
    ]

    return (
      <div className="card">
        {
          inputData.map(data => Input( (data), this.handleInputChange))
        }
      </div>
    )
  }
}

export default Card;