import React, { Component } from "react";
import "./App.css";
import FormGroup from "react-bootstrap/lib/FormGroup";
import FormControl from "react-bootstrap/lib/FormControl";

const marked = require("marked");

class App extends Component {
  state = {
    markdown:
      "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
  };
  updateMarkdown = event => {
    this.setState({ markdown: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <FormGroup controlId="formControlsTextarea">
              <FormControl
                componentClass="textarea"
                placeholder="Enter Markdown"
                value={this.state.markdown}
                onChange={this.updateMarkdown}
              >
                {""}
              </FormControl>
            </FormGroup>
          </div>
          <div className="col">
            <div dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
