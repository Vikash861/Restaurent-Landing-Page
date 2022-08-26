import React from 'react';
import {useState} from 'react';
import resData from './data/restaurant_data'
import"./index.css"
import Sort from "./sortbar/Sort"
import Navbar from "./navbar/Navbar";
import GenerateCard from "./generateview/generateView"
import search from "./functions/search.js"
import sort from "./functions/sort.js"
import filter from "./functions/filter.js"


const App = ()=>{
	const [data,setData] = useState(resData);
	
	// searching implementation
	const getSearchValue = (value)=>{
		setData(search(value))
	}
	// sorting ans filtering implementaion
	const sortingAndFiltering =(value)=>{
		if(typeof(value) === "number"){
			setData(sort(value))
		}
		else if(typeof(value) === "string"){
			setData(filter(value))
		}
		else{
			setData(resData)
		}

	}

	return(
		<div>
			<Navbar onChange={getSearchValue}/>
			<Sort onClick={sortingAndFiltering}/>
			<GenerateCard data={data}/>

		</div>
	)
}

export default App