import React from 'react';
import Ddata from "./Ddata";

const Dcard = () => {
  return (
    <>
        <div className="discount_deals">
            {Ddata.map((val, index) => {
                return (
                    <div className="product" key={index}>
                      <div className="box">
                        <div className="img">
                             <img src={val.cover} alt='' width='100%' />
                        </div>
                        <h4>{val.name}</h4>
                        <span>{val.price}</span>
                      </div>
                    </div> 
                )
            })}
        </div>
    </>
  )
}

export default Dcard;