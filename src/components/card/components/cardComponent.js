import React from "react";
import Card from "@material-ui/core/Card";
import Typography from "@material-ui/core/Typography";
import CardContent from "@material-ui/core/CardContent";
import { Draggable } from "react-beautiful-dnd";
import { card } from "../stylesheets/cardStyle.css.js";

class CardComponent extends React.Component {
  getContent() {
    let { content } = this.props;
    const contentList = content.split("--");
    // return contentList.map(text => <li>{text}</li>);
    return content;
  }

  render() {
    let { content } = this.props;
    let contentList = content.split("--");
    const contentData = contentList.map(text => <div>{text}<br/></div>);
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
                <Typography component="p">
                  {contentData}
                </Typography>
              </CardContent>
            </Card>
          </div>
        )}
      </Draggable>
    );
  }
}

export default CardComponent;
