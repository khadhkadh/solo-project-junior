import React, { useState } from "react";
import { Link } from "react-router-dom";
import AboutUs from "./AboutUs";
const Navbar = ( ) => {
  const [input,setInput] = useState('')
  return (
    <>
      {/* <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <p className="logo">Bey&Bey</p>
        <div className="container-fluid">
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/get">Products</Link>
            </li>
            <li>
              <Link to="/AddMerch">Add Clothes</Link>
            </li>
            <li>
              <Link to="/add">
                <AboutUs />
              </Link>
            </li>
          </ul>
        </div>
      </nav> */}

      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="">
            Bey&Bey
          </a>
          <button 
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <Link
                to="/home"
                className="nav-link active"
                aria-current="page"
                href="#"
              >
                Home
              </Link>
              <Link to="/get" className="nav-link" href="#">
                Products
              </Link>
              <Link to="/AddMerch" className="nav-link" href="#">
                Add Clothes
              </Link>
              <Link to="/add" className="nav-link" href="#">
                <AboutUs />
              </Link>
              <div>
       <form class="d-flex search" role="search">
                <input
                onChange={(e)=>setInput(e.target.value)}
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit" onClick={()=>{
                 console.log('ee')
                }}>
                  Search
                </button>
              </form>
    </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
