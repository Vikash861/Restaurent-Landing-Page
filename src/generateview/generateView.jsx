import React from 'react'
import Card from '../card/Card'
import "./generateview.css";
const generateView = (props) => {

    return (
        <div className="container">
                {
                    props.data.map((data) => {
                        return  <div>
                            <Card img={data.image} name={data.name} eta={data.eta} id={data.id} rating={data.rating} tags={data.tags} />
                        </div>
                    })
                }
        </div>
    )
}

export default generateView