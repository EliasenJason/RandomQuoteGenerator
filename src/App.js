import React from 'react';
import './App.css';
import './components/quoteCard.js';
import QuoteCard from './components/quoteCard.js';



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      currentColor: 'white',
      quote: '',
      author: ''
    }
  }

  handleNewQuote = () => {
    fetch('http://quotes.stormconsultancy.co.uk/random.json')
      .then((response) => {
        return response.json()
      })
      .then((myJson) => {
        this.setState({
          quote: myJson.quote,
          author: myJson.author
        }) 
        console.log(myJson.author) 
      })
      .then(
        this.setState({
          currentColor: 'hsla(' + Math.floor(Math.random()*360) + ', 100%, 70%, 1)'
        })
      )
  }

  render() {
    const styling = {
      backgroundColor: this.state.currentColor,
      height: '100vh',
      width: '100%',
      display: 'flex'
    }

    return (
      <div className="App" style={styling}>
        <QuoteCard color={this.state.currentColor} quote={this.state.quote} author={this.state.author} handleNewQuote={this.handleNewQuote}/>
        
      </div>
    )
  }
}

export default App;
