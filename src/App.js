import React, { Component } from 'react';
import './App.css';
import PostsContainer from './containers/PostsContainer';
import Home from './containers/Home';
import About from './containers/About';
import { Route, NavLink as NavLinkRouter, Switch } from 'react-router-dom';
import { Container, Nav, NavLink } from "reactstrap";

const MenuBar = ({ match }) => {
  
  return <Nav>
      <NavLink tag={NavLinkRouter} exact to="/" activeStyle={{ fontWeight: "bold", color: "red" }}>
        Home
      </NavLink>
      <NavLink tag={NavLinkRouter}  to="/posts" activeStyle={{ fontWeight: "bold", color: "red" }}>
        Posts
      </NavLink>
      <NavLink tag={NavLinkRouter}  to="/about" activeStyle={{ fontWeight: "bold", color: "red" }}>
        About
      </NavLink>
    </Nav>;
};

const NoMatch = ({ location }) => (
  <div>
    <h3>
      No match for <code>{location.pathname}</code>
    </h3>
  </div>
);

class App extends Component {
  render() {
    return <div className="App">
        <Container>
          <MenuBar />
          <Switch>
            <Route path="/posts" component={PostsContainer} />
            <Route path="/about" component={About} />
            <Route exact path="/" component={Home} />
            <Route exact component={NoMatch} />
          </Switch>
        </Container>
      </div>;
  }
}

export default App;
