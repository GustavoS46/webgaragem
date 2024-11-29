import React, { useEffect, useState } from 'react';
import logo from '../../assets/logo1.png';
import { FaShoppingCart, FaUserAlt } from 'react-icons/fa';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Navbar = () => {
    
    useEffect(() => {
        AOS.init({
          offset: 200,
          duration: 400,
          easing: 'ease-in-sine',
        });
      }, []);

    const [isOpen, setIsOpen] = useState(false);

    // Alternar o menu ao clicar
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#FFFFFF]">
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
                {/* Logo */}
                <a 
                    data-aos='fade-right'
                    data-aos-delay='100'
                    href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
                    <img src={logo} className="h-8" alt="Garagem Logo" />
                    <span className="self-center text-2xl font-semibold whitespace-nowrap font-rubik">webgaragem</span>
                </a>

                {/* Ícones no celular */}
                <div className="flex items-center gap-x-4 md:hidden">
                    <button
                        type="button"
                        className="flex items-center justify-center text-zinc-100 bg-gray-500 hover:bg-[#EF2C3F] focus:outline-none rounded-xl text-base font-normal w-10 h-10 ease-in-out duration-300 relative gap-x-1"
                    >
                        <FaShoppingCart />
                        <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-600 flex items-center justify-center text-xs font-normal">5</div>
                    </button>
                    <button
                        type="button"
                        className="flex items-center justify-center text-zinc-100 bg-gray-500 hover:bg-[#EF2C3F] focus:outline-none rounded-xl text-base font-normal w-10 h-10 ease-in-out duration-300 relative gap-x-1"
                    >
                        <FaUserAlt />
                    </button>
                    <button
                        onClick={toggleMenu}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300"
                        aria-controls="navbar-default"
                        aria-expanded={isOpen}
                    >
                        <span className="sr-only">Abra o menu principal</span>
                        <svg
                            className="w-5 h-5"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 17 14"
                        >
                            <path
                                stroke="currentColor"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M1 1h15M1 7h15M1 13h15"
                            />
                        </svg>
                    </button>
                </div>

                {/* Menu e Ícones em telas maiores */}
                <div
                    data-aos='fade-left'
                    data-aos-delay='100'
                    className={`${isOpen ? "block" : "hidden"} w-full md:flex md:items-center md:justify-between md:w-auto`}
                    id="navbar-default"
                >
                    <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-200 rounded-lg bg-[#EDEDED] lg:bg-[#FFFFFF] md:flex-row md:space-x-8 rtl:space-x-reverse md:border-0">
                        <li>
                            <a
                                href="#home"
                                className="block py-2 px-3 text-black hover:text-gray-500 md:bg-transparent md:text-[#EF2C3F] border-b-2 border-transparent hover:border-[#EF2C3F]"
                                aria-current="page"
                            >
                                Home
                            </a>
                        </li>
                        <li>
                            <a
                                href="#sobre"
                                className="block py-2 px-3 text-black transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F] hover:text-gray-500"
                            >
                                Sobre
                            </a>
                        </li>
                        <li>
                            <a
                                href="#carros"
                                className="block py-2 px-3 text-black transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F] hover:text-gray-500"
                            >
                                Carros
                            </a>
                        </li>
                        <li>
                            <a
                                href="#advertisements"
                                className="block py-2 px-3 text-black transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F] hover:text-gray-500"
                            >
                                Anúncios
                            </a>
                        </li>
                        <li>
                            <a
                                href="#"
                                className="block py-2 px-3 text-black transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F] hover:text-gray-500"
                            >
                                Contato
                            </a>
                        </li>
                    </ul>
                    <div className="hidden md:flex items-center gap-x-4">
                        <button
                            type="button"
                            className="flex items-center justify-center text-zinc-100 bg-gray-500 hover:bg-[#EF2C3F] focus:outline-none rounded-xl text-base font-normal w-10 h-10 ease-in-out duration-300 relative gap-x-1"
                        >
                            <FaUserAlt />
                        </button>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
