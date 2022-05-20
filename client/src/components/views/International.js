import React, {useEffect, useState} from 'react'

import getInterData from '../helpers/fetchInternationalData'


export default function International() {
    const [interNews, setinterNews] = useState([]);
    // const [error,  setError] = useState('');

    useEffect(()=> {
        handleInterNews().then(newsArticles => setinterNews(newsArticles)).catch(error => console.log(error))
    },[]);

    const handleInterNews = async () =>{
        const { sources } = await getInterData();
        return sources
    }
  
  return (
    <>   
    {interNews && interNews.map(({category, id, name, description, url} ,index) => <div className='m-20' key={index}>
        <div>{category.general}</div>
        {/* <div>{id}</div> */}
        <div className='text-2x1 italic font-bold'>{name}</div>
        <div className='text-sm'>{description}</div>
        {/* <div>{url}</div> */}
    </div>)}

    </>
  )
    
} 