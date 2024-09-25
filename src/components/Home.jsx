import React from 'react';
import developerHeader from '../assets/developerHeader.png';
import header from '../assets/header.png';

const Home = () => { 
    return (
      <div className='h-screen w-screen overflow-hidden'>
          <img alt='header' src={header} className='md:hidden w-screen'/>
          <div className='sm:h-20 min-[700px]:hidden bg-[#2B2B29]'></div>
          <img 
              alt='developer' 
              src={developerHeader} 
              className='absolute left-[50%] top-[160px] w-[300px] h-[300px] md:static'
          />
           <div className="absolute sm:text-[40px] sm:left-[0] sm:w-screen p-6 sm:static left-[10%] top-[160px] max-w-[300px] xl:text-[40px] p-6 text-black text-[24px] font-normal">
              <p>Hola, mi nombre es Ezequiel, soy desarrollador de software.</p>
           </div>  
      </div>
    )
  }
export default Home