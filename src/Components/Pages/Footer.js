import React, { Component } from "react";
import { Container, Row, Col, FormControl, Button, Nav } from "react-bootstrap";
import "./Footer.css";
import { info, company, connect, help } from "../../Data/FooterData";
export default class Footer extends Component {
  render() {
    return (
      <>
        <Container>
          <div className="text-center mt-5">
            <h1 className="fw-light py-2">SIGN UP AND SAVE</h1>
            <small>Signup for our newsletter</small>
          </div>
          <Row className="justify-content-center mt-5 ">
            <Col lg="5" className="mt-3">
              <FormControl
                className="form-control rounded-0"
                placeholder="Enter Your Email Address"
              />
            </Col>
            <Col lg="2" className="mt-3">
              <Button variant="outline-dark" className="form-control rounded-0">
                SUSCRIBE
              </Button>
            </Col>
          </Row>

          <Row className="mt-5">
          <Col lg="3" md="6" className="mt-3">
            <h3 className="fs-5">INFORMATION</h3>
            {
                info.map((e)=>(
              <Nav.Link className="small text-dark p-0 mt-3">{e}</Nav.Link>
                ))
            }
          </Col>
          <Col lg="3" md="6" className="mt-3">
            <h3 className="fs-5">Company</h3>
            {
                company.map((e)=>(
                    <Nav.Link className="small text-dark p-0 mt-3">{e}</Nav.Link>
                ))
            }
          </Col>
          <Col lg="3" md="6" className="mt-3">
            <h3 className="fs-5">HELP</h3>
            {
                help.map((e)=>(
                    <Nav.Link className="small text-dark p-0 mt-3">{e}</Nav.Link>
                ))
            }
          </Col>
          <Col lg="3" md="6" className="mt-3">
           <div className="ms-lg-5">
           <h3 className="fs-5">CONNECT</h3>
            {
                connect.map((e)=>(
                    <Nav.Link className="small text-dark p-0 mt-3">{e}</Nav.Link>
                ))
            }
           </div>
          </Col>
        </Row>
        </Container>
       
      </>
    );
  }
}
