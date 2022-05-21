// import { render } from "@testing-library/react";
import React, { Component } from "react";
import { DISHES } from "../shared/dishes";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardTitle,
  Breadcrumb,
  BreadcrumbItem,
} from "reactstrap";
import { Link } from "react-router-dom";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES,
      selectedDish: null,
    };
  }

  render() {
    const menu = this.state.dishes.map((dish) => {
      return (
        <div className="col-12 col-md-5 m-1" key={dish.id}>
          <Card onClick={() => this.props.onClick(dish.id)}>
            <Link to={`/menu/${dish.id}`}>
              <CardImg width="100%" src={dish.image} alt={dish.name} />
              <CardImgOverlay>
                <CardTitle>{dish.name}</CardTitle>
              </CardImgOverlay>
            </Link>
          </Card>
        </div>
      );
    });

    function RenderMenuItem({ dish, onClick }) {
      return (
        <Card>
          {/* <Link to={`/menu/${dish.id}`}> */}
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardImgOverlay>
            <CardTitle>{dish.name}</CardTitle>
          </CardImgOverlay>
          {/* </Link> */}
        </Card>
      );
    }

    return (
      <div className="container">
        <div className="row">
          <Breadcrumb>
            <BreadcrumbItem>
              <Link to="/home">Home</Link>
            </BreadcrumbItem>
            <BreadcrumbItem active>Menu</BreadcrumbItem>
          </Breadcrumb>
          <div className="col-12">
            <h3>Menu</h3>
            <hr />
          </div>
        </div>
        <div className="row">{menu}</div>
      </div>
    );
  }
}

export default Menu;
