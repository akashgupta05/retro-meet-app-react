import React, { Component } from "react";
import List from "../../list/components/list";
import { connect } from "react-redux";

class Board extends Component {
  render() {
    const { lists } = this.props;
    return (
      <React.Fragment>
        <h2>Retro meet app</h2>
        {lists.map(list => (
          <List title={list.title} cards={list.cards}/>
        ))}
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

export default connect(mapStateToProps(Board));
