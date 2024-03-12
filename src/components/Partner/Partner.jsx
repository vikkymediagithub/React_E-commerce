import React from 'react'
import brand1 from '../../assets/brand/brand-1.png'
import brand2 from '../../assets/brand/brand-2.png'
import brand3 from '../../assets/brand/brand-3.png'


const Partner = () => {
  return (
    <div data-aos='zoom-out' className='py-8 mt-24 hidden md:block bg-gray-200 dark:bg-white/10'>
      <div className='container'>
        <div className='grid grid-cols-3 gap-3 place-items-center opacity-50'>
            <img src={brand1} alt="" className="w-[100px] dark:invert" />
            <img src={brand2} alt="" className="w-[100px] dark:invert" />
            <img src={brand3} alt="" className="w-[100px] dark:invert" />
        </div>
      </div>
    </div>
  )
}

export default Partner
