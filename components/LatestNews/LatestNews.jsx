import React, { useEffect, useState } from "react";
import NewsCard from "../NewsCard/NewsCard";

function LatestNews() {
  const [news,setNews]=useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3db45571a94d482fb3fdd1adcc10cd09');
        data = await data.json();
        setNews(data.articles)
        console.log(news);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array

  return (
    <section className="py-20 px-5">
         <div className="w-[1280px] mx-auto">
            <h1 className="mb-8 text-center text-4xl">Latest News Update</h1>
         </div>
      <div className="w-[1280px] mx-auto flex flex-wrap">
      {news.map((item) => (
        <div className="md:w-2/6 p-1">
        <NewsCard key={item.url} img="/image1.jpg" title={item.title} description={item.description}/>
        </div>
          ))}
      </div>
    </section>
  );
}

export default LatestNews;
