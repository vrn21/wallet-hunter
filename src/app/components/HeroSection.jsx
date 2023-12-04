import React from 'react'
import ButtonCTA from './ButtonCTA'

export default function HeroSection() {
    const styles = {
        background:"url('/bg1.png')"
    }
  return (
    <div className='flex  items-center  flex-col w-[100vw] h-[100vh]' style={styles}>
            <h1 className=' font-extrabold  text-8xl pt-[10%] '>Grow the web3 way</h1>
            <h3 className=' pt-5 text-4xl text-slate-400 max-w-[700px] text-center'>Marketing without data is like driving with your eyes closed.  <br/> ~Dan Zarrella</h3>
                <ButtonCTA text="Request a Marketing Audit ->" />
            
    </div>
  )
}
