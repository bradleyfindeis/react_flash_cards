import React from 'react';

class Card extends React.Component {

  state = { answerShowing: false }

  flip = () => {
    this.setState({
      answerShowing: !this.state.answerShowing
    })
  }

    render () {
      if (this.state.answerShowing) {
        return ( 
          <div> 
          <h1>Answer</h1>
          <p>{this.props.answer}</p>
          <button onClick={this.flip}> See Question </button>
          <button onClick={() => this.props.deleteCard(this.props.question)}> Delete </button>
          <button onClick={() => this.props.editCard(this.props.question)}> Edit </button>
          </div> 
        )
      }
        else {
          return (
            <div> 
              <h1>Question</h1>
              <p>{this.props.question}</p>
              <button onClick={this.flip}> See Answer </button>
              <button onClick={() => this.props.deleteCard(this.props.question)}> Delete </button>
              <button onClick={() => this.props.editCard(this.props.question)}> Edit </button>
            </div>
          )

        }
  }
}


export default Card; 