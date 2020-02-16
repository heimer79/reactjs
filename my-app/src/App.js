import React from 'react';
import Header from "./components/header";
//import Dish, { Flag } from "./components/dish";
//import Dish, * as D from "./components/dish";
import Dish, { Flag, Ingredient } from "./components/dish";
import './styles/App.css';
//import './styles/dish.css';


function App() {
    return (<div className="App" >
        <Header />
        <Dish />
        <Flag />
    </div>
    );
}

export default App;