import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Menu from './MenuComponent';
import Contact from './Contact';
import DishDetail from './DishDetailComponent';
import Footer from './Footer';

import { dishes } from '../shared/dishes';
import { comments } from '../shared/comments';
import { promotions } from '../shared/promotions';
import { leaders } from '../shared/leaders';


class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes,
      comments,
      promotions,
      leaders
    }
  }

  render(){
    const HomePage = () => {
      return (
        <Home 
          dish={this.state.dishes.filter(dish => dish.featured)[0]} 
          promotion={this.state.promotions.filter(promotion => promotion.featured)[0]}
          leader={this.state.leaders.filter(leader => leader.featured)[0]}
        />
      ) 
    };


    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Route exact path="/contactus" component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
