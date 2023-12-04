import React from 'react'

export default function AboutUs() {
    const styles = {
        background:"url('/bg2.png')"
    }
  return (
    <div className=' w-[100vw] h-[100vh] flex flex-col justify-center' style={styles}>
        <div className=' ml-[100px]'>
            <h2 className='text-9xl font-bold'>About Us</h2>
            <p className='max-w-[600px] text-3xl pt-4 pl-10 text-slate-400'>In a realm where innovation meets understanding, our company sculpts full-fledged personas for wallet addresses. We imbue them with personality, adorning each with tags like “DEX Trader” and “Gaming NFT Whale,” enabling Web3 projects to find kindred spirits</p>
        </div>
    </div>
  )
}
