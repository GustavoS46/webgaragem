import React from 'react'

const ServiceCard = ({ icon: Icon, title, desc }) => {
  return (
    <div className='w-full flex items-start gap-x-4 border-2 borderr-zinc-900 bg-zinc-900/15 rounded-xl hover:bg-zinc-900/25 hover:scale-110 ease-in-out duration-300 p-1 lg:m-5 m-1'>
        <Icon className ='text-3xl text-red-600' />
        <div className='space-y-2 flex-1'>
            <h3 className='text-3xl text-white font-bold'>
                {title}
            </h3>
            <p className='text-sm text-white font-medium'>
                {desc}
            </p>
        </div>
    </div>
  )
}

export default ServiceCard