import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import Add from "./Add";
import "bootstrap/dist/css/bootstrap.min.css";
function Home(Movies, setMovies) {
  return (
    <div className="home-page">
      <>
        <Navbar bg="dark" variant="dark" fixed="top">
          <Container>
            <Navbar.Brand className="title-navig" href="#home">
              Disney Classic Movies
            </Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <NavDropdown title="Movies" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Fantasy</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Musical</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Adenture</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Comedy</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  <Add Movies="movies" setMovies="setMovies" />
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contact">Contact Us</Nav.Link>
            </Nav>
            <Add Movies="movies" setMovies="setMovies" />
          </Container>
        </Navbar>
      </>
    </div>
  );
}
export default Home;
