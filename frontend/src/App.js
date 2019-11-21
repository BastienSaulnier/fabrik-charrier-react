import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/pages/Home";
import Products from "./components/pages/Products";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";
import { Switch, Route } from "react-router-dom";
import "./App.scss";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <NavBar />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/products" component={Products} />
          <Route path="/portfolio" component={Portfolio} />
          <Route path="/contact" component={Contact} />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;
