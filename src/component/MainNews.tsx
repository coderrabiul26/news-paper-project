import Image from "next/image";
import Link from "next/link";
import React from "react";
interface newsProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  id: string;
  firstPublished:string,
  category: string
}
const MainNews = ({ news }: { news: newsProps[] }) => {
  const [firstNews, ...otherNews] = news;
  console.log(firstNews);

  return (
    <div className="grid grid-cols-2 gap-4">
      <Link href={`/details/${firstNews.id}`}>
        <div className="card bg-base-100 shadow-sm">
        
        <figure>
          <Image src={firstNews.imageUrl} width={400} height={400} alt={firstNews.imageAlt} className="w-full"></Image>
        </figure>
       
        <div className="card-body">
            <h1 className="text-red-500">{firstNews.category}</h1>
          <h2 className="card-title text-xl font-bold">{firstNews.title}</h2>
          <p>
            {firstNews.description}
          </p>
        </div>
        
      </div>
      </Link>
      <div className="border rounded-lg border-gray-300">
        {otherNews.slice(0,4).map(n=><Link key={n.id} href={`/details/${n.id}`}><div  className="border-b border-gray-300 p-2">
            <h2 className="text-red-500">{n.category}</h2>
            <p className="font-bold hover:text-red-500">{n.title}</p>

        </div></Link>)}
      </div>
    </div>
  );
};

export default MainNews;
