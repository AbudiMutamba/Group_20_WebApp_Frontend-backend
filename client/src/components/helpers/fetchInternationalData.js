import axios from "axios"

    const getInterData =  async () => {
        const API_URL = `${process.env.REACT_APP_API_NEWS_URL}?apikey=${process.env.REACT_APP_API_NEWS_KEY}`
        // console.log(API_URL)
        let response = ''

        try {
            response = await axios.get(API_URL)
            // console.log(response)
            let { data } = response
            // console.log(data)
            return(data)
    
        } catch (error) {
            // console.log(error)
            // console.log(response)
            return{'error': "Resource error"}

        
        }
    }

    export default getInterData

