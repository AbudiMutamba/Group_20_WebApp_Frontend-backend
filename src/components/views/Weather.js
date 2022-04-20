import * as React from 'react'

import getWeatherData from '../helpers/fetchWeatherData'

import logo from '../imgs/weatherapp.png'

export default function Weather() {
    
        const [location, setlocation] = React.useState('')
        const [weatherinfo, setWeatherinfo] = React.useState({})
        // const [error, setError] = React.useState('')
        
        
        const handleInput = event =>{
            const {value: location } = event.target
            // console.log(location)
            // console.log(event.target.value)
            setlocation(location)
        }
      
      
                const handleSubmit = async (event) => {
                    event.preventDefault()
                   
                    setWeatherinfo({})
        try{
                    const response = await getWeatherData(location)
                    
                // setweatherinfo(response) // I will be given objects to destructor
                    // console.log(event)
                    // console.log('From submitted')
            
                    const {location: {country, localtime}} = response
                    const {current: {last_updated, temp_c, temp_f, humidity, wind_mph, condition:{text,icon}}} = response
                    const {forecast:{forecastday:[{date, day:{condition: {text: forecastMessage, icon: forecastIcon}} }]}} = response
                     console.log(response)
                    setWeatherinfo({country, localtime, last_updated, temp_c, temp_f, humidity, wind_mph, text, icon, date, forecastIcon, forecastMessage})
            }catch(error){
                console.log(error)
            }        
                } 
          

        const {country,localtime, last_updated, temp_c, temp_f, humidity, wind_mph, text, icon, date, forecastIcon, forecastMessage} = weatherinfo
    
        return (
           
           
           <>
          
 

            <div className = "grid grid-cols-1 md:grid-cols-3 m-20 rounded ">
    
                 <div className='col-start-1 col-end-3' >
        
                    <div className='flex justify-center'>
                        <img className='/* object-cover */ h-48 w-96 md:object-scale-down py-5 flex /* align-middle */' src = {logo}  alt = "weather" />
                    </div>
                    
        
                    <h1 className='text-xl flex justify-center uppercase'> Weather Predications</h1>
                    
                    <p className='text-xs flex justify-center '>Use this App to find out the current weather info of a location</p>
            
        
                        <form className='flex justify-center col-end-7 col-span-2' action="#" method="post" onSubmit={ handleSubmit } >
            
                            <input
                            
                                type="text"
                                placeholder="Location"
                                onChange={handleInput}
                                className='border-2 border-black-700'
            
                            />
                            <input type="submit" value="Check" className = "btn bg-indigo-800 text-white font-[Poppins] py-2 px-6 rounded md:ml-8 hover:bg-indigo-400 duration-500"/>
            
                        </form>
                </div>
                   <div  >
                        
                        <h1>Country: {country}</h1><br/> 
        
                        <p>Localtime: {localtime}</p><br/>

                        <h1 className='text-xl flex justify-center uppercase'>Current Information</h1>

                        <p>Last_updated: {last_updated}</p><br/>

                        <p>Temperature in Celicus: {temp_c}</p><br/>

                        <p>Temperature in Faranherit: {temp_f}</p><br/>

                        <p>Humidity: {humidity}</p><br/>

                        <p>Wind: {wind_mph}</p><br/>
        
                        <p>Status: {text}</p><br/>
        
                        {icon && < img src = {icon} alt = "weathertype"/>}<br/>

                        <h1 className='text-xl flex justify-center uppercase'>Forecast Information</h1>

                        <p>Date: {date}</p><br/>

                        <p>Status: {forecastMessage}</p><br/>

                        {forecastIcon && < img src = {forecastIcon} alt = "weathertype" />}<br/>
                    </div>
          
            </div>
            
         </>
        )
    
}
