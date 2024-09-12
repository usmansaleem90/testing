import React, { Component } from 'react'
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Shawls extends Component {
  render() {
    return (
      <div>
         <Container className="mt-2">
          <img src="./pics/banner4.jpg" alt="" width="100%" />
        </Container>
        <Container className="mt-3">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/shawl">Shawls</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    )
  }
}
