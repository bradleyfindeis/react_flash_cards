import React, { Component } from 'react';
import Form from "./Form"; 
import Card from "./Card"


class App extends Component {

  state = {
    cards: [ {question: "This is a Q", answer: "This is an A"},
    {question: "QEUSTION", answer: "ANSWER"}
  ] 
  }

  addCard = (card) => {
    const {cards} = this.state; 

    this.setState (
      { cards: [card, ...cards] }
    )

  }

  deleteCard  = (question) => {
    const {cards} = this.state;
    let newArr= cards.filter( card => {
      return card.question != question
    })
    this.setState({cards: newArr})
  }

  editCard = (question) => {
    const {cards} = this.state;
    let newArr= cards.filter( card => {
      return card.question == question
    })
    this.setState({ cards: newArr })
  }

  render() {
    return (
      <div >
        <Form addCard={this.addCard} /> 
        {this.state.cards.map(
          (card,i) => {
            return (
              <Card editCard={this.editCard} deleteCard={this.deleteCard} id={i} question={card.question} answer={card.answer}/>
            )
          }
        )}
      </div>
    );
  }
}

export default App;