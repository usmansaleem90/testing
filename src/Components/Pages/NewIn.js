import React, { Component } from 'react'
import { Container, Breadcrumb } from "react-bootstrap";
import { Link } from "react-router-dom";
export default class NewIn extends Component {
  render() {
    return (
      <div>
         <Container className='mt-2'>
          <img src="./pics/b1.jpg" alt="" width="100%" />
        </Container>
        <Container className="mt-3">
          <Breadcrumb>
            <Breadcrumb.Item>
              <Link to="/newin">Home</Link>
            </Breadcrumb.Item>
            <Breadcrumb.Item>
              <Link to="/casual">NewIn</Link>
            </Breadcrumb.Item>
          </Breadcrumb>
        </Container>
      </div>
    )
  }
}
