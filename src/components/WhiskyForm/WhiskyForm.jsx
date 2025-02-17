import { useState, useEffect } from "react";
import { useParams } from "react-router";

import * as whiskyService from "../../services/whiskyService";
import NavBar from "../NavBar/NavBar";
import StockImg from "../../images/StockImg.png";
import "./WhiskyForm.css";

const WhiskyForm = (props) => {
  const { whiskyId } = useParams();
  const [formData, setFormData] = useState({
    name: "",
    distillery: "",
    image: "",
    type: "",
    origin: "",
    age: "",
    flavor: "",
    hue: "",
    alcohol_content: "",
    notes: "",
  });

  const handleChange = (evt) => {
    setFormData({ ...formData, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (whiskyId) {
      props.handleUpdateWhisky(whiskyId, formData);
    } else {
      props.handleAddWhisky(formData);
    }

    setFormData({
      name: "",
      distillery: "",
      image: "",
      type: "",
      origin: "",
      age: "",
      flavor: "",
      hue: "",
      alcohol_content: "",
      notes: "",
    });
  };

  useEffect(() => {
    const fetchWhisky = async () => {
      const whiskyData = await whiskyService.show(whiskyId);
      setFormData(whiskyData.whisky);
    };
    if (whiskyId) fetchWhisky();
  }, [whiskyId]);

  return (
    <main>
      <NavBar />
      <h1 className="page-headline">
        {whiskyId ? "EDIT PAGE" : "Add A New Whisky"}
      </h1>
      <form className="form-container" onSubmit={handleSubmit}>
        <div className="img-field-container">
          <input
            className="img-input"
            type="text"
            name="image"
            id="image-input"
            value={formData.image}
            onChange={handleChange}
            placeholder="Image URL"
          />
          <div className="form-img-container">
            <img
              className="w-80 max-h-10/12 object-fill"
              src={StockImg}
              alt="filler image"
            />
          </div>
        </div>

        <div className="content-field-container">
          <div className="two-column-input-fields">
            <input
              className="category-input"
              required
              type="text"
              name="name"
              id="name-input"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
            />
            <input
              className="category-input"
              type="text"
              name="distillery"
              id="distillery-input"
              value={formData.distillery}
              onChange={handleChange}
              placeholder="Distillery"
            />
            <input
              className="category-input"
              type="text"
              name="type"
              id="type-input"
              value={formData.type}
              onChange={handleChange}
              placeholder="Type"
            />
            <input
              className="category-input"
              type="text"
              name="origin"
              id="origin-input"
              value={formData.origin}
              onChange={handleChange}
              placeholder="Country"
            />
            <input
              className="category-input"
              type="text"
              name="age"
              id="age-input"
              value={formData.age}
              onChange={handleChange}
              placeholder="Age"
            />
            <input
              className="category-input"
              type="text"
              name="alcohol_content"
              id="alcohol-content-input"
              value={formData.alcohol_content}
              onChange={handleChange}
              placeholder="Alcohol Content"
            />
            <input
              className="category-input"
              type="text"
              name="hue"
              id="hue-input"
              value={formData.hue}
              onChange={handleChange}
              placeholder="Hue"
            />
          </div>
          <div className="single-column-input-fields">
            <input
              className="flavor-input"
              type="text"
              name="flavor"
              id="flavor-input"
              value={formData.flavor}
              onChange={handleChange}
              placeholder="Flavor"
            />
            <textarea
              className="notes-input"
              type="text"
              name="notes"
              id="notes-input"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Notes"
              rows="5"
              cols="20"
            />
          </div>
          <button className="submit-button" type="submit">
            {whiskyId ? "Update Entry" : "Add New Entry"}
          </button>
        </div>
      </form>
    </main>
  );
};

export default WhiskyForm;
