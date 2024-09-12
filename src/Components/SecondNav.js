import React, { Component } from "react";
import { Container, Nav, Navbar} from "react-bootstrap";
import "./SecondNav.css";
import { Bag, Person, Search } from "react-bootstrap-icons";
import { Link } from "react-router-dom";
import { Data } from "../Data/Data";
export default class SecondNav extends Component {
  render() {
    return (
      <div>
        <Navbar collapseOnSelect expand="lg" bg="white">
          <Container className="pb-3 ">
            
            <Link to="/">
            <i className="fs-1 text-dark">Bareezé</i>
            </Link>
            
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto mt-2 ms-3 custom">
              <Nav.Link className="links">
                  <Link to='/newin'>{Data[0]}
                  </Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/casual'>{Data[1]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/formal'>{Data[2]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/print'>{Data[3]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/shawl'>{Data[4]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/bottom'>{Data[5]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/breeze'>{Data[6]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='/look'>{Data[7]}</Link>
              </Nav.Link>
              <Nav.Link className="links">
                  <Link to='sales'>{Data[8]}</Link>
              </Nav.Link>
             
              </Nav>
              <Nav>
                <Nav.Link>
                  <Search></Search>
                </Nav.Link>
                <Nav.Link>
                  <Person></Person>
                </Nav.Link>
                <Nav.Link>
                  <Bag></Bag>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    );
  }
}
