import React from "react";
import "./Card.css";

export default function Card({ objectInfo }) {
  console.log(objectInfo);
  // const { objectInfo } = obj;

  return (
    <div className='wrapper'>
      <div className='container'>
        <div
          className='top'
          style={{
            background: `url(${objectInfo.image}) no-repeat center center`,
          }}
        ></div>
        <div className='bottom'>
          <div className='details'>
            <h2>{objectInfo.name}</h2>
            <p>{objectInfo.colorDescription}</p>
          </div>
        </div>
      </div>
      <div className='inside'>
        <div className='icon'>
          <i className='material-icons'>info_outline</i>
        </div>
        <div className='contents'>
          <h3>Origin</h3>
          <p>{objectInfo.origin}</p>
          <h3>Background</h3>
          <p>{objectInfo.description || "Information unavailable."}</p>
          <h3>Taste Description</h3>
          <p>{objectInfo.tasteDescription}</p>
        </div>
      </div>
    </div>
  );
}
