import React from 'react'
import Hero from './Hero/Hero'
import Category from './category/Category'
import Search from './search/Search'
import Services from './service/Services'
import Cars from './cars/Cars'


const Home = () => {
  return (
    <div 
      className='w-full mx-auto'>
      <Hero />
      <Category />
      <Search />
      <Services />
      <Cars />
    </div>
  )
}

export default Home