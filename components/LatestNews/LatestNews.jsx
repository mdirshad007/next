import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

function LatestNews() {
  const [pageNo,setpageNo]=useState(1);
  const handelNextClick=()=>{   
    setpageNo(pageNo+1)
  }
  const handelPrevClick=()=>{
    if(pageNo>=2){
      setpageNo(pageNo-1)
    }
  }
  const [news,setNews]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let apiLink=`https://newsapi.org/v2/top-headlines?country=in&category=entertainment&apiKey=3db45571a94d482fb3fdd1adcc10cd09&page=${pageNo}`;
        let data = await fetch(apiLink);
        data = await data.json();
        setNews(data.articles)
        console.log(news);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  },[pageNo]); // Make sure to pass an empty dependency array

  return (
    <section className="py-20 px-5">
         <div className="w-[1280px] mx-auto">
            <h1 className="mb-8 text-center text-4xl">Latest News Update</h1>
         </div>
      <div className="w-[1280px] mx-auto flex flex-wrap">
      {news.map((item) => (
        <div className="md:w-2/6 p-1">
        <NewsCard key={item.url} img={item.urlToImage} title={item.title} description={item.description} url={item.url}/>
        </div>
          ))}
      </div>
      <div className="w-[1280px] mx-auto">
      <div className="flex border-t border-gray-200 bg-white px-4 py-3 sm:px-6 mt-10">
      <div className="flex flex-1 justify-between">
        <button
        disabled={pageNo<=1}
        onClick={handelPrevClick}
          className={`relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 ${pageNo<=1?"bg-gray-300 hover:bg-gray-300":""}`}
        >
          Previous
        </button>
        <button
        onClick={handelNextClick}
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          Next
        </button>
      </div>
    </div>
      </div>
    </section>
  );
}

export default LatestNews;
