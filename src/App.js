import React from "react";

class App extends React.Component {
  state = { language: "english" };

  onLanguageChange = language => {
    this.setState({ language });
  };

  render() {
    return (
      <div className="ui container">
        <div>
          Select a language:
          <i
            className="flag ca"
            onClick={() => this.onLanguageChange("english")}
          />
          <i
            className="flag jp"
            onClick={() => this.onLanguageChange("japanese")}
          />
        </div>
        {this.state.language}
      </div>
    );
  }
}

export default App;