import React, { useEffect } from 'react';
import Layout from '../../../sections/layout/layout';
import HeroImg from '../../../assets/hero2.png';
import Fundo from '../../../assets/fundo.png';
import { GoArrowUpRight } from 'react-icons/go';
import Button from '../../../components/button/Button';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Hero = () => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <section 
      id='home'
      className="relative w-full lg:h-[70vh] h-[100vh] bg-gradient-to-b from-gray-700 to-gray-900">
      {/* Imagem de Fundo */}
      <img
        src={Fundo}
        alt="Interior do Nissan GT-R R34"
        className="absolute inset-0 w-full h-[40vh] object-cover z-0 bg-black opacity-70"
      />

      <div 
        data-aos='zoom-in'
        data-aos-delay='200'
        className="w-full max-w-screen-xl mx-auto h-full flex items-center justify-center relative z-10">
        {/* Layout Interno */}
        <Layout className="flex flex-wrap items-center justify-between gap-16 z-50">
          {/* Conteúdo Hero */}
          <div className="md:w-[40%] w-full md:space-y-16 space-y-8">
            <div className="space-y-5">
              <div className="space-y-1">
                <h6 className="text-lg text-white font-medium uppercase">Em destaque</h6>
                <h1 className="md:text-5xl sm:text-4xl text-3xl text-white font-bold uppercase leading-tight">
                  Conheça o <span className="text-red-600">Nissan GT-R R35</span>
                </h1>
              </div>
            </div>
            <p className="lg:text-lg text-sm text-gray-300 font-semibold">
              Sinta a adrenalina de dirigir o icônico Nissan GT-R R35. Um supercarro que combina potência impressionante, design arrojado e tecnologia de ponta para proporcionar uma experiência de condução inesquecível.
            </p>
            <div className="flex flex-col lg:flex-row gap-5">
              <Button className="p-4">
                Agende um Test Drive
                <GoArrowUpRight className="text-xl transform transition-transform group-hover:rotate-45 ease-in-out duration-300" />
              </Button>
              <Button className="bg-transparent hover:bg-slate-700 border p-4">
                Saiba Mais
                <GoArrowUpRight className="text-xl transform transition-transform group-hover:rotate-45 ease-in-out duration-300" />
              </Button>
            </div>
          </div>

          {/* Imagem Hero */}
          <div className="relative md:w-[50%] w-full h-auto lg:my-5 my-20 ">
            {/* Gradientes Decorativos */}
            <div className="absolute bg-gradient-to-r from-white to-transparent rounded-xl -z-10" style={{ width: '500px', height: '400px', top: '50%', left: '30%', transform: 'translate(-50%, -50%) translateX(280px)' }}></div>
            <div className="absolute bg-gradient-to-r from-red-600 to-transparent rounded-full -z-10" style={{ width: '250px', height: '250px', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateX(190px)' }}></div>
            <div className="absolute bg-gradient-to-r from-red-600 to-transparent rounded-full -z-10" style={{ width: '255px', height: '255px', top: '50%', left: '50%', transform: 'translate(-50%, -50%) translateX(200px)' }}></div>
            <img src={HeroImg} alt="Nissan GT-R R35" className="w-full relative z-10" />
          </div>
        </Layout>
      </div>
    </section>
  );
};

export default Hero;
