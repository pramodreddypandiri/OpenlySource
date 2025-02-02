import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import gitIcon from "../../assets/images/github.svg";
import profile from "../../assets/images/profile.png";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./Member.css";
const Member = () => {
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <>
      <div className="heading">
        <h1>Want to become Openlysource member</h1>
        <Button color="danger" onClick={toggle}>
          Join Now
        </Button>
      </div>
      <div>
        <Modal isOpen={modal} toggle={toggle}>
          <ModalHeader toggle={toggle}>Become a member</ModalHeader>
          <ModalBody>
            <form action="" className="box">
              <div className="header">
                <img src={profile} className="header__profile" alt="" />
                <button
                  type="file"
                  id="myFile"
                  name="filename"
                  className="header__btn header__btn--primary"
                >
                  Change Image
                </button>
                <button className="header__btn header__btn--secondary">
                  Remove
                </button>
              </div>
              <div className="middle">
                <input className="input" type="text" placeholder="Name" />
                <input
                  className="input"
                  type="text"
                  placeholder="Github Link"
                />
                <textarea
                  rows="4"
                  cols="50"
                  className="input-textarea"
                  placeholder="Share your thoughts about Open-source"
                ></textarea>
              </div>
            </form>
          </ModalBody>
          <ModalFooter>
            <Button color="primary" onClick={toggle}>
              Submit
            </Button>
          </ModalFooter>
        </Modal>
      </div>
      <Carousel className="carousal" responsive={responsive}>
        <div className="carousal__card">
          <div className="carousal__header">
            <img src={profile} className="profile" alt="" />
            <h2>Member</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
        </div>
        <div className="carousal__card">
          <div className="carousal__header">
            <img src={profile} className="profile" alt="" />
            <h2>Member</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
        </div>
        <div className="carousal__card">
          <div className="carousal__header">
            <img src={profile} className="profile" alt="" />
            <h2>Member</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
        </div>
        <div className="carousal__card">
          <div className="carousal__header">
            <img src={profile} className="profile" alt="" />
            <h2>Member</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
        </div>
        <div className="carousal__card">
          <div className="carousal__header">
            <img src={profile} className="profile" alt="" />
            <h2>Member</h2>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam,
            quod. Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Quisquam, quod.
          </p>
        </div>
      </Carousel>
    </>
  );
};
export default Member;
