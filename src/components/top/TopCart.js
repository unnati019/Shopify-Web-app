import React from 'react';
import Tdata from "./Tdata";

const TopCart = () => {
    
  return (
    <>
      <div className="topCart">
        {Tdata.map((value,index) => {
            return(
                <div className="product" key={index}>
                    <div className="nametop d_flex">
                        <span className="tleft">{value.para}</span>
                        <span className="tright">{value.desc}</span>
                    </div>
                    <div className="img">
                        <img src={value.cover} alt=""/>
                    </div>
                </div>
            )
         })
        }
      </div>  
    </>
  )
}

export default TopCart;