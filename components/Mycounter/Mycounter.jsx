import React, { useEffect, useState } from 'react';

function MyCounter() {
  const [count, setCount] = useState(0);

  const counterHandler = () => {
    setCount(count + 1);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        let data = await fetch('https://newsapi.org/v2/top-headlines?country=in&apiKey=3db45571a94d482fb3fdd1adcc10cd09');
        data = await data.json();
        console.log(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); // Make sure to pass an empty dependency array

  return (
    <div className="text-center">
      <p>Your click count is {count}</p>
      <button onClick={counterHandler} className="bg-blue-950 text-white px-5 py-3">
        Click
      </button>
    </div>
  );
}

export default MyCounter;
