import React, { Component } from 'react'
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class Bottom extends Component {
  render() {
    return (
      <div>  <Container className="mt-3">
      <Breadcrumb>
        <Breadcrumb.Item>
          <Link to="/">Home</Link>
        </Breadcrumb.Item>
        <Breadcrumb.Item>
          <Link to="/bottom">Bottom</Link>
        </Breadcrumb.Item>
      </Breadcrumb>
    </Container></div>
    )
  }
}
