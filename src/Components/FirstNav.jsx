import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
export default class FirstNav extends Component {
  render() {
    return (
      <>
        <Container fluid className="bg-light p-2">
         <Container>
         <Row>
            <Col className="d-flex justify-content-end">
              <a className="me-3" style={{fontSize:'12px',color:'#222'}}>Help</a>
              <a className="me-3" style={{fontSize:'12px',color:'#222'}}>Track Your Order</a>
              <a style={{fontSize:'12px',color:'#222'}}>+92-42-32500955</a>
            </Col>
          </Row>
         </Container>
        </Container>
      </>
    );
  }
}
