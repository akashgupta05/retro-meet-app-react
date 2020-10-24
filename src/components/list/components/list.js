import React from "react";
import { list } from "../stylesheets/listStyle.css.js";
import { Droppable } from "react-beautiful-dnd";
import CardComponent from "../../card/components/cardComponent";

class List extends React.Component {
  render() {
    const { id, title, cards } = this.props;
    return (
      <Droppable droppableId={id} isCombineEnabled={true}>
        {provided => (
          <div
            className="Cards-List"
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            <div style={list.container}>
              <h4>{title}</h4>
              {cards.map((card, index) => (
                <CardComponent
                  key={card.id}
                  content={card.content}
                  id={card.id}
                  index={index}
                />
              ))}
            </div>
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  }
}

export default List;
