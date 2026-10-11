import Link from 'next/link';
import React from 'react';

interface InavsType{
    slug: string,
    title: string,
    topicId: string|null,
    url: string,
    scrapable: boolean
}

const Navlinks = async() => {
    const res= await fetch('https://news-api-v2.vercel.app/api/categories')
    const data= await res.json()
    const navs:InavsType[]=data.data
    const filteredNavs=navs.filter(n=>n.scrapable)
    
    return (
        <div className='container mx-auto flex justify-center gap-4'>
            <Link className='hover:text-red-500' href={'/'}>হোম</Link>
            {filteredNavs.map((n,i)=><Link className='hover:text-red-500' href={`/category/${n.slug}`} key={i}>{n.title}</Link>)}
            <Link className='hover:text-red-500' href={'/profile'}>প্রোফাইল</Link>
            
        </div>
    );
};

export default Navlinks;