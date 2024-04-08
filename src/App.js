import React from 'react'
import ReactDOM from 'react-dom'
import { Previewer } from './Previewer'

const defaultText = '# Header \n## Subheader\n[link](https://www.google.com)\n\n`<div></div>`\n```\nfunction exampleFunction(param1, param2) {\n if (thisIsCool === true) {\n return "funny joke"\n }\n}\n```\n1. This is a list item\n1. and another one\n1. and another\n> This is a block quote\n\n![freeCodeCamp Logo](https://cdn.freecodecamp.org/testable-projects-fcc/images/fcc_secondary.svg) \n\n**boldTextGoesHere**'

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      input: defaultText,
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value 
    })
  }

  handleSubmit() {
    this.setState({
      input: ''
    })
  }


  render() {
    console.log(this.state.input)
    return (
      <div class="appWrapper">
        <h1 style={{color: "white"}}>Markdown Previewer</h1>
        <p>Type Git flavored markdown in the editor and watch it render in the previewer in real time</p>
        <Previewer handleChange={this.handleChange} textInput={this.state.input}/>
        <button onClick={this.handleSubmit}>Reset</button>
      </div>
    )
  }
}

export default App;
