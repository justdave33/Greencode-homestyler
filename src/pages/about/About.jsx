import React from "react";
import "./about.css";
import { FaClock, FaHeadphones, FaHouse } from "react-icons/fa6";
import { FaTools } from "react-icons/fa";
import Footer from "../../components/Footer"
import Testimonials from "../../components/Testimonials"

function About() {
  return (
    <>
      <div className="Header">
        <div className="about">
          <h2 className="sub-header">About Us</h2>
          <br/>
          <p>Transforming ordinary spaces into stunning works of art, where every detail is thoughtfully designed to inspire and captivate. </p>
          <div className="button-container">
            <br/>
          </div>
        </div>
      </div>
      <div className="body">
        <div className="top-container">
          <div>
            <h2>Why Choose Us</h2>
            <p>
              We craft spaces that truly reflect your style and needs, combining
              <br />
              creativity with practical solutions to achieve a perfect balance
              of
              <br />
              beauty and function
            </p>
            <hr />
          </div>
          <div className="couch"></div>
        </div>
        <div className="body2">
          <div className="services-container">
            <div className="row1">
              <div>
                <FaHouse className="icon"/>
                <h3>Personal Design</h3>
                <p>
                  From color schemes to furniture
                  <br />
                  choices, we tailor every detail to
                  <br />
                  create a space that truly feels
                  <br />
                  like yours
                </p>
              </div>
              <div>
                <FaClock className="icon"/>
                <h3>End To End Services</h3>
                <p>
                  We manage every phase of your
                  <br />
                  project with seamless
                  <br />
                  coordination for a smooth,
                  <br />
                  stress-free experience.
                </p>
              </div>
            </div>
            <div className="row1">
              <div>
                <FaTools className="icon"/>
                <h3>Expert Craftsmanship</h3>
                <p>
                  Our team is dedicated to the
                  <br />
                  highest standards of quality and
                  <br />
                  precision guaranteeing
                  <br />
                  durability and elegance.
                </p>
              </div>
              <div>
                <FaHeadphones className="icon"/>
                <h3>24/7 Support</h3>
                <p>
                  Our team is dedicated to the
                  <br />
                  highest standards of quality and
                  <br />
                  precision guaranteeing
                  <br />
                  durability and elegance.
                </p>
              </div>
            </div>
          </div>
          <div>
            <div className="body2-image"></div>
          </div>
        </div>
      </div>
      <div className="section2">
        <h2>MEET OUR TEAM</h2>
        <div className="name-row">
        <div className="row">
          <div className="pic1"></div>
          <h4>TEAM LEADER</h4>
          <p>OLUCHI</p>
        </div>
        <div className="row">
          <div className="pic2"></div>
          <h4>TEAM ARCHITECTS</h4>
          <p>VICTORIA & MIRIAM</p>
        </div>
        <div className="row">
          <div className="pic3"></div>
          <h4>PROJECT MANAGERS</h4>
          <p>PRAISE, DAVID, OLUCHI & DOLLARS</p>
        </div>
        </div>
      </div>
      <Testimonials />
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <br/>
      <Footer />
    </>
  );
}

export default About;
