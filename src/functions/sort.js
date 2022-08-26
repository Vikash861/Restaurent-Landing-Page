import data from "../data/restaurant_data"

const sort = (val) => {
    const newData = [];
    data.forEach(data => {
        if (data.eta === val) {
            newData.push(data)
        }
        else {
            if (val === Math.round(data.rating)) {
                newData.push(data);
            }
        }
    });
    if (newData.length > 0) {
        return newData;
    }
    else {
        return data;
    }
}

export default sort;