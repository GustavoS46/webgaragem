import React, { useEffect } from 'react';
import Layout from '../../../sections/layout/layout';
import { GoArrowUpRight } from 'react-icons/go';
import Button from '../../../components/button/Button';
import ServiceCard from '../../../components/service/ServiceCard';
import { IoCarSport } from 'react-icons/io5';
import { MdSecurity, MdOutlineSupportAgent } from 'react-icons/md';
import { HiOutlineClipboardCheck } from 'react-icons/hi';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Services = () => {

    useEffect(() => {
        AOS.init({
            offset: 200,
            duration: 400,
            easing: 'ease-in-sine',
        });
    }, []);

    return (
        <div className='bg-gradient-to-b from-black via-black to-gray-900'>
            <div 
                data-aos='zoom-in'
                data-aos-delay='200'    
            >
                <Layout>
                    <div className='w-full flex items-center justify-between gap-20 flex-wrap'>
                        <div className='md:w-[38%] w-full md:space-y-10 space-y-7 lg:mt-0 mb-5'>
                            <div className='space-y-2'>
                                <h6 className='text-lg text-white uppercase font-medium'>Como funciona?</h6>
                                <h1 className="md:text-5xl text-2xl font-bold text-white uppercase tracking-wide pt-5">
                                    Nossos <span className="text-red-600">Serviços</span>
                                </h1>
                            </div>
                            <p className='text-base text-white font-normal'>
                                Nosso site conecta compradores e vendedores de forma simples e segura.
                                Você pode navegar por uma ampla seleção de veículos, filtrar por tipo, marca e modelo, e entrar em contato diretamente com os vendedores.
                                Nosso diferencial é a transparência e a experiência de compra simplificada, com suporte em todas as etapas da negociação.
                            </p>
                            <Button className="p-4">
                                Saiba Mais
                                <GoArrowUpRight className="text-xl transform transition-transform group-hover:rotate-45 ease-in-out duration-300" />
                            </Button>
                        </div>
                        <div className='flex-1'>
                            <div className='w-full grid md:grid-cols-2 grid-cols-1 gap-10 p-5'>
                                <ServiceCard
                                    icon={IoCarSport} // Ícone de carro esportivo para variedade de marcas
                                    title={"Variedade de Marcas"}
                                    desc={"Uma seleção diversificada de marcas renomadas e confiáveis para você escolher."}
                                />
                                <ServiceCard
                                    icon={MdSecurity} // Ícone de segurança para compra e venda segura
                                    title={"Compra e Venda Segura"}
                                    desc={"Garantimos transações seguras e simplificadas, com suporte completo durante todo o processo."}
                                />
                                <ServiceCard
                                    icon={MdOutlineSupportAgent} // Ícone de suporte ao cliente para atendimento personalizado
                                    title={"Atendimento Personalizado"}
                                    desc={"Nossa equipe está disponível para oferecer consultoria e ajudar você a encontrar o veículo ideal."}
                                />
                                <ServiceCard
                                    icon={HiOutlineClipboardCheck} // Ícone de checklist para transparência nas negociações
                                    title={"Transparência nas Negociações"}
                                    desc={"Todas as informações sobre os veículos são claras e acessíveis, assegurando que você tome decisões informadas."}
                                />
                            </div>
                        </div>
                    </div>
                </Layout>
            </div>
        </div>
    );
}

export default Services;
