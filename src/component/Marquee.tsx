import { Span } from 'next/dist/trace';
import Link from 'next/link';
import React from 'react';
import MarqueeText from "react-marquee-text"
import "react-marquee-text/dist/styles.css"

interface ImarqueeType{
    title: string,
    id: number
}

const Marquee = async() => {
    const res= await fetch('https://news-api-v2.vercel.app/api/news?limit=10')
    const data= await res.json()
    const headlines:ImarqueeType[]=data.data
    return (
        <div className='bg-red-700 flex items-center  my-3'>
            
            <div className='flex container mx-auto'>
                <div className='text-white bg-red-800 p-3 font-bold'>সর্বশেষ</div>
            <MarqueeText direction='right' duration={8} className='py-1 text-white '>

            {
                headlines.map(h=><Link key={h.id} href={`/details/${h.id}`}><span>
                    <span className='hover:underline '>
                        {h.title}
                    </span>
                    <span className='mx-4'>•</span>
                </span></Link>)
            }
            </MarqueeText>
            </div>
            
        </div>
    );
};

export default Marquee;