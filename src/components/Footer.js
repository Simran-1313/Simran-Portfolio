import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='w-full border-t-2 border-solid border-dark
    font-medium text-medium sm:text-base
    '>
        <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6 '>
            <span >{new Date().getFullYear()} &copy; All Rights Reserved</span>
            <div className='flex items-center lg:py-2 ' >
                Build with <span className='text-primary text-2xl px-1' > &#9825;</span>    <Link href="/" > By Simranpreet Singh</Link>
            </div>
            <Link href="mailto:singhsimranpreet916@gmail.com" target='_blank' className=' underline underline-offset-2 '>Say hello</Link>
               
        </Layout>   
    </footer>
  )
}

export default Footer