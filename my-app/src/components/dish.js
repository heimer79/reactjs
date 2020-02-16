import React, { Component, Fragment } from "react";

//import '../styles/dish.css';

export class Flag extends Component {
    render() {
        return (
            <div>
                <h1>Bandera</h1>
            </div>
        )
    }
}
export class Ingredient extends Component {
    render() {
        return (
            <Fragment>
                <h4>Ingredientes</h4>
                <h4>Ingredientes</h4>
            </Fragment>
        )
    }
}

/*
export class Ingredient extends Component {
    render() {
        return React.createElement("h4", {}, "Ingrediente");
    }
}
*/
class Dish extends Component {
    count() {
        // const a = 3;
        // const b = 4;

        // return a * b;
    }
    render() {
        return (
            <div className="dish">
                {/* <h1>Platillo</h1> */}
                {
                    // <h1>Platillo</h1> 
                }
                <h1>Platillo</h1>
                <Ingredient />
            </div>
        )
    }

}

export default Dish;