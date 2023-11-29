import React, { useState } from "react";

const MerchDet = ({ data,updateMerch,deleteMerch }) => {
  console.log(updateMerch );
  
  const [view, setView] = useState(false)
  const [merchId,setMerchId] = useState('')
  const [input,setinput] = useState('')
  console.log(data.id_merch)
  return (
    // <div>
    //   <img onClick={() => setView(!view)} src={data.pictureurl} />
    //   <p>{data.modelname}</p>
    //   {view && <p>{data.category}</p>}
    //   {view && <p>{data.fabric}</p>}
    //   {view && <p>{data.category}</p>}
    //   <p>{data.price}</p>
    // </div>

    <div className="card" style={{ width: "18rem" }}>
      <img
        onClick={() => {
          setView(!view);
          setMerchId(data.id_merch);
          console.log(merchId);
        }}
        src={data.pictureurl}
      />
      <div className="card-body">
        <h5 className="card-title">{data.modelname}</h5>
        <p className="card-text">{data.price} TD</p>
        <p className="card-text">
          {view && <p> fabric: {data.fabric}</p>}
          {view && <p>{data.category}</p>}
          {view && <input onChange={(e)=>setinput(e.target.value)}  placeholder="enter new Price $ "></input>}
          {view && <button className="btn btn-primary" onClick={()=>{
            updateMerch(data.id_merch,{
              price : input
            } )
          }}>Update</button>}
          {view && <button className="btn btn-danger" onClick={()=>deleteMerch(data.id_merch)}>Delete</button>}
        </p>
        <a href="#" className="btn btn-success">
          Order Now !!
        </a>
      </div>
    </div>
  );
};

export default MerchDet;
