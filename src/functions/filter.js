import data from "../data/restaurant_data"

const filter = (val)=>{
    const newData = [];
    data.forEach(data=>{
        const tags = data.tags;
        tags.forEach(tag=>{
            tag = tag.toLowerCase();
            val  = val.toLowerCase();
            if(val === tag){
                newData.push(data);
            }
        })
    })
    if(newData.length > 0){
        return newData;
    }
    else{
        return data;
    }
}

export default filter