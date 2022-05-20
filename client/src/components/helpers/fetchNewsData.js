import axios from "axios"

const getNewsData = async (API_OBJECT) => {
    const { data } = await axios.request(API_OBJECT);
    // console.log(data)
    return data;
    
} 

export default getNewsData;