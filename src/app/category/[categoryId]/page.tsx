import OtherNews from '@/component/OtherNews';
import React from 'react';
interface IcategoryNewsType{
title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  id: string;
  firstPublished:string,
  category: string

}
interface IparamsProps{
    params: Promise<{
        categoryId:string
    }>
}

const CategoryPage = async({params}:IparamsProps) => {
    const {categoryId}=await params
    const res=await fetch(`https://news-api-v2.vercel.app/api/category/${categoryId}`)
    const data=await res.json()
    const categoryNews:IcategoryNewsType[]=data.data
    return (
        <div>
            <h1 className='text-2xl font-bold border-b-3 border-red-500 mb-4 py-3'>{data.title}</h1>
            <div className='grid grid-cols-3 gap-2'>
            
            {categoryNews.map(news=><OtherNews key={news.id} news={news}></OtherNews>)}
            </div>
        </div>
        
    );
};

export default CategoryPage;