import React from "react";
import AllMerch from "./AllMerch.jsx"



const Home = ({data}) => {
  return (
    <>
    <div>
      <iframe
        width="560"
        height="315"
        src="https://www.youtube.com/embed/mhoaXqgxN_E?si=P0-8MkwX70fzGnEF"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>

    <div className="homeimg">
    <img className ="imgHome" src="https://beyandbey.com/cdn/shop/files/tst2.png?v=1694285807&width=1500"  />

    </div>
    <h1 className="title">متوفر حاليا في متجر الباي </h1>
    <div className="allmerch">
      <AllMerch data={data}/>
    </div>
   
    </>
  );
};

export default Home;
