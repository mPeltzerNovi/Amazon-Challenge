import React from 'react';
import './App.css';
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";

function App() {
  //BEM
  return (
      <Router>
        <div className="App">
            <Header /> {/*Zo blijft de Header altijd staan, welke pagina je bent ook*/}
            <Switch>
                <Route path="/checkout">
                    <Checkout />
                </Route>
                <Route path="/">
                    <Home />
                </Route>

            </Switch>
        </div>
      </Router>
  );
}

export default App;