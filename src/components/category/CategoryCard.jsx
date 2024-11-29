import React from 'react';

const CategoryCard = ({ icon: Icon }) => {
  return (
    <div className='w-full h-auto px-4 py-6 border-2 rounded-2xl flex items-center justify-center flex-col gap-4 ease-in-out bg-gray-800'>
      {/* Ícone com efeito de hover */}
      <Icon className='text-5xl text-white transform transition-transform duration-300 ease-in-out hover:scale-110 hover:text-red-600' />
    </div>
  );
};

export default CategoryCard;
