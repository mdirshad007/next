import React from 'react';

function NewsCard({ key, img = "/image1.jpg", title, description, url }) {
  function truncateText(text, maxLength) {
    if (!text) {
      return ''; // or provide a default value
    }

    if (text.length > maxLength) {
      return text.substring(0, maxLength - 3) + '...';
    }

    return text;
  }

  return (
    <div key={key} className="max-w-full bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 overflow-hidden">
      <a href="#">
        <img
          src={img}
          alt=""
          width={300}
          height={300}
          className="w-full h-[300px] object-cover object-center"
        />
      </a>
      <div className="p-5">
        <a href="#">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {truncateText(title, 30)}
          </h5>
        </a>
        <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
          {truncateText(description, 70)}
          {description && description.length > 70 && (
            <span>
              {' '}
              <a href={url} target="_blank" rel="noopener noreferrer" className='text-blue-800 font-bold'>
                Read more
              </a>
            </span>
          )}
        </p>
        <a
          href={url}
          target="_blank"
          className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          Read more
          <svg
            className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 14 10"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 5h12m0 0L9 1m4 4L9 9"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}

export default NewsCard;
