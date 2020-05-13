import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/homepage/Homepage";
import ShopPage from "./pages/shop/ShopPage";
import SignInSignUp from "./pages/sign-in-and-sign-up/SignInSignUp";
import Header from "./header/Header";
import { auth } from "./firebase/firebase.utills";

import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      currentUser: null,
    };
  }

  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });
      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInSignUp} />
        </Switch>
      </div>
    );
  }
}

export default App;
