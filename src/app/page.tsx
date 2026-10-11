import MainNews from "@/component/MainNews";
import MostRead from "@/component/MostRead";
import OtherNews from "@/component/OtherNews";
import React from "react";
interface IotherSection{
  title:string,
  curationId:string,
  articles:{
    id:string,
    title: string,
    description:string,
    category:string,
    imageUrl:string,
    imageAlt:string
    firstPublished:string
  }[]
}

const HomePage = async () => {
  const res = await fetch("https://news-api-v2.vercel.app/api/news/sections");
  const data = await res.json();
  const sections = data.data;
  const mainNews = sections[0].articles;
  const otherNews:IotherSection[] = sections.slice(1);

  return (
    <div>
      <div className="grid grid-cols-3 container mx-auto gap-4">
        <div className="col-span-2">
          <MainNews news={mainNews}></MainNews>
          <div className="mt-5">
            {otherNews.map((on) => 
            <div key={on.curationId}>
              <h1 className="text-lg font-bold border-b border-red-500" >{on.title}</h1>
              <div className="grid grid-cols-3 gap-2 my-4">
                {on.articles.map(article=><OtherNews key={article.id} news={article}></OtherNews>)}
              </div>
            </div>
          )}
          </div>
        </div>

        <div className="col-span-1">
          
          <MostRead></MostRead>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
