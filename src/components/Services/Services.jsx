import React from 'react'
import { FaCarSide, FaHeadphonesAlt, FaWallet, FaCheckCircle } from 'react-icons/fa'

const ServiceData = [
    {
        id: 1,
        icons: <FaCarSide className='text-4xl md:text-5xl text-primary' />,
        title: 'Free Shipping',
        description: 'Free Shipping On all Order',
    },
    {
        id: 2,
        icons: <FaCheckCircle className='text-4xl md:text-5xl text-primary' />,
        title: 'Save Money',
        description: '30 Days Money Back',
    },
    {
        id: 3,
        icons: <FaWallet className='text-4xl md:text-5xl text-primary' />,
        title: 'Secure Payment',
        description: 'All Payment Secure',
    },
    {
        id: 4,
        icons: <FaHeadphonesAlt className='text-4xl md:text-5xl text-primary' />,
        title: 'Online Support 24/7',
        description: 'Technical Suport 24/7',
    },
];

const Services = () => {
  return (
    <div>
        <div className='container my-14 md:mt-20'>
            <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 gap-y-8'>
                {ServiceData.map((data) => (
                    <div className='flex flex-col items-start sm:flex-row gap-4'>
                        {data.icons}
                        <div>
                        <h1 className='lg:text-xl font-bold'>{data.title}</h1>
                        <h1 className='text-gray-400 text-sm'>{data.description}</h1>
                        </div>
                    </div> 
                ))}
            </div>
        </div>
    </div>
  )
}

export default Services
