import React from 'react'
import ButtonCTA from './ButtonCTA'

export default function HeroSection() {
  return (
    <div className='flex justify-center items-center pt-[15%] flex-col'>
            <h1 className=' font-extrabold  text-9xl '>Grow the web3 way</h1>
            <h3 className=' pt-5 text-4xl text-slate-400 max-w-[700px] text-center'>Marketing without data is like driving with your eyes closed.  <br/> ~Dan Zarrella</h3>
                <ButtonCTA text="Request a Marketing Audit ->" />
            
    </div>
  )
}
