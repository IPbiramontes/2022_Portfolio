import React from "react";
import "../App.css";
import { Container, Row, Col, Form, Button } from "react-bootstrap"; 

function AboutContact() {
    return (
        <div className="aboutContact" id="aboutContactSection" style={{ width: "100vw", height: "250vh" }}>
            <div className="scrollContent">
                <div className="parallax" >
                    <Container>
                        <Row style={{ marginLeft: "4vw", marginRight: "4vw", marginBottom: "6vh" }}>
                            <Col className="narrowImgCol" sm={5} md={5} lg={5}>
                                <div id="aboutImg" className="narrowImg2" />
                                <p>
                                    Isa Biramontes is Lorem ipsum dolor sit amet.

                                    Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices.

                                    A cras semper auctor neque vitae. Cursus risus at ultrices mi tempus imperdiet nulla.
                                </p>
                            </Col>
                            <Col className="wideImgCol" sm={7} md={7} lg={7}>
                                <Form action="https://formspree.io/f/mvoveogg" method="POST">
                                    <Form.Group className="mb-2" controlId="contactForm.ControlInput1">
                                        <h3 className="required"> Name</h3>
                                        <Form.Control type="text" name="first_name" required placeholder="First" />
                                        <Form.Control type="text" name="last_name" required placeholder="Last" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="contactForm.ControlInput1">
                                        <h3 className="required"> Pronouns </h3>
                                        <Form.Control type="text" name="pronouns" required placeholder="ex: they/them, ze/zir, he/him" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="contactForm.ControlInput1">
                                        <h3 className="required">Email</h3>
                                        <Form.Control type="email" name="_replyto" required placeholder="name@example.com" />
                                    </Form.Group>
                                    <Form.Group className="mb-2" controlId="contactForm.ControlTextarea1">
                                        <h3 className="required">Message</h3>
                                        <Form.Control as="textArea" name="message" required rows={8} />
                                    </Form.Group>
                                    <Form.Group className="mb-8" controlId="contactForm.ControlInput1">
                                        <h3>Terms of Service</h3>
                                        <p>This form is exclusively for professional inquiries. For personal inquiries, please contact them on social media.</p>
                                        {['checkbox'].map((type) => (
                                            <div key={`IAccept-${type}`} className="mb-2">
                                                <Form.Check
                                                    required
                                                    label={`I Accept`}
                                                    type={type}
                                                    id={`${type}`}
                                                />
                                            </div>
                                        ))}
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Col>
                        </Row>
                    </Container>
                </div>
            </div>
        </div>
    );
}

export default AboutContact;