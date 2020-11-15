import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import Questions from './questions.jsx';


const Button = styled.button`
  font-family: sans-serif;
  /* float: right; */
  background-color: #000;
  color: rgb(255, 255, 255);
  border-color: #000;
  border-radius: 10%;
  &:hover {
    background-color: #424040
  }
`


class App extends React.Component {
  constructor(props) {
    super(props);
    this.fetchQuestions = this.fetchQuestions.bind(this)
    this.state = {
      questions: []
    }
  }

  fetchQuestions() {
    axios.get('/questions')
    .then((response) => {
      this.setState({
        questions: response.data
      })
    }).catch((error) => {
      console.log('THERE WAS AN ERROR: ', error)
    })
  }

  componentDidMount() {
    this.fetchQuestions()
  }

  render() {
    return (
      <div className="parent">
        <div className="test">Hello World!</div>
        <Button>Next</Button>
        <Questions questions={this.state.questions} />
      </div>
    )
  }

}

export default App;