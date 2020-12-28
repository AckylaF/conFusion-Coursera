import React, { Component } from "react";
import { Card, CardImg, CardBody,CardTitle, CardText } from 'reactstrap';


class DishDetail extends Component {

  renderDish(dish) {
    if(dish !== null) {
      return (
        <Card>
          <CardImg width="100%" object src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      )
    } else {
      return <div></div>
    }
  }

  renderComments(comments) {
    if(comments !== null) {
      return (
        <div>
          <h4>Comments</h4>
          <ul className="list-unstyled">
            {comments.map(comment => {
              return (
                <li>
                  <p>{comment.comment}</p>
                  <p>--{` ${comment.author}, ${comment.date}`}</p>
                </li>
              )
            } 
            )}
          </ul>
        </div>
      )
    } else {
      return <div></div>
    }
  }


  render() {
    const dish = this.props.dish;
    
    return (
      <div className="row">
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(dish)}
        </div>

        <div className="col-12 col-md-5 m-1">
          {this.renderComments(dish.comments)}
        </div>
      </div>
    )
  }
}

export default DishDetail;