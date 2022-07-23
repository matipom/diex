import React from "react";
import quotes from "./QuotesDatabase";

class Quotes extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      chosenQuote: quotes.list[Math.floor(Math.random() * 95)],
    };
  }

  generarLetra = () => {
    var letras = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
    ];
    var numero = (Math.random() * 15).toFixed(0);
    return letras[numero];
  };

  colorHEX = () => {
    var coolor = "";
    for (var i = 0; i < 6; i++) {
      coolor = coolor + this.generarLetra();
    }
    return "#" + coolor;
  };

  choseQuote = () => {
    const randomNum = Math.floor(Math.random() * 4);
    const searchQuote = quotes.list.map((quote, i) => {
      return quote;
    });
    this.setState({
      chosenQuote: searchQuote[randomNum],
    });
    console.log(this.state.chosenQuote);
    console.log(randomNum);
  };

  render() {
    return (
      <div>
        <div
          style={{
            border: "1px solid white",
            backgroundColor: this.colorHEX(),
          }}
        >
          <h1 style={{ color: "white" }}>{this.state.chosenQuote.quote}</h1>
          <p>{this.state.chosenQuote.author} </p>
          <button onClick={this.choseQuote}>New quote</button>
        </div>
      </div>
    );
  }
}

export default Quotes;
