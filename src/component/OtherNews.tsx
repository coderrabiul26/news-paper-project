import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
interface newsProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  id: string;
  firstPublished:string,
  category: string
}
const OtherNews = ({news}:{news:newsProps}) => {
    return (
            <Link href={`/details/${news.id}`}>
                <div className="card bg-base-100 shadow-sm">
                    
                    <figure>
                        <Image src={news.imageUrl} width={400} height={400} alt={news.imageAlt} className="w-full"></Image>
                      
                    </figure>
                   
                    <div className="card-body">
                        <h1 className="text-red-500">{news.category}</h1>
                      <h2 className="card-title text-xl font-bold">{news.title}</h2>
                      <p>
                        {news.description}
                      </p>
                    </div>
                    
                  </div>
            </Link>
             
        
    );
};

export default OtherNews;