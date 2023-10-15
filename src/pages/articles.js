import React from 'react'
import Head from 'next/head'
import Layout from '@/components/Layout'
import AnimatedText from '@/components/AnimatedText'

const articles = () => {
  return (
    
    <>
    <Head>
     <title>Simranpreet Singh | About Page </title>
     <meta name="description" content=" any description" />
    </Head>
    <Layout className='pt-16' >
        <AnimatedText text="words can change the world! " className='mb-16' />
        
    </Layout>
    </>
    )
}

export default articles