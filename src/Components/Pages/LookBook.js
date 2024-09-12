import React, { Component } from 'react'
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class LookBook extends Component {
  render() {
    return (
      <div>
         <Container className="mt-3">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/look">LookBook</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    )
  }
}
