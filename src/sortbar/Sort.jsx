import React from 'react'
import { useState } from 'react'
import "./sort.css";
import { AiFillStar } from "react-icons/ai";
import { AiOutlineFieldTime } from "react-icons/ai"


const Sort = (props) => {
    const [sort, setSort] = useState("none");
    const [filter, setFilter] = useState("none")

    const handleClick = (value) => {
        props.onClick(value);
    }

    const showSortOption = () => {
        if (sort === "none") {
            setSort("block");
        }
        else {
            setSort("none");
        }

    }
    const showFilterOption = () => {
        if (filter === "none") {
            setFilter("block");
        }
        else {
            setFilter("none");
        }

    }

    return (
        <div className="sortBar my-2">
            <div className="sort">
                <h6 onClick={showSortOption} className="badge text-bg-primary p-2">Sort By</h6>
                <div style={{ display: sort }}>
                    <div>Rating:
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick(4) }}>4+<span style={{ color: "yellow" }}><AiFillStar /></span></li>
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick(3) }}>3+<span style={{ color: "yellow" }}><AiFillStar /></span></li>
                    </div>
                    <div>Eta:
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick(15) }}>15 <AiOutlineFieldTime /></li>
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick(20) }}>20 <AiOutlineFieldTime /></li>
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick(25) }}>25 <AiOutlineFieldTime /></li>
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick() }}>Show all</li>
                    </div>
                </div>
            </div>
            <div className="filter">
                <h6 className="badge text-bg-primary p-2" onClick={showFilterOption}>Filter By</h6>
                <div style={{ display: filter }}>
                    <div>Tags:
                        <li className="badge text-bg-success p-1" onClick={() => { handleClick("veg") }}>Veg</li>
                        <li className="badge text-bg-danger p-1" onClick={() => { handleClick("non veg") }}>Non-Veg</li>
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick("healthy") }}>Healthy</li>
                        <li className="badge text-bg-light p-1" onClick={() => { handleClick("") }}>Show all</li>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Sort