import React from "react";
import HorizontalCard from "../HorizontalCard/HorizontalCard";
const productList = async () => {
  let data = await fetch("https://dummyjson.com/products");
  data = await data.json();
  return data.products;
};

async function ServerApi() {
  let products = await productList();
  // console.log(products);
  return (
    <section className="py-20 px-5">
      <div className="w-[1280px] mx-auto">
        <h1 className="mb-8 text-center text-4xl capitalize">
          Fetch data from server API
        </h1>
        <div className="w-[1280px] mx-auto flex flex-wrap">
        {products.map((item) => (
        //   <p key={item.id}>{item.title}</p>
        <div className="md:w-2/6 p-1">
          <HorizontalCard key={item.id} title={item.title} description={item.description} rating={item.rating} img={item.thumbnail} price={item.price}/>
        </div>
        ))}
        </div>
      </div>
    </section>
  );
}

export default ServerApi;
