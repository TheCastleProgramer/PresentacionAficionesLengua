import React, { useState } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import pagesData from './pages.json';

const InteractivePresentationApp = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const goToPreviousPage = () => {
    setCurrentPage((prevPage) => 
      prevPage > 0 ? prevPage - 1 : pagesData.pages.length - 1
    );
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => 
      prevPage < pagesData.pages.length - 1 ? prevPage + 1 : 0
    );
  };

  const currentPageData = pagesData.pages[currentPage];

  return (
    <div 
      className="min-h-screen flex flex-col relative"
      style={{
        backgroundColor: currentPageData.background,
        backgroundImage: `url(${currentPageData.backgroundImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="flex-grow flex flex-col justify-center p-2">
        <div className="bg-white shadow-xl rounded-xl p-4 mx-2">
          <h2 className="text-2xl font-bold mb-2 text-center text-gray-800">
            {currentPageData.title}
          </h2>
          
          <div 
            className="text-lg text-gray-700 mb-2 text-center"
            dangerouslySetInnerHTML={{__html: currentPageData.content}}
          />
          
          <div className="flex justify-between space-x-2">
            <button 
              onClick={goToPreviousPage} 
              className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
            >
              <ArrowLeft />
            </button>
            
            <button 
              onClick={goToNextPage} 
              className="flex-1 bg-blue-500 text-white p-2 rounded-lg hover:bg-blue-600 transition flex items-center justify-center"
            >
              <ArrowRight />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InteractivePresentationApp;