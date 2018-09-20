import React, { Component } from 'react'
import { Container, Row, Col } from "reactstrap";
import Sidebar from '../components/Sidebar';
import Post from '../components/Post';
import { Route } from '../../../myapp-router/node_modules/react-router-dom';
import postsDb from '../db';
import faker from "faker";
import ModalForm from '../components/ModalForm';


export default class PostsContainer extends Component {
  render() {
    return <Container>
        <Row>
          <Col xs="3">
            <Route path="/posts" render={() => <Sidebar posts={postsDb} />} />
          </Col>

          <Col xs="9">
            <Route exact path="/posts" render={() => <span>
                  Selecione um post
                </span>} />

            <Route exact path="/posts/:slug" render={({ match, history }) => {
            if (match.params.slug == "new") return <ModalForm history={history}/>;
                const filtered = postsDb.filter(p => faker.helpers.slugify(p.title) === match.params.slug);
                if (filtered.length > 0) return <Post post={filtered[0]} />;
                else return <span>Post not Found</span>;
              }} />

            <Route exact path="/posts/:slug/edit" render={({ match, history }) => {
                const filtered = postsDb.filter(p => faker.helpers.slugify(p.title) === match.params.slug);
                if (filtered.length > 0) return <ModalForm history={history} post={filtered[0]} />;
                else return <span>Post not Found</span>;
              }} />
          </Col>
        </Row>
      </Container>;
  }
}
