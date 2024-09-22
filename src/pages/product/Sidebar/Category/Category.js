import "./Category.css";
import Input from "../../Input";

function Category({ handleChange }) {
  return (
    <div>
      <h2 className="sidebar-title">Category</h2>

      <div>
        <label className="sidebar-label-container">
          <input onChange={handleChange} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handleChange={handleChange}
          value="Chair"
          title="Chair"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Sofa"
          title="Sofa"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="InteriorDesings"
          title="InteriorDesings"
          name="test"
        />
        <Input
          handleChange={handleChange}
          value="Kitchen"
          title="Kitchen"
          name="test"
        />
      </div>
    </div>
  );
}

export default Category;
