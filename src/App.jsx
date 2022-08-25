import React from 'react';
import data from './data/restaurant_data'
import"./index.css"
import Navbar from "./navbar/Navbar";
import Generateview from "./generateview/generateView"


const App = ()=>{

	return(
		<div>
			<Navbar/>
			<Generateview data={data}/>
		</div>
	)
}

export default App