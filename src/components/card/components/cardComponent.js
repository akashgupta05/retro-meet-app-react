import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import { card } from "../stylesheets/cardStyle.css.js";

class CardComponent extends React.Component {
  render() {
    const { content } = this.props;
    return (
      <Draggable draggableId={this.props.id} index={this.props.index}>
        {provided => (
          <div
            className="Container"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
          >
            <Card style={card.container}>
              <CardContent>
                <Typography component="p">{content}</Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  }
}

export default CardComponent;
