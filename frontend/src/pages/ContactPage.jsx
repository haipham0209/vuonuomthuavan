import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import './ContactPage.css';

const ContactStore = () => {
  return (
    <div className="contact-store">

      {/* Hero Section */}
      <div className="hero-section text-center text-white d-flex align-items-center justify-content-center">
        <div className="overlay"></div>
        <div className="hero-content">
          <h1 className="fw-bold mb-3">Liên hệ vườn ươm Thừa Vân</h1>
          <a href="tel:0976131715" className="hero-cta">
            Gọi ngay: 039-571-4571
          </a>

        </div>
      </div>

      <Container className="py-5">

        {/* Info Cards */}
        <Row className="g-4 mb-5 justify-content-center">
          <Col md={4}>
            <Card className="info-card text-center h-100 shadow-sm border-0">
              <Card.Body>
                <i className="bi bi-geo-alt-fill info-icon mb-3"></i>
                <Card.Title className="fw-bold">Address</Card.Title>
                <Card.Text>Hiep Vinh 1, Canh Vinh, Van Canh, Binh Dinh</Card.Text>
                <a href="https://www.google.com/maps/place/13%C2%B044'10.3%22N+109%C2%B005'20.7%22E/@13.736196,109.0884473,252m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d13.736196!4d109.089091?entry=ttu&g_ep=EgoyMDI1MTExNy4wIKXMDSoASAFQAw%3D%3D" className="hero-ctb">
                  View on Map
                </a>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="info-card text-center h-100 shadow-sm border-0">
              <Card.Body>
                <i className="bi bi-telephone-fill info-icon mb-3"></i>
                <Card.Title className="fw-bold">Phone</Card.Title>
                <Card.Text>0976-131-715</Card.Text>
                <a href="tel:0976131715" className="hero-ctb">
                  Call Now: 0976-131-715
                </a>
              </Card.Body>
            </Card>
          </Col>
        </Row>

        {/* Embedded Google Map */}
        <Row className="mb-5">
          <Col>
            <div className="map-responsive">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.8953824888375!2d109.0832254!3d13.736501!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x316f118e939df8e5%3A0x920162b8af53ec8f!2sCua%20Hang%20Tap%20Hoa%20Thua%20Van!5e0!3m2!1sen!2s!4v1697500000000!5m2!1sen!2s"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                title="Vườn ươm Thừa Vân Map"
              ></iframe>
            </div>
          </Col>
        </Row>

        {/* Contact Form */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="shadow-sm border-0 p-4">
              <Card.Title className="fw-bold mb-4 text-center">Send Us a Message</Card.Title>
              <Form>
                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formName">
                      <Form.Label>
                        Your Name <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="Jack Bauer" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formEmail">
                      <Form.Label>
                        Email Address
                      </Form.Label>
                      <Form.Control type="email" placeholder="abc@gmail.com" required />
                    </Form.Group>
                  </Col>
                </Row>

                <Row className="mb-3">
                  <Col md={6}>
                    <Form.Group controlId="formPhone">
                      <Form.Label>
                        Phone Number <span className="text-danger">*</span>
                      </Form.Label>
                      <Form.Control type="text" placeholder="080-xxx-xxx" required />
                    </Form.Group>
                  </Col>
                  <Col md={6}>
                    <Form.Group controlId="formSubject">
                      <Form.Label>Subject</Form.Label>
                      <Form.Control type="text" placeholder="Title" />
                    </Form.Group>
                  </Col>
                </Row>

                <Form.Group className="mb-3" controlId="formMessage">
                  <Form.Label>
                    Your Message <span className="text-danger">*</span>
                  </Form.Label>
                  <Form.Control as="textarea" rows={5} placeholder="Question here" required />
                </Form.Group>

                <div className="text-center">
                  <Button variant="success" size="lg">Send Message</Button>
                </div>
              </Form>

            </Card>
          </Col>
        </Row>

      </Container>
    </div>
  );
};

export default ContactStore;
