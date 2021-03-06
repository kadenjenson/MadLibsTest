import React, { Component } from 'react';

class Content extends Component {
  render() {
    const data = this.props.data;
    return (
      <div className="card__content">
        <p>
          Ladies and gentlemen, this is <span>{}</span><b>{data.color}</b> Barber, your sportscaster, bringing you the last inning of the game between the Cleveland <b>{data.pluralNoun}</b> and the <b>{data.adjOne}</b> Yankees. <b>{data.celebOne}</b> is pitching for the Yankees. Here's the pitch! It's a low <b>{data.adjTwo}</b> ball that just cuts the inside of the <b>{data.nounOne}</b> for a strike. That makes the count <b>{data.numOne}</b> strikes and <b>{data.numTwo}</b> balls. Now here's the next pitch. The batter swings and connects. It's a long, high <b>{data.nounTwo}</b> out to <b>{data.adjThree}</b> field. But <b>{data.celebTwo}</b> is coming up fast and has it for the second out. The next batter up is <b>{data.celebThree}</b>, the Cleveland <b>{data.adjFour}</b>-stop. Here's the pitch... and it's hit... a short ground ball to third <b>{data.nounThree}</b>. <b>{data.history}</b> scoops it up and throws it to first base for an out, and the game is over. And the Yankees move into second place in the <b>{data.adjFive}</b> League!
        </p>
      </div>
    )
  }
}

export default Content;