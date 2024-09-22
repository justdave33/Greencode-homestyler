import Button from "../Button";
import "../Recommended/Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">All products</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="Chair" title="Chair" />
          <Button onClickHandler={handleClick} value="Sofa" title="Sofa" />
          <Button onClickHandler={handleClick} value="InteriorDesings" title="InteriorDesings" />
          <Button onClickHandler={handleClick} value="Kitchen" title="Kitchen" />



          
        </div>
      </div>
    </>
  );
};

export default Recommended;
