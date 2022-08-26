import data from "../data/restaurant_data"

const search = (value)=>{
    let newData = [];
    for(let i = 0; i < data.length; i++) {
        let name = data[i].name;
        name = name.toLowerCase();
        if(name.indexOf(value.toLowerCase()) > -1) {
            newData.push(data[i])
        }
    }
    if(newData.length>0){
        return newData;
    }
    else{
        return data;
    }
}

export default search