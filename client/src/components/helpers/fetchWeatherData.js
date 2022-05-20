import axios from "axios"

    const getWeatherData =  async (location ='Kampala' ) => {
        const API_URL = `${process.env.REACT_APP_API_URL}?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=1&aqi=no&alerts=no`
        // console.log(API_URL)
        // const API_URL = `http://api.weatherapi.com/v1/forecast.json?key=5854d733c72f45b882f85339220504&q=London&days=1&aqi=no&alerts=no`
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

    export default getWeatherData

