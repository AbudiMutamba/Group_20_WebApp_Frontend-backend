import React, {Suspense} from 'react';

const News = React.lazy(() => import ('./News'));

const International = React.lazy(() => import('./International'))



function Home() {
    return (  
        <>
             <div className='m-20'>
                <Suspense
                    fallback={
                        <div className="h-screen d-flex justify-center align-center bg-slate-500" >
                            <h1>loading the news</h1>
                        </div>
                    }
                > 
                    <News />  
                    
                    {/* <International /> */}
                
                </Suspense> 
            </div>
           
        </>
    )
}

export default Home
