import React from 'react'
import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";


export class Previewer extends React.Component {
    render() {
        return (
            <div>
                <h2>Editor</h2>
                <textarea id='editor' style={{width: 500, height: 100}}onChange={this.props.handleChange} value={this.props.textInput}></textarea>
                <h2>Previewer</h2>
                <div id='preview' style={{width: 500, height: 1000}} dangerouslySetInnerHTML={{__html : marked.parse(this.props.textInput)}}></div>
            </div>
        )
    }
}


