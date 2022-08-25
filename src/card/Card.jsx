import React from 'react'
import { AiFillStar } from "react-icons/ai";
import "./card.css"
const Card = (props) => {

  const getRatingVisual = ()=>{
    const rating = []
    for(let i = 0; i < Math.round(props.rating); i++){
      rating.push(<span><AiFillStar/></span>);
    }
    return rating;
  }

  return (
    <div key={props.id} className="card " style={{width:"18rem"}}>
      <img src={props.img} alt="Restaurant" className="card-img-top" height="200px"/>
      <div className="card-body">
        <h5 className="card-title">{props.name},<span className="badge text-bg-secondary">{props.location}</span></h5>
        <h6>Eta: {props.eta} minutes</h6>
        {/* rating */}
        <div className="d-flex align-items-center">
          <h6 className="my-2 me-1">Rating:</h6>
          <div className="starContainer">
            {getRatingVisual()}
          </div>
        </div>
        {/* tags  */}
        <div>
          {/* <span className="p-1 m-1 badge text-bg-light">Veg</span> */}
          {props.tags.map((tags)=>{
            return <span className="p-1 m-1 badge text-bg-light">{tags}</span>
          })}
          <a href="#" className="d-block mb-2 mt-3  btn btn-primary btn-lg" role="button">Visit</a>
        </div>
      </div>
    </div>
  )
}

export default Card