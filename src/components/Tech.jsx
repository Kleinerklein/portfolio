import React from 'react'

import { BallCanvas } from "./canvas"
import { technologies } from "../constants" 
import { SectionWrapper } from './hoc'

const Tech = () => {
  return (
    <div className='' > 
        <h2 className='font-bold text-black flex justify-center'>These are the programs I worked with in the past:</h2>
        <div className='flex flex row flex-wrap justify-center gap-10'>
            {technologies.map((technology) => (
                <div className='w-28 h-28' key={technology.name}>
                    <BallCanvas icon={technology.icon}/>
                </div>
            ))}
        </div>
    </div>
  )
}

export default SectionWrapper(Tech,'tech');