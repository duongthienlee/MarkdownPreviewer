import React, { Component } from "react";
import "./App.css";

const marked = require("marked");

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      markdown:
        "Heading\n=======\n\nSub-heading\n-----------\n \n### Another deeper heading\n \nParagraphs are separated\nby a blank line.\n\nLeave 2 spaces at the end of a line to do a  \nline break\n\nText attributes *italic*, **bold**, \n`monospace`, ~~strikethrough~~ .\n\nShopping list:\n\n  * apples\n  * oranges\n  * pears\n\nNumbered list:\n\n  1. apples\n  2. oranges\n  3. pears\n\nThe rain---not the reign---in\nSpain.\n\n *[Herman Fassett](https://freecodecamp.com/hermanfassett)*"
    };
  }

  updateMarkdown = event => {
    this.setState({ markdown: event.target.value });
  };
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col">
            <form>
              <div className="form-group">
                <textarea
                  rows="22"
                  type="text"
                  ref="inputValue"
                  value={this.state.markdown}
                  onChange={this.updateMarkdown}
                  className="form-control"
                />
              </div>
            </form>
          </div>
          <div className="col">
            <div
              dangerouslySetInnerHTML={{ __html: marked(this.state.markdown) }}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
