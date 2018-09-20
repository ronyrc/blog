import React, { Component } from 'react';
import './App.css';
import { Button, Container } from "reactstrap";

const MenuBar = ({ match }) => {
  
  return ;
};

const Home = () => <h1>Home</h1>;
const Posts = () => <h1>Posts</h1>;
const About = () => <h1>About</h1>;

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: "home"
    }
  }
  render() {
    const { page } = this.state
    return <div className="App">
      <Container>
        <div>
          <Button onClick={() => this.setState({ page: "home" })} color="link">
            Home
          </Button>
          <Button onClick={() => this.setState({ page: "posts" })} color="link">
            Posts
          </Button>
          <Button onClick={() => this.setState({ page: "about" })} color="link">
            About
          </Button>
        </div>
        {page === "home" && <Home />}
        {page === "posts" && <Posts />}
        {page === "about" && <About />}
      </Container>
    </div>;
  }
}

export default App;
