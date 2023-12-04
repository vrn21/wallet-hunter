import React from 'react'

export default function Transition() {
    const styles = {
        background:"url('/bg3.png')"
    }
  return (
    <div className='w-[100vw] h-[100vh] flex flex-col justify-center'style={styles}>
        <div className='flex felx-row justify-end'>
            <h1 className='text-9xl font-bold'>Seamless<br /> Web3<br /> Adoption</h1>
            <p className='max-w-[600px] text-3xl pt-4 pl-10 text-slate-400 max-w-sm flex items-center'>At Wallet Hunter, we specialize in strategic Web3 marketing solutions, tailored to your digital presence, and aligned with the specific demands of the Web3 landscape.</p>


        </div>
    </div>
  )
}
