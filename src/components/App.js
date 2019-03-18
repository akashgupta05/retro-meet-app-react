import React, { Component } from "react";
import Board from "./board/components/board";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: {
        isLoggedIn: false,
        user: ""
      },
      joinBoard: {
        code: "",
        error: false,
        BoardId: null,
        redirect: false
      },
      board: {
        board: {},
        users: []
      }
    };
  }
  render() {
    return (
      <div className="App">
        <Board />
      </div>
    );
  }
}

export default App;
