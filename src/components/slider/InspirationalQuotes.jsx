import React from 'react';

const InspirationalQuotes = () => {
  const quotes = [
    { id: 1, text: "The best way to find yourself is to lose yourself in the service of others.", auther: "- Mahatma Gandhi" },
    { id: 2, text: "Volunteers do not necessarily have the time; they just have the heart.", auther: "- Elizabeth Andrew" },
    { id: 3, text: "The best way to not feel hopeless is to get up and do something.", auther: "- Barack Obama" },
    { id: 4, text: "Service to others is the rent you pay for your room here on Earth.", auther: "- Muhammad Ali" },
    { id: 5, text: "No act of kindness, no matter how small, is ever wasted.", auther: "- Aesop" },
  ];

  return (
    <div className="container mx-auto max-w-[80%] lg:max-w-[60%] mt-12">
      <h2 className="text-2xl font-bold text-center mb-6">Inspirational Quotes</h2>
      <ul className="space-y-4">
        {quotes.map((quote) => (
          <li key={quote.id} className="p-4 bg-gray-100 rounded-lg shadow-md">
            <p className="text-lg text-gray-800">"{quote.text}"</p>
            <div className='flex justify-end items-end'>{quote.auther}</div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default InspirationalQuotes;
