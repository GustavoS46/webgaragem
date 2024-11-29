import React, { useEffect } from 'react';
import Layout from '../../../sections/layout/layout';
import CategoryCard from '../../../components/category/CategoryCard';
import { SiBmw, SiVolkswagen, SiToyota, SiHonda, SiFord, SiChevrolet, SiAudi } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Category = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  const brands = [
    { name: "BMW", icon: SiBmw },
    { name: "Volkswagen", icon: SiVolkswagen },
    { name: "Toyota", icon: SiToyota },
    { name: "Honda", icon: SiHonda },
    { name: "Ford", icon: SiFord },
    { name: "Chevrolet", icon: SiChevrolet },
    { name: "Audi", icon: SiAudi },
  ];

  return (
    <div id="sobre" className="w-full bg-gradient-to-t from-[#010102] to-gray-900 lg:py-12 py-8">
      {/* Cabeçalho com título e descrição */}
      <div 
        data-aos='zoom-in'
        data-aos-delay='300'
        className="text-center mb-10 mx-2">
        <h1 className="text-3xl lg:text-4xl font-bold text-white uppercase tracking-wide">
          Encontre o Carro Perfeito para Você
        </h1>
        <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
          Navegue por nossa ampla seleção de veículos e encontre o modelo que
          atende às suas necessidades. Desde sedãs elegantes a SUVs robustos,
          temos opções para todos os estilos e orçamentos.
        </p>
      </div>

      {/* Cards de categorias */}
      <div 
        data-aos='zoom-in'
        data-aos-delay='400'
      >
        <Layout className="grid md:grid-cols-7 sm:grid-cols-3 grid-cols-2 md:gap-8 gap-5 mb-5">
          {brands.map((brand, index) => (
            <CategoryCard key={index} icon={brand.icon} />
          ))}
        </Layout>
      </div>
    </div>
  );
};

export default Category;
