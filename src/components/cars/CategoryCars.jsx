import React from 'react'
import { FaExchangeAlt, FaHeart } from 'react-icons/fa'
import Button from '../button/Button'
import { GiCarSeat, GiGasPump } from 'react-icons/gi'
import { TbAutomaticGearbox } from 'react-icons/tb'

const CategoryCars = ({ img, price, title, desc }) => {
  return (
    <div className='w-full border border-zinc-700 bg-zinc-900/40 rounded-xl p-4 space-y-5'>
      <div className='w-full h-[28vh] bg-zinc-900 rounded-lg'>
        <img src={img} alt="" className='w-full h-full object-contain object-center' />
      </div>

      <div className='space-y-5 px-2'>
        <div className='space-y-2'>
          <div className='flex items-center justify-between w-full'>
            <h2 className='text-xl text-zinc-100 font-semibold'>{price}</h2>
            <div className='flex items-center gap-x-3'>
              <Button className="p-2 rounded-full hover:bg-zinc-700">
                <FaHeart className="text-zinc-400 hover:text-red-500" />
              </Button>
              <Button className="p-2 rounded-full hover:bg-zinc-700">
                <FaExchangeAlt className="text-zinc-400 hover:text-green-500" />
              </Button>
            </div>
          </div>
          <div className='space-y-1.5'>
            <h3 className='text-xl text-zinc-50 font-semibold'>{title}</h3>
            <p className='text-xs text-zinc-400 font-normal line-clamp-2'>{desc}</p>
          </div>
        </div>
        <hr className='border-zinc-700 my-3' />
        <div className='w-full flex items-center gap-3 flex-wrap'>
          <div className='flex items-center gap-x-1 text-zinc-400'>
            <GiGasPump className="text-lg" />
            <p className='text-xs'>Gasolina</p>
          </div>
          <div className='flex items-center gap-x-1 text-zinc-400'>
            <GiCarSeat className="text-lg" />
            <p className='text-xs'>5 Assentos</p>
          </div>
          <div className='w-1 h-1 rounded-full bg-zinc-600'></div>
          <div className='flex items-center gap-x-1 text-zinc-400'>
            <TbAutomaticGearbox className="text-lg" />
            <p className='text-xs'>Automático</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CategoryCars
