import React, { Component } from 'react'
import { ListGroup, ListGroupItem, Button } from "reactstrap";
import faker from "faker";
import { NavLink } from '../../../myapp-router/node_modules/react-router-dom';

export default class Sidebar extends Component {
  render() {
    return <ListGroup>
        <ListGroupItem>
        <Button tag={NavLink} exact to="/posts/new" color="primary">Novo Post</Button>
        </ListGroupItem>

        {this.props.posts.map(p => <ListGroupItem key={p.id}>
            <NavLink to={"/posts/" + faker.helpers.slugify(p.title)} activeStyle={{ fontWeight: "bold", color: "red" }}>
              {p.title}
            </NavLink>
          </ListGroupItem>)}
      </ListGroup>;
  }
}
