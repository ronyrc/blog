import React, { Component } from 'react'
import {
  Card,
  CardBody,
  CardTitle,
  CardText,
  Button
} from "reactstrap";
import { NavLink } from "react-router-dom";
import faker from "faker";
export default class Post extends Component {

  render() {
    const post = this.props.post
    if (!post) return 
    return <Card>
        <CardBody>
          <CardTitle>{post.title}</CardTitle>
          <CardText>{post.body}</CardText>
          <Button tag={NavLink} to={"/posts/" + faker.helpers.slugify(post.title) + "/edit"}>
            {post.title}
        </Button>
        </CardBody>
      </Card>;
  }
}
