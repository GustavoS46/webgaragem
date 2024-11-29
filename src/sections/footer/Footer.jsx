import React from 'react';
import logo from '../../assets/logo1.png';

const Footer = () => {
  return (
    <footer className="bg-gray-800 shadow dark:bg-gray-900">
      <div className="w-full mx-auto p-4 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between max-w-screen-xl mx-auto">
          <a href="/" className="flex items-center mb-4 sm:mb-0 space-x-3 rtl:space-x-reverse">
            <img src={logo} className="h-8" alt="WebGaragem Logo" />
            <span className="self-center text-gray-500 text-2xl font-semibold whitespace-nowrap font-rubik">
              webgaragem
            </span>
          </a>

          {/* Links do menu ajustados para telas menores */}
          <ul className="flex flex-col sm:flex-row items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400 space-y-2 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F]"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F]"
              >
                Sobre
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F]"
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F]"
              >
                Preço
              </a>
            </li>
            <li>
              <a
                href="#"
                className="py-2 px-3 text-gray-500 transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F]"
              >
                Contato
              </a>
            </li>
          </ul>
        </div>
      </div>

      <section className="w-full bg-[#F5F5F5] m-auto py-5 justify-center items-center lg:gap-28 gap-8 px-20">
        <div className="max-w-screen-2xl mx-auto px-5 flex justify-center items-center gap-5">
          <p className="tracking-tight text-sm font-medium text-gray-500">
            Copyright 2024 ©{' '}
            <a
              href="https://www.linkedin.com/in/gustavo-desenvolvedor/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-400 transition duration-200 border-b-2 border-transparent hover:border-[#EF2C3F]"
            >
              Gustavo Silva
            </a>
            . Todos os direitos reservados.
          </p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
