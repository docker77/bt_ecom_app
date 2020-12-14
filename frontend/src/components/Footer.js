import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";

function Footer() {
  return (
    <footer>
      <Container className="">
        <Row>
          <Col className="m-2">
            <Nav
              activeKey="/home"
              onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
            >
              <Nav.Item>
                <Nav.Link href="/home">Active</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-1">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="link-2">Link</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="disabled" disabled>
                  Disabled
                </Nav.Link>
              </Nav.Item>
            </Nav>
          </Col>

          <Col className="text-center py-3">Copyright &copy; SkiShop</Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
