import React from "react";
import Layout from "../../../sections/layout/layout";
import Button from "../../../components/button/Button";
import { GoArrowUpRight } from "react-icons/go";
import CarsSale from "../../../components/cars/CarsSale";
import bmwImg from "../../../assets/bmw-m3.jpg";
import mercedesImg from "../../../assets/Mercedes-Benz-C.jpg";
import porscheImg from "../../../assets/porsche-911.jpg";
import audiImg from "../../../assets/audi-a6.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css';

const Cars = () => {
  // Dados dos carros
  const carsList = [
    {
      name: "BMW M3",
      img: bmwImg,
      price: "R$ 689.000",
      year: 2023,
      desc: "Único dono, impecável, super conservado, zero detalhes. Outros Opcionais: Comando de áudio no volante, Controle de estabilidade, Direção Elétrica, Distribuição eletrônica de frenagem, Kit Multimídia, Pára-choques na cor do veículo.",
    },
    {
      name: "MERCEDES-BENZ C 180",
      img: mercedesImg,
      price: "R$ 129.000",
      year: 2018,
      desc: "BLINDADO CARBON BLACK COM VIDROS AGP B33 / LAUDO CAUTELAR APROVADO / TODO REVISADO EM CONCESSIONÁRIA / ANDROID AUTO E APPLE CARPLAY / MANUAL E CHAVE RESERVA / BANCOS IMPECÁVEIS / MANUAL E CHAVE RESERVA / VEÍCULO IMPECÁVEL / MODOS DE CONDUÇÃO / PNEUS NOVOS.",
    },
    {
      name: "PORSCHE 911",
      img: porscheImg,
      price: "R$ 1.150.000",
      year: 2022,
      desc: "Veiculo único dono, com uma belíssima configuração na cor Verde Aventurine e interior couro Club marrom trufa costuras em giz, pacote Sport Design, pacote Sport Chrono, Sistema de elevação do eixo dianteiro lift system, Rodas RS Spyder 20/21, Faróis em LED matrix PDLS Plus, Bancos esportivos 18 vias com escudo Porsche e aquecimento, sistema de som Burmester, assistente mudança de faixa.",
    },
    {
      name: "AUDI A6",
      img: audiImg,
      price: "R$ 145.000",
      year: 2017,
      desc: "Blindagem Carbon Nível IIIA 18mm. 1 Ano de Garantia. Comando de áudio no volante, Controle de estabilidade, Direção Elétrica, Distribuição eletrônica de frenagem, Farol de neblina, Kit Multimídia, MP3 Player, Pára-choques na cor do veículo.",
    },
  ];

  // Função para limitar caracteres
  const truncateText = (text, limit) => {
    if (text.length > limit) {
      return `${text.slice(0, limit)}...`;
    }
    return text;
  };

  return (
    <div id="advertisements" className="bg-gray-900 w-full mx-auto pb-10">
      <Layout className="space-y-10">
        {/* Título */}
        <div className="w-full flex flex-col items-center justify-center text-center space-y-4">
          <h6 className="text-lg text-gray-400 uppercase font-medium tracking-wide">
            Descubra as melhores marcas do mercado
          </h6>
          <h1 className="text-2xl md:text-5xl font-bold text-white uppercase tracking-wide">
            Veículos de <span className="text-red-600">destaque</span> para você
          </h1>
        </div>

        {/* Grid de carros */}
        <div className="py-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {carsList.map((car, index) => (
            <CarsSale
              key={index}
              img={car.img}
              name={car.name}
              price={car.price}
              year={car.year}
              desc={truncateText(car.desc, 100)} // Limite de 100 caracteres
            />
          ))}
        </div>

        {/* Botão Final */}
        <div className="flex items-center justify-center">
          <Button className="flex items-center justify-center bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg shadow-lg transition-transform transform hover:scale-105">
            Ver Todos Os Carros
            <GoArrowUpRight className="ml-2 text-xl transition-transform group-hover:rotate-45" />
          </Button>
        </div>
      </Layout>
    </div>
  );
};

export default Cars;
