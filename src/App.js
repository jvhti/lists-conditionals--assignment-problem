import React, { Component } from 'react';
import './App.css';
import ValidationComponent from "./ValidationComponent";
import CharComponent from "./CharComponent";

class App extends Component {
  state = {
    text: ""
  };

  inputChangedHandler = (ev) => {
    this.setState({text: ev.target.value});
  };

  deleteLetterHandler = (i) => {
    const text = this.state.text.split("");

    text.splice(i, 1);

    this.setState({text: text.join("")});
  };

  render() {
    return (
      <div className="App">
        <ol>
          <li>Create an input field (in App component) with a change listener which outputs the length of the entered text below it (e.g. in a paragraph).</li>
          <li>Create a new component (=> ValidationComponent) which receives the text length as a prop</li>
          <li>Inside the ValidationComponent, either output "Text too short" or "Text long enough" depending on the text length (e.g. take 5 as a minimum length)</li>
          <li>Create another component (=> CharComponent) and style it as an inline box (=> display: inline-block, padding: 16px, text-align: center, margin: 16px, border: 1px solid black).</li>
          <li>Render a list of CharComponents where each CharComponent receives a different letter of the entered text (in the initial input field) as a prop.</li>
          <li>When you click a CharComponent, it should be removed from the entered text.</li>
        </ol>
        <p>Hint: Keep in mind that JavaScript strings are basically arrays!</p>
        <input type="text" onChange={this.inputChangedHandler} value={this.state.text}/> <br/>
        <p>{this.state.text.length}</p>
        <ValidationComponent length={this.state.text.length}/><br/>
        {this.state.text.split("").map((letter, i) =>
            <CharComponent key={letter+i} letter={letter} click={() => this.deleteLetterHandler(i)}/>)}
      </div>
    );
  }
}

export default App;
