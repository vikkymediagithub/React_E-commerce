import React from 'react'
import { FaInstagram, FaMobileAlt } from 'react-icons/fa';
import { FaGithub, FaLocationArrow, FaWhatsapp } from 'react-icons/fa6';

const FooterLinks = [
    {
        title: "Home",
        link: "/#",
    },
    {
        title: "About",
        link: "/#",
    },
    {
        title: "Contact",
        link: "/#",
    },
    {
        title: "Blog",
        link: "/#",
    },
];

const Footer = () => {
  return (
    <div className='dark:bg-gray-950'>
        <div className='container'>
            <div className='grid md:grid-cols-3 pb-20 pt-5'>
                {/* Company Details */}
                <div className='py-8 px-4'>
                <a href='#' className='text-primary font-semibold tracking-widest text-2xl uppercase sm:text-3xl'>
                            Vsite
                        </a>
                        <p className='text-gray-600 dark:text-white/70 lg:pr-24 pt-3'>This is to informed you that am a programmer that i can also help you to build an E-commerce website that will look awesome to you.</p>
                        <p className='text-gray-500 mt-4'>Create by ❤️ vikkymedia</p>
                        <a href="https://vikkymediaportfolio.netlify.app" target='_blank' className='inline-block bg-primary/90 text-white py-2 px-4 mt-4 text-sm rounded-full'>Visit our Portfolio Website</a>
                </div>

                {/* Footer links */}
                <div className='col-span-2 grid grid-cols-2 sm:grid-cols-3 md:pl-10'>
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Important Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:dark:text-white hover:text-black duration-300'>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Second col links */}
                    <div className='py-8 px-4'>
                        <h1 className='text-xl font-bold sm:text-left mb-3'>Quick Links</h1>
                        <ul className='space-y-3'>
                            {FooterLinks.map((data, index) => (
                                <li key={index}>
                                    <a href={data.link} className='text-gray-600 hover:dark:text-white hover:text-black duration-300'>{data.title}</a>
                                </li>
                            ))}
                        </ul>
                    </div>


                    {/* Company Address */}
                   <div className='py-8 px-4 col-span-2 sm:col-auto'>
                   <h1 className='text-xl font-bold sm:text-left mb-3'>Address</h1>
                    <div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow />
                            <p>Vikkymedia, Oyo State</p>
                        </div>
                        <div className='flex items-center gap-3 mt-6'>
                            <FaMobileAlt />
                            <p>+234-903-598-6632</p>
                        </div>

                        {/* Social link */}
                        <div className='flex items-center gap-3 mt-6'>
                            <a href="#">
                                <FaInstagram className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#">
                                <FaWhatsapp className='text-3xl hover:text-primary duration-300' />
                            </a>
                            <a href="#">
                                <FaGithub className='text-3xl hover:text-primary duration-300' />
                            </a>
                        </div>
                    </div>
                   </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
