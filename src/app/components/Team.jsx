'use client'
import React from 'react'
import {Image} from "@nextui-org/react";

export default function Team() {
    
    const team = [
        {
            name: "Ninja",
            role: "Founder",
            img:"./ninja.png",
            link:"https://www.linkedin.com/in/jozefjagan/"
        },
        {
            name: "Visionary",
            role: "Founder",
            img:"./visionary.png",
            link:"https://www.linkedin.com/in/krutika-lodaya/"
        },
        {
            name: "Advisor",
            role: "COO,Polkadex",
            img:"./advisor.png",
            link:"https://www.linkedin.com/in/deepanshconnect/"
        }
    ]
        
  return (
    <div className='w-[100vw] h-[100vh] flex flex-row justify-center items-center '>
        <div className=' bg-purple-950 w-[80%] h-[82%] rounded-xl p-5 pb-10 '>
        <h1 className='text-9xl font-bold mb-5 text-center'>Our Team</h1>
        <div className='flex flex-row justify-around '>
            {team.map((member) => (
                <div key={member.img} className='ml-5 bg-slate-300 rounded-3xl p-3'>
                <Image alt='pfps' src={member.img} width={300} onClick={() => window.open(member.link)} />
                <div className='flex flex-col items-center'>
                    <h1 className=' text-black text-5xl font-bold' >{member.name}</h1>
                    <h3 className=' text-slate-600 text-xl'>{member.role}</h3>
                </div>
            </div>
            ))}
            
        </div>
     </div>
    </div>
  )
}
