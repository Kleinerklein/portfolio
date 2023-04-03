import React from 'react'
import { ObjectCanvas } from './canvas'

const Welcome = () => {
  return (

    <section className={`relative w-full h-screen mx-auto`}>
        <div className='mt-20 flex flex-col justify-center items-center '>
            <h1 className='text-7xl font-bold pt-10 px-10'>
                Welcome to my portfolio
            </h1>

            <p className='p-10'>
                My Name is Kleinerklein and I am a passionate Webdesigner. I created this Website to show some of my skills
            </p>
         </div>
       <ObjectCanvas />
    </section>
  )
}

export default Welcome