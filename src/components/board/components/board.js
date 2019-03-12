import React, { Component } from "react";
import List from "../../list/components/list";
import { connect } from "react-redux";
import { DragDropContext } from "react-beautiful-dnd";

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lists: this.props.lists
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // TODO merging of cards
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }
    debugger;
    let lists = this.state.lists;
    const sourceColumn = this.state.lists.filter(list => {
      return list.id === source.droppableId;
    });

    const cards = Array.from(sourceColumn[0].cards);
    const destCard = cards[source.index];
    this.state.lists.map((list, index) => {
      if (list.id === source.droppableId) {
        lists[index].cards.splice(source.index, 1);
      }
      if (list.id === destination.droppableId) {
        lists[index].cards.splice(destination.index, 0, destCard);
      }
    });
    this.setState({
      lists
    });
  }

  render() {
    const { lists } = this.state;
    return (
      <React.Fragment>
        <h2>Retro meet app</h2>
        <div style={style.listsContainer}>
          <DragDropContext onDragEnd={this.onDragEnd}>
            {this.props.children}

            {lists.map(list => (
              <List
                key={list.id}
                title={list.title}
                id={list.id}
                cards={list.cards}
              />
            ))}
          </DragDropContext>
        </div>
      </React.Fragment>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists
});

const style = {
  listsContainer: {
    display: "flex",
    flexDirection: "row"
  }
};

export default connect(mapStateToProps)(Board);
