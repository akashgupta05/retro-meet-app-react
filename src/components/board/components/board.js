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
    const { destination, source, draggableId, combine } = result;
    let lists = this.state.lists;
    const sourceColumn = this.state.lists.filter(list => {
      return list.id === source.droppableId;
    });

    const cards = Array.from(sourceColumn[0].cards);
    const sourceCard = cards[source.index];

    let a = {
      draggableId: "card-3",
      type: "DEFAULT",
      source: { index: 1, droppableId: "list-1" },
      reason: "DROP",
      mode: "FLUID",
      destination: null,
      combine: { draggableId: "card-2", droppableId: "list-1" }
    };
    if (result.combine) {
      console.log(JSON.stringify(result));
      this.state.lists.map((list, index) => {
        if (list.id === source.droppableId) {
          lists[index].cards.splice(source.index, 1);
        }
        if (list.id === combine.droppableId) {
          let cardIndex;
          list.cards.map((card, index) => {
            if (card.id === combine.draggableId) {
              cardIndex = index;
            }
          });
          lists[index].cards[cardIndex].content +=
            "---" + sourceCard.content;
        }
      });
    } else {
      if (!destination) {
        return;
      }
      if (
        destination.droppableId === source.droppableId &&
        destination.index === source.index
      ) {
        return;
      }

      this.state.lists.map((list, index) => {
        if (list.id === source.droppableId) {
          lists[index].cards.splice(source.index, 1);
        }
        if (list.id === destination.droppableId) {
          lists[index].cards.splice(destination.index, 0, sourceCard);
        }
      });
    }
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
