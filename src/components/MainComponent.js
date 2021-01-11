import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Header from './Header';
import Home from './Home';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './Footer';

import { dishes } from '../shared/dishes';

 
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishes
    }
  }

  render(){
    return (
      <div className="app">
        <Header />
        <Switch>
          <Route path="/home" component={Home} />
          <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default Main;
