import React from 'react';
import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

export class Previewer extends React.Component {
  render() {
    return (
      <div
        id='preview'
        className="p-3 border"
        dangerouslySetInnerHTML={{ __html: marked.parse(this.props.textInput) }}
      ></div>
    );
  }
}
