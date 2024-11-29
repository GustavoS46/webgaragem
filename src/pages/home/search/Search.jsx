import React, { useEffect } from 'react';
import Layout from '../../../sections/layout/layout';
import Button from '../../../components/button/Button';
import { FaSearch } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Search = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <div
            id='carros'
            className="w-full mx-auto bg-gradient-to-b from-black to-[#010102] pb-5">
            <div 
                data-aos='zoom-in'
                data-aos-delay='400'>
                <Layout className="bg-gray-800 rounded-lg py-5 shadow-lg">
                    <div className="py-5 px-7 relative">
                        {/* Título centralizado */}
                        <div className="md:w-fit w-full md:px-6 px-4 pb-2 flex items-center justify-center rounded-xl text-center absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
                            <h1 className="md:text-3xl text-xl font-bold text-white uppercase tracking-wide pt-5">
                                Encontre o seu <span className="text-red-600">Carro</span>
                            </h1>
                        </div>

                        {/* Formulário de pesquisa */}
                        <div className="pt-8 pb-5">
                            <div className="w-full grid md:grid-cols-7 grid-cols-2 gap-5 items-center">
                                {/* Tipos de Carros */}
                                <div className="w-full h-14 col-span-2 border border-gray-700 rounded-xl bg-gray-800">
                                    <select className="w-full h-full bg-transparent text-gray-300 focus:outline-none rounded-xl">
                                        <option value="todos-tipos" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            TODOS OS TIPOS
                                        </option>
                                        <option value="coupe" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            COUPÉ
                                        </option>
                                        <option value="hatch" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            HATCH
                                        </option>
                                        <option value="pickup" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            PICK-UP
                                        </option>
                                        <option value="sedan" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            SEDÃ
                                        </option>
                                        <option value="suv" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            SUV
                                        </option>
                                        <option value="esportivo" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            ESPORTIVO
                                        </option>
                                        <option value="luxo" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            LUXO
                                        </option>
                                        <option value="off-road" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            OFF-ROAD
                                        </option>
                                    </select>
                                </div>

                                {/* Marcas */}
                                <div className="w-full h-14 col-span-2 border border-gray-700 rounded-xl bg-gray-800">
                                    <select className="w-full h-full bg-transparent text-gray-300 focus:outline-none rounded-xl">
                                        <option value="todas-marcas" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            TODAS AS MARCAS
                                        </option>
                                        <option value="audi" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            AUDI
                                        </option>
                                        <option value="bmw" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            BMW
                                        </option>
                                        <option value="chevrolet" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            CHEVROLET
                                        </option>
                                        <option value="fiat" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            FIAT
                                        </option>
                                        <option value="ford" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            FORD
                                        </option>
                                        <option value="honda" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            HONDA
                                        </option>
                                        <option value="jeep" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            JEEP
                                        </option>
                                        <option value="mercedes" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            MERCEDES-BENZ
                                        </option>
                                        <option value="toyota" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            TOYOTA
                                        </option>
                                        <option value="volkswagen" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            VOLKSWAGEN
                                        </option>
                                    </select>
                                </div>

                                {/* Usos e Estilos */}
                                <div className="w-full h-14 col-span-2 border border-gray-700 rounded-xl bg-gray-800">
                                    <select className="w-full h-full bg-transparent text-gray-300 focus:outline-none rounded-xl">
                                        <option value="todos-usos" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            TODOS OS ESTILOS
                                        </option>
                                        <option value="eletrico" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            ELÉTRICO
                                        </option>
                                        <option value="hibrido" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            HÍBRIDO
                                        </option>
                                        <option value="familia" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            FAMÍLIA
                                        </option>
                                        <option value="urbano" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            URBANO
                                        </option>
                                        <option value="trabalho" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            TRABALHO
                                        </option>
                                        <option value="aventura" className="bg-gray-800 text-white hover:bg-red-600 hover:text-white">
                                            AVENTURA
                                        </option>
                                    </select>
                                </div>

                                {/* Botão de pesquisa */}
                                <Button className="px-4 py-3 flex items-center gap-2 text-white bg-red-600 rounded-xl hover:bg-red-700 transition duration-300 ease-in-out">
                                    <FaSearch />
                                    Pesquisa
                                </Button>
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    );
};

export default Search;
