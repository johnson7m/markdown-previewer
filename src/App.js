import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button, ButtonGroup } from 'react-bootstrap';
import { Previewer } from './Previewer';

const defaultText = '# Header \n## Subheader\n[link](https://www.google.com)\n\n`<div></div>`\n```\nfunction exampleFunction(param1, param2) {\n if (thisIsCool === true) {\n return "funny joke"\n }\n}\n```\n1. This is a list item\n1. and another one\n1. and another\n> This is a block quote\n\n**boldTextGoesHere**';

const App = () => {
  const [input, setInput] = useState(defaultText);
  const [viewMode, setViewMode] = useState('side-by-side');
  const [isMobileView, setIsMobileView] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = () => {
    setInput(defaultText);
  };

  const handleViewToggle = () => {
    setViewMode((prevMode) => (prevMode === 'side-by-side' ? 'stacked' : 'side-by-side'));
  };

  const insertMarkdown = (markdownSyntax, wrap = true) => {
    const textarea = document.getElementById('editor');
    const startPos = textarea.selectionStart;
    const endPos = textarea.selectionEnd;
    const textBefore = input.substring(0, startPos);
    const textAfter = input.substring(endPos);
    const selectedText = input.substring(startPos, endPos);

    let newText;
    if (wrap) {
      newText = textBefore + markdownSyntax + selectedText + markdownSyntax + textAfter;
    } else {
      newText = textBefore + markdownSyntax + selectedText + textAfter;
    }

    setInput(newText);
  };

  return (
    <Container fluid className="appWrapper">
      <h1 className="mt-4">Markdown Previewer</h1>
      <p>Type Git flavored markdown in the editor and watch it render in real time</p>
      
      {/* Toolbar */}
      <div className="toolbar">
        <ButtonGroup className="mb-3">
          <Button variant="secondary" onClick={handleSubmit}>Reset</Button>
          {/* Conditionally render the viewToggle button */}
          {!isMobileView && (
            <Button variant="secondary" onClick={handleViewToggle}>
              {viewMode === 'side-by-side' ? 'Stack View' : 'Side-by-Side View'}
            </Button>
          )}
        </ButtonGroup>
      </div>

      {/* Editor and Previewer */}
      <Row>
        {viewMode === 'side-by-side' ? (
          <>
            <Col md={6} xs={12}>
              <div className="editor-wrapper">
                <h2>Editor</h2>
                <textarea
                  id='editor'
                  onChange={handleChange}
                  value={input}
                ></textarea>
              </div>
            </Col>
            <Col md={6} xs={12}>
              <div className="preview-wrapper">
                <h2>Previewer</h2>
                <Previewer textInput={input} />
              </div>
            </Col>
          </>
        ) : (
          <>
            <Col md={12} xs={12}>
              <div className="editor-wrapper">
                <h2>Editor</h2>
                <textarea
                  id='editor'
                  onChange={handleChange}
                  value={input}
                ></textarea>
              </div>
            </Col>
            <Col md={12} xs={12}>
              <div className="preview-wrapper">
                <h2>Previewer</h2>
                <Previewer textInput={input} />
              </div>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};

export default App;
