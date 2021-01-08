import React, { Component } from "react";
import { Card, CardImg, CardBody,CardTitle, CardText } from 'reactstrap';

class DishDetail extends Component {

  renderDish(dish) {
    return (
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    )
  }

  renderComments(comments) {
    const dateFormat = {
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    }

    return (
      <div>
        <h4>Comments</h4>
        <ul className="list-unstyled">
          {comments.map(comment => {
            return (
              <li>
                <p>{comment.comment}</p>
                <p>--{comment.author}, {new Intl.DateTimeFormat('en-US', dateFormat).format(new Date(Date.parse(comment.date)))}</p>
              </li>
            )
          } 
          )}
        </ul>
      </div>
    )
  }

  render() {
    const dish = this.props.dish;
    
    return (
      <article className="container">
        <section className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(dish)}
          </div>

          <div className="col-12 col-md-5 m-1">
            {this.renderComments(dish.comments)}
          </div>
        </section>
      </article>
    )
  }
}

export default DishDetail;