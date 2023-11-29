import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MerchDet from "./components/MerchDet";
import Navbar from "./components/Navbar.jsx";
import AddMerch from "./components/AddMerch";
import AllMerch from "./components/AllMerch";
import Home from "./components/Home";
import axios from "axios";

import { useEffect } from "react";

const App = () => {
  const [data, setData] = useState([]);
  const [vieww, setVieww] = useState(false);

  const handleView = () => {
    setVieww(!vieww);
  };

  const fetchData = () => {
    axios
      .get("http://localhost:8080/api/merch")
      .then((results) => {
        setData(results.data);
        console.log(results.data);
      })
      .catch((err) => console.log(err));
  };

  const updateMerch = async (id, body) => {
    console.log(body, "body");
    console.log(id, "id");

    axios
      .put(`http://localhost:8080/api/merch/${id}`, body)
      .then((results) => {
        console.log(results.data);
      })
      .catch((err) => console.log(err));
  };
  const deleteMerch = async (id) => {
    axios
      .delete(`http://localhost:8080/api/merch/${id}`)
      .then((results) => {
        results.send("deleted");
      })
      .catch((err) => console.log(err));
  };
  const  handleFilter = (query)=>{
    console.log(query)
// var neww = data.filter((e=>{
// return  e.merchname.includes(query) 
// }))
// setData(neww)
  }

  useEffect(() => {
    fetchData();
  }, []);
  return (
    <BrowserRouter>
      <Navbar />
    
      <Routes>
        <Route path="/home" element={<Home data={data} />} />
        <Route
          path="/get"
          element={<AllMerch updateMerch={updateMerch} deleteMerch={deleteMerch} data={data} />}
        />
        {/* <Route path="/home" element={<Home data={data}/>} /> */}
        <Route path="/getOne/:id" element={<MerchDet data={data} />} />
        <Route
          path="/AddMerch"
          element={<AddMerch handleView={handleView} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
