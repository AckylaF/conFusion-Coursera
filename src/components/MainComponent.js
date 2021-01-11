import React, { Component } from 'react';
import Header from './Header';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import Footer from './Footer';

import { dishes } from '../shared/dishes';

 
class Main extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dishes: dishes,
      selectedDish: null
    }
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId });
  }

  render(){
    return (
      <div className="app">
        <Header />
        <Menu dishes={[...this.state.dishes]} onDishSelect={dishId => this.onDishSelect(dishId)} />
        {this.state.selectedDish !== null ? 
          <DishDetail dish={this.state.dishes.filter(dish => dish.id === this.state.selectedDish)[0]} />
        : <div></div>
        }
        <Footer />
      </div>
    );
  }
}

export default Main;
