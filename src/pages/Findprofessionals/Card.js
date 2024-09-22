import { MdVerified } from "react-icons/md";
import Profile from "./Profile";
import { Button, Modal, Form } from "react-bootstrap";
import { useState } from "react";
import "./Card.css";

const Card = ({ img, cardImg, title, star, reviews, prevPrice, newPrice, images }) => {
  const [showModal, setShowModal] = useState(false);

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <>
      <section className="card">

        <img src={img} alt={title} className="card-img" />

        <div className="card-details">
          <h3 className="card-title"><img src={cardImg} /> {title}  <MdVerified className='verification-icon' /> </h3>
          <section className="card-reviews">
            {star} {star} {star} {star}
            <span className="total-reviews">{reviews}</span>
          </section>

          <section className="card-price">
            <div className="price">
              <del>{prevPrice}</del> {newPrice}
              <div className="bag">
                <h2>About Us</h2>
                <p>Excellence: We're dedicated to delivering exceptional results that exceed our clients' expectations.</p>

              </div>

              <Button onClick={handleShowModal}>Book Us</Button>
            </div>


          </section>


        </div>


      </section>


      <Modal
        show={showModal}
        onHide={handleCloseModal}
        className="modal_centered"
      >
        <Modal.Header className="modalhead" closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>


          <Form className="formModal" >
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">

              <Form.Control
                type="email"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            <Form.Group
              className="mb-3"
              controlId="exampleForm.ControlTextarea1"
            >

              <Form.Control className="txtarea" as="textarea" placeholder="Type Message here" rows={3} />
            </Form.Group>
          </Form>
        </Modal.Body>

        <Modal.Footer className="modalbtn">
          <Button variant="secondary" onClick={handleCloseModal}>
            Close
          </Button>
          <Button variant="primary" onClick={handleCloseModal}>
            Book Now
          </Button>
        </Modal.Footer>
      </Modal>



    </>

  );
};

export default Card;