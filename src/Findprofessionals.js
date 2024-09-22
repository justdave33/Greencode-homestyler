import { useState } from "react";
import Navigation from "./pages/Findprofessionals/Navigation/Nav";
import Products from "./pages/Findprofessionals/Products/Products";
import products from "./pages/Findprofessionals/db/data";
import Recommended from "./pages/Findprofessionals/Recommended/Recommended";
import Sidebar from "./pages/Findprofessionals/Sidebar/Sidebar";
import Card from "./pages/Findprofessionals/Card";
import "./index.css";
import Profile from "./pages/Findprofessionals/Profile";

function Findprofessionals() {

  const [selectedCategory, setSelectedCategory] = useState(null);

  // ----------- Input Filter -----------
  const [query, setQuery] = useState("");

  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = products.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );

  // ----------- Radio Filtering -----------
  const handleChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  // ------------ Button Filtering -----------
  const handleClick = (event) => {
    setSelectedCategory(event.target.value);
  };

  function filteredData(products, selected, query) {
    let filteredProducts = products;

    // Filtering Input Items
    if (query) {
      filteredProducts = filteredItems;
    }

    // Applying selected filter
    if (selected) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === selected ||
          color === selected ||
          company === selected ||
          newPrice === selected ||
          title === selected
      );
    }

    return filteredProducts.map(
      ({ img, cardImg, title, star, reviews, prevPrice, newPrice, name, images, profession, desc, skills1, skills2, skills3 }) => (
        <>
          <Card
            key={Math.random()}
            img={img}
            cardImg={cardImg}
            title={title}
            star={star}
            reviews={reviews}
            prevPrice={prevPrice}
            newPrice={newPrice}
          />
          <Profile
            name={name}
            images={images}
            profession={profession}
            desc={desc}
            skills1={skills1}
            skills2={skills2}
            skills3={skills3}
          />

        </>
      )
    );
  }

  const result = filteredData(products, selectedCategory, query);

  return (
    <>
      <Sidebar handleChange={handleChange} />
      <Navigation query={query} handleInputChange={handleInputChange} />
      <Recommended handleClick={handleClick} />
      <Products result={result} />
    </>
  );

}

export default Findprofessionals;
