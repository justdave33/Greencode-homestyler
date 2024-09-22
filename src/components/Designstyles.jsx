import React, { useState } from 'react';
import light1 from '../assets/imagefolder/light.jpg';
import light2 from '../assets/imagefolder/light2.jpg';
import light3 from '../assets/imagefolder/light3.jpg';



const Designstyles = () => {
  const [travels, setTravels] = useState([
    {
      Title: 'Contemporary',
      description: 'Modern Interior Design Inspiration by Jordan Mitchell on Sept 15 2024Transform your home with sleek lines, minimalist décor and a clean modern aesthetic Perfect for creating a stylish clutter-free space that feels fresh and contemporary',
      img: light1,
    },
    {
      Title: 'Elegant Look',
      description: 'Creating an Elegant Home by Jordan Mitchell on Sept 27 2024 Achieve timeless elegance with luxurious fabrics, soft lighting, and classic design pieces. Perfect for adding sophistication and grace to every room, creating a warm yet refined atmosphere.',
      img: light2,
    },
    {
      Title: 'Classy',
      description: 'Achieving a Classy Home Design by Jordan Mitchell on Sept 15, 2024 Infuse your home with a touch of class through refined décor, rich textures, and polished finishes.',
      img: light3,
    },
  ]);
  return (
    <div className='designstlesHolder'>
      <div className='designTextHolder container'>
      <h1>Design Styles</h1>
      <a href="">View All Posts</a>
      </div>
       <div>
        {/* Mapping through the array */}
        <div className="shopItems1 container">
          {travels.map((item, index) => (
            <div key={index} className="shopItemContent1">
              <img src={item.img} alt={item.Title} className="shopItemImage1" />
              <h3>{item.Title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Designstyles