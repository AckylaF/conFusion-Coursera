import React from "react";
import { Card, CardImg, CardBody,CardTitle, CardText, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';


export default function DishDetail({ dish, comments }) {

  const renderDish = (dish) => {
    return (
      <Card>
        <CardImg width="100%" object src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    )
  };

  const renderComments = (comments) => {
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
  };

  return (
    <article className="container">
      <section className="row">
        <Breadcrumb>
          <BreadcrumbItem><Link to="/menu">Menu</Link></BreadcrumbItem>
          <BreadcrumbItem active>{dish.name}</BreadcrumbItem>
        </Breadcrumb>
        <div className="col-12">
          <h3>{dish.name}</h3>
          
        </div>
      </section>
      <section className="row">
        <div className="col-12 col-md-5 m-1">
          {renderDish(dish)}
        </div>

        <div className="col-12 col-md-5 m-1">
          {renderComments(comments)}
        </div>
      </section>
    </article>
  )
}
