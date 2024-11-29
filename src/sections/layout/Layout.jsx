import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Layout = ({ children, className }) => {

  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 400,
      easing: 'ease-in-sine',
    });
  }, []);

  return (
    <div className={`w-full max-w-screen-xl mx-auto px-5 ${className}`}>
      {children}
    </div>
  )
}

export default Layout