import React, { useState } from "react";
import "./home.css";
import Bgvideo from "../../assets/imagefolder/bg.mp4";
import Parlour from "../../assets/imagefolder/parlour.jpg";
import Bedroom from "../../assets/imagefolder/bedroom.jpg";
import Kitchen from "../../assets/imagefolder/kitchen.jpg";
import Whychoose from "../../assets/imagefolder/whychoose.jpg";
import grid from "../../assets/imagefolder/grid.jpg";
import Testimonials from "../../components/Testimonials";
import Footer from "../../components/Footer";
import { FaShuttleVan } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { CgSupport } from "react-icons/cg";
import { GiReturnArrow } from "react-icons/gi";
import { RiCheckboxCircleFill } from "react-icons/ri";
import Designstyles from "../../components/Designstyles";
import { Link } from "react-router-dom";

const Home = () => {
  const [travels, setTravels] = useState([
    {
      Title: "Living room",
      price: "$50.00",
      img: Parlour,
    },
    {
      Title: "Parlour",
      price: "$70.00",
      img: Bedroom,
    },
    {
      Title: "Kitchen",
      price: "$90.00",
      img: Kitchen,
    },
  ]);

  return (
    <div className="homepageHolder">
      <div className="backgroundPage">
        <video autoPlay loop muted className="background-video">
          <source src={Bgvideo} type="video/mp4" />
        </video>
        <div className="textHolder container">
          <h1 className="luxuryText">
            Luxury Meets Comfort: <br /> Furnish Your Dreams!
          </h1>
          <div className="subTextHolder">
            <p className="luxurySubtext">
              Discover the epitome of luxury and comfort with our exquisite
              furniture collection. Each piece is meticulously crafted using the
              finest materials and timeless designs to elevate your living
              space. Experience the joy of owning furniture that not only looks
              stunning but also feels incredible.
            </p>
          </div>
        </div>

        <div className="buttons container">
          <Link to="/product" className="shop">
            <button className="buttons">Shop Now</button>
          </Link>

          <Link to="/findprofessional" className="explore">
            <button className="buttons"> Explore </button>
          </Link>
        </div>
      </div>

      {/* Section 2 */}
      <div className="section22 container">
        <div className="textSection">
          <h1>Expertly crafted with premium materials.</h1>
          <p>
            Expertly crafted with premium materials, this product combines
            elegance and durability. Every detail reflects superior
            craftsmanship, offering a sleek, luxurious look built to last.
          </p>
          <button className="shop">Shop Now</button>
        </div>

        {/* Mapping through the array */}
        <div className="shopItems">
          {travels.map((item, index) => (
            <div key={index} className="shopItemContent">
              <img src={item.img} alt={item.Title} className="shopItemImage" />
              <h3>{item.Title}</h3>
              <p>{item.price}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Section3 */}
      <div className="whychoose container">
        <div className="leftChoose">
          <h1>Why Choose Us</h1>
          <p>
            Transform your space with our expert designs and premium materials.
            We deliver stylish, functional interiors tailored to your needs,
            ensuring exceptional quality and service every step of the way.
          </p>
          {/* Icons part */}
          <div className="iconDescription">
            <div className="icon1Holder">
              <div className="icon1">
                <div>
                  <FaShuttleVan className="iconImage" />
                </div>

                <b>Fast & Free shopping</b>
                <p>
                  Get fast, free shipping on all orders no extra cost, just
                  speedy delivery!
                </p>
              </div>
              <div className="icon1">
                <div>
                  <FiShoppingBag className="iconImage" />
                </div>

                <b>Easy to shop</b>
                <p>
                  Enjoy a smooth shopping experience with easy browsing. Find
                  what you need effortlessly!
                </p>
              </div>
            </div>

            <div className="icon2Holder">
              <div className="icon2">
                <div>
                  {" "}
                  <CgSupport className="iconImage" />
                </div>
                <b>24/7 Support</b>
                <p>
                  We're here for you anytime, day or night. Get help whenever
                  you need it with our round-the-clock support.
                </p>
              </div>
              <div className="icon2">
                <div>
                  <GiReturnArrow className="iconImage" />
                </div>

                <b>Hastle free returns</b>
                <p>
                  Return products easily with our straightforward process. No
                  stress, no fuss!just simple returns!
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="rightChoose">
          <img className="leftImage" src={Whychoose} alt="" />
        </div>
      </div>

      {/* Section 4 */}
      <div className="whychoose container">
        <div className="rightChoose">
          <img className="leftImage" src={grid} alt="" />
        </div>

        <div className="leftChoose">
          <h1>Transforming Your Space with Modern Interior Design Solutions</h1>
          <p>
            Elevate your space with our modern interior design services. We
            blend contemporary style with functionality to create stunning,
            personalized interiors that reflect your unique taste and enhance
            your living environment.
          </p>
          {/* Icons part */}
          <div className="iconDescription">
            <div className="icon1Holder">
              <div className="icon1">
                <p>
                  {" "}
                  <RiCheckboxCircleFill />
                  Tailored designs that reflect your unique style and
                  preferences.
                </p>
              </div>
              <div className="icon1">
                <p>
                  <RiCheckboxCircleFill />
                  Optimized spaces that balance functionality and beauty.
                </p>
              </div>
            </div>

            <div className="icon2Holder">
              <div className="icon2">
                <p>
                  <RiCheckboxCircleFill />
                  Sustainable solutions using high-quality, eco-friendly
                  materials.
                </p>
              </div>
              <div className="icon2">
                <p>
                  {" "}
                  <RiCheckboxCircleFill />
                  Seamless integration of modern trends and timeless elegance.
                </p>
              </div>
            </div>
            <button className="shop" style={{ width: "10em", padding: "1em" }}>
              Explore
            </button>
          </div>
        </div>
      </div>

      {/* Section 5: Testimonials */}
      <div>
        <Testimonials />
      </div>

      {/* Section 6: Testimonials */}
      <div>
        <Designstyles />
      </div>

      {/* Section7: Footer */}
      <div className="footerHolder">
        <Footer />
      </div>
    </div>
  );
};

export default Home;
