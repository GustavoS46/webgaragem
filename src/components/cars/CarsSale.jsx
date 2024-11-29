import React from "react";

const CarsSale = ({ img, name, price, year, desc }) => {
    return (
      <div className="w-full bg-gray-800 rounded-xl p-4 space-y-3 shadow-md transform transition-all duration-300 hover:shadow-lg hover:scale-105">
        {/* Imagem do carro */}
        <div className="w-full h-[150px] bg-gray-900 rounded-lg overflow-hidden group">
          <img
            src={img}
            alt={name}
            className="w-full h-full object-cover object-center transform transition-transform duration-300 group-hover:scale-110"
          />
        </div>
  
        {/* Informações do carro */}
        <div className="space-y-2 text-center">
          <h2 className="text-lg font-bold text-white">{name}</h2>
          <p className="text-sm text-gray-400">{desc}</p>
          <p className="text-sm text-gray-300">Ano: {year}</p>
          <p className="text-lg font-semibold text-red-500">{price}</p>
        </div>
      </div>
    );
  };

export default CarsSale;
