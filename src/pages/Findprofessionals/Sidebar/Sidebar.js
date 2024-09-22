import { useState } from "react";
import Category from "./Category/Category";
import Price from "./Price/Price";
import "./Sidebar.css";

const Sidebar = ({ handleChange }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  return (
    <>
      <button className="hamburger1" onClick={toggleSidebar}>
        &#9776;
      </button>
      <section className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="logo-container">
          <h2 className="sidebar-h1">Hire Professionals</h2>
        </div>
        <Category handleChange={handleChange} />
        <hr />
        <Price handleChange={handleChange} />


      </section>
    </>
  );
};

export default Sidebar;
