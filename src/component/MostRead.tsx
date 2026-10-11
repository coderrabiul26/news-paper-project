import Link from 'next/link';
import React from 'react';
interface ImostReadNewsType{
    id:string,
    title:string
}
const MostRead =async() => {
    const res= await fetch('https://news-api-v2.vercel.app/api/news/most-read')
    const data= await res.json()
    const MostReadData:ImostReadNewsType[]=data.data

    return (
        <div className='border border-gray-300 p-2 rounded-lg'>
            <h1 className='font-bold mb-2'>সর্বাধিক পঠিত</h1>
            {MostReadData.map((news,i)=><Link key={news.id} href={`/details/${news.id}`}><div  className='mb-3 hover:text-red-500'>
                <span className='text-red-500 font-bold mr-2'>{i+1}.</span><span>{news.title}</span>
            </div></Link>)}
            
        </div>
    );
};

export default MostRead;