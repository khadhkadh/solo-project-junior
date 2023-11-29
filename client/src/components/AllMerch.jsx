import React from 'react'
import MerchDet from './MerchDet'
const AllMerch = ({data,updateMerch,deleteMerch}) => {
      
  return (
    <div className='container'>
      {data.map((merch, i )=>{
        return <MerchDet updateMerch={updateMerch} deleteMerch={deleteMerch}  data={merch} key={i}/>
      })}
    </div>
  )
}

export default AllMerch
