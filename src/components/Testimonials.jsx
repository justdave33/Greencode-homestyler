import React, { useState } from "react";
import "./components.css"; 
import person1 from '../assets/imagefolder/person1.jpg';
import person2 from '../assets/imagefolder/person2.jpg';
import person3 from '../assets/imagefolder/person3.jpg';



const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const testimonials = [
    {
      description:
        "This company completely transformed my home with their innovative modern design solutions. From start to finish, their attention to detail and creativity were exceptional. The result exceeded my expectations, creating a space that is not only stylish but also functional and tailored to my personal taste. I couldn’t be happier with the outcome and highly recommend their services to anyone looking to elevate their living space.",
      image: person1, 
      name: "John Doe",
      profession: "Interior Designer",
    },
    {
      description:
        
"The team is incredibly professional, displaying a high level of expertise and dedication throughout the entire project. Their creativity is truly outstanding, bringing fresh and innovative ideas to the table that perfectly matched my vision. They were attentive to every detail and made the process smooth and enjoyable. I couldn’t be more pleased with the final result, and I highly recommend them to anyone seeking top-notch design and service.",
image: person2, 
name: "Jane Smith",
      profession: "Architect",
    },
    {
      description:
        "Amazing service and exceptional attention to detail. From the initial consultation to the final touches the team exceeded all my expectations. They transformed my home with a blend of creativity and precision making every corner look stunning. My home has never looked better, and I couldn't be more thrilled with the results!",
        image: person3, 
        name: "Emily Johnson",
      profession: "Homeowner",
    },
  ];

  // Function to go to the next testimonial
  const nextTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  // Function to go to the previous testimonial
  const prevTestimonial = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="testimonial-section">
         <h2 className="testimonialText">Testimonials</h2>
      <div className="testimonial-slider container">
        <div
          className="testimonial-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {testimonials.map((item, index) => (
            <div key={index} className="testimonial-item">
              <p className="testimonial-description">{item.description}</p>
              <img
                src={item.image}
                alt={item.name}
                className="testimonial-image"
              />
              <h3>{item.name}</h3>
              <p className="testimonial-profession">{item.profession}</p>
            </div>
          ))}
        </div>
        <div className="testimonial-controls">
          <div className="arrow left-arrow" onClick={prevTestimonial}>
            &lt;
          </div>
          <div className="arrow right-arrow" onClick={nextTestimonial}>
            &gt;
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
