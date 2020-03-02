import React from 'react';

class QuoteCard extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
      }
    }
  
  
  
    render() {
      let size;
      this.props.quote.length > 120 ? size = 24 : size = 35;

      const stylingContainer = {
        margin: '0',
        backgroundColor: 'black',
        border: 'black solid 2px',
        margin: 'auto',
        padding: '3%',
        width: '60%',
        height: '33%',
        textAlign: 'center',
        borderRadius: 10,
        fontSize: size,
        fontFamily: 'Arial Black',
        display: 'grid',
        gridTemplateColumns: '20% 60% 20%',
        gridTemplateRows: '90% 10%',
        gridTemplateAreas: '"quote quote quote" "botleft author botright"'
      }
      const stylingP = {
        gridArea:'quote',
        color: this.props.color,
      }
      const stylingtweetButton = {
        gridArea:'botleft'
      }
      const stylingnewQuoteButton = {
        gridArea:'botright'
      }
      const stylingAuthor = {
        gridArea:'author',
        color: this.props.color
      }


      return (
        <div className="flex-item" style={stylingContainer}>
          <p style={stylingP}>"{this.props.quote}"</p>
          <button style={stylingtweetButton}>Tweet</button>
          <p style={stylingAuthor}>{this.props.author}</p>
          <button style={stylingnewQuoteButton} onClick={this.props.handleNewQuote} >New Quote</button>
        </div>
      )
    }
  }
  
  export default QuoteCard;