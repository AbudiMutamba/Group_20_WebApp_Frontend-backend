import React, {useEffect,useState} from 'react'

import getNewsData from '../helpers/fetchNewsData';

function News() {
    const [newsInfo, setNewsInfo] = useState([]);
    const API_OBJECT =  {
        method: 'GET',
        url: 'https://bing-news-search1.p.rapidapi.com/news/search',
        params: {q: 'Uganda', freshness: 'Day', textFormat: 'Raw', safeSearch: 'Off'},
        headers: {
        'X-BingApis-SDK': 'true',
        'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com',
        'X-RapidAPI-Key': `${process.env.REACT_APP_API_KEY_NEWS}`
        }
    };

    useEffect(() => {
        handleNews();
    },[])

    const handleNews = () => {
        getNewsData(API_OBJECT).then(({value: NEWS_DATA}) => setNewsInfo(NEWS_DATA))    
    }
     
    return (      
        <>      
            <div className='flex flex-wrap flex-row'>
                {newsInfo && newsInfo.map((news, index) => <li className='list-none' key={index}>
                     <div className=' flex p-4'>
                        {/* <div className='text-5x1 md:10'>{news.category}</div> */}
                        {news.image && < img class=' w-fit md:max-w-xs md:max-h-full max-h-25 object-cover mr-2'src = {news.image?.thumbnail.contentUrl} alt = "newsimage"/>}<br/>
                        <div className='flex flex-row flex-wrap justify-start'>
                            <div className='text-2xl'>{news.name}</div>
                            <div className='text-sm'>{news.description}</div>
                            {/* <div>{news.datePublished}</div> */}
                        </div>
                        
                     </div>
                    </li>)
                } 

            </div>    
        </>
    )
}

export default News