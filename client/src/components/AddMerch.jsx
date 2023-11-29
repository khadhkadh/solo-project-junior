import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const AddMerch = ({ handleView }) => {
  const [category, setCategory] = useState("");
  const [fabric, setFabric] = useState("");
  const [price, setPrice] = useState("");
  const [rating, setRating] = useState("");
  const [color, setColor] = useState("");
  const [modelname, setModelname] = useState("");
  const [pictureurl, setPictureurl] = useState("");
  const navigate = useNavigate();
  const handleAddMerch = async () => {
    try {
      await axios.post(
        "http://localhost:8080/api/merch/add",
        {
          category: category,
          fabric: fabric,
          price: price,
          rating: rating,
          color: color,
          modelname: modelname,
          pictureurl: pictureurl,
        },
        navigate("/get")
      );
    } catch (err) {
      throw err;
    }
  };
  return (
    <>
      <div className="container">

    
      <input
        className="form-control  mb-4"
        type="text"
        value={fabric}
        onChange={(e) => setFabric(e.target.value)}
        placeholder="Enter fabric"
      />
      <input
        className="form-control  mb-4"
        type="text"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        placeholder="Enter category"
      />
      <input
        className="form-control  mb-4"
        type="text"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
        placeholder="Enter price"
      />

      <input
        className="form-control  mb-4"
        type="text"
        value={rating}
        onChange={(e) => setRating(e.target.value)}
        placeholder="Enter rating"
      />

      <input
        className="form-control  mb-4"
        type="text"
        value={color}
        onChange={(e) => setColor(e.target.value)}
        placeholder="Enter color"
      />

      <input
        className="form-control  mb-4"
        type="text"
        value={modelname}
        onChange={(e) => setModelname(e.target.value)}
        placeholder="Enter model name"
      />

      <input
        className="form-control  mb-4"
        type="text"
        value={pictureurl}
        onChange={(e) => setPictureurl(e.target.value)}
        placeholder="Enter picture URL"
      />
      <div className="d-grid gap-2">

      <button className="btn btn-primary mx-4" onClick={handleAddMerch}>Add Merch</button>
      </div>
      </div>
    </>
  );
};

export default AddMerch;
