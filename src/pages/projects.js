import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import { GithubIcon } from '@/components/icons'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import project1 from '../../public/images/projects/project(open cv).jpeg';
import TransitionEffect from '@/components/TransitionEffect'
const FeaturedProject= ({type,title,summary,img,link,github}) =>{
  return(
    <article className='w-full flex items-center justify-between relative rounded-br-2xl 
     rounded-2xl border border-solid border-dark bg-light shadow-2xl p-12
     lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4
     ' >
                  <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem] bg-dark rounded-br-3xl xs:-right-2 sm:h-[102%] xs:w-full xs:rounded-[1.5 rem] '/>

      <Link href={link} target='_blank' className='w-1/2 cursor-pointer overflow-hidden rounded-lg lg:w-full '>
        <Image src={img} alt={title} className='w-full h-auto' />
      </Link>
      <div className='w-1/2 flex flex-col items-start justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6 ' >
        <span className='text-primary font-medium text-xl  xs:text-base ' >{type}</span>
        <Link href={link} target='_blank' className='hover:underline underline-offset-2' >
          <h2 className='my-2 w-full text-left text-4xl font-bold sm:text-sm ' >{title}</h2>
        </Link>
      <p className='my-2 font-medium text-dark sm:text-sm ' >{summary}</p>
      <div className='my-2 flex items-center '>
      <Link href={github} target='_blank' className='w-10'><GithubIcon/></Link>
      <Link href={link} target='_blank' className='ml-4 rounded-lg bg-dark text-light px-2 text-lg font-semibold sm:px-4 sm:text-base ' >Visit Project</Link>
      </div>
      </div>
    </article>
  )

}

const projects = () => {
  return (
    <>
    <Head>
    <title>Simranpreet Singh | Projects Page </title>
     <meta name="description" content=" any description" />
    </Head>
    <TransitionEffect/>
    <main className='w-full mb-16 flex flex-col items-center justify-center' >
      <Layout className='pt-16' >
        <AnimatedText text="Imagination Trumps Knowledge! " className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl ' />
        <div className='grid grid-cols-12 gap-24 gap-y-32  xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0 ' >
          <div className='col-span-12'>
          <FeaturedProject
         title='Face Detection Using OpenCv'
         summary="The system was developed using Python, OpenCV, and Haar Cascades to identify and locate individuals' faces in photographs.
 "
          link="/"
          github="https://github.com/Simran-1313"
          type="Featured Project"
          img={project1}
                    />
          </div>
          
        </div>
      </Layout>
    </main>
    </>
  )
}

export default projects