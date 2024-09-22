import Button from "../Button";
import "./Recommended.css";

const Recommended = ({ handleClick }) => {
  return (
    <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <Button onClickHandler={handleClick} value="" title="All Products" />
          <Button onClickHandler={handleClick} value="homedecors" title="Popular Professional" />
          <Button onClickHandler={handleClick} value="painters" title="Interior Designers" />
          <Button onClickHandler={handleClick} value="plumbing" title="Plumbing" />
          <Button onClickHandler={handleClick} value="kitchendecors" title="Kitchen & Bathroom Designers" />
        </div>
      </div>
    </>
  );
};

export default Recommended;
