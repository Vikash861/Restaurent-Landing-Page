import React from 'react'
import "./navbar.css"

const Navbar = (props) => {    

    const handleChange = (event)=>{
        props.onChange(event.target.value)
    }

    return (
            <nav className="navbar py-2 justify-content-between">
                <a className="ms-3 navbar-brand">Air Restaurant</a>
                <form className=" ms-2 d-flex gap-2 me-2 form-inline">
                    <input className="form-control mr-sm-2" type="search" onChange={handleChange} placeholder="Search" aria-label="Search"/>
                        {/* <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
                </form>
            </nav>
    )
}

export default Navbar


