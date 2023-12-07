import React from 'react'
import {Checkbox} from "@nextui-org/react"


export default function Pricing() {
    const premium = [
        "Web3 Socials Setup and Management",
        "Introduction to Wallet-Wallet Communications and Building",
        "Content Strategy",
        "Engagement and Interactions",
        "Analytics and Monitoring",
    ]

    const elite = [
        "Premium++",
        "Project Discovery Listing",
        "Gamification Strategies",
        "NFT Marketing",
        "Web3 Brand Building",
        "White Paper/Lite paper/Yellow Paper Crafting",
        "Marketing Campaigns",
    ]

    const ultimate = [
        "Elite++",,
        "PPC & Social Ads & Crypto Ads Network",
        "Launching  Groups & Newsletters",
        "NFT Listing and Multiple Chain Campaigning",
        "Pitch Deck Creation",
        "Exchange Listings DEX/CEX",
        "Building Multiple Partnerships",
        "Fundraising Campaigns",
    ]

  return (
    <div className='w-[100vw] h-[100vh] flex-row justify-center align-middle gap-9 items-center'>
        <h1 className='text-9xl font-bold text-center p-[-100px] '>Pricing</h1>
        <div className='flex flex-row justify-center gap-9'>
        <div className='w-[400px] h-[600px] bg-gray-800 rounded-[30px] justify-between flex flex-col p-10 '>
            <h1 className='text-6xl font-bold text-center'>Premium</h1>
            <div className='p-1'>{
                    premium.map((item) =>{
                        return(
                            <div className='flex flex-row p-2' key={item}> 
                            <Checkbox  className='text-bold max-w-[300px] p-1 !text-white' size='lg' defaultSelected color="default"></Checkbox >
                            <h1>{item}</h1>
                            </div>
                        )
                    })
                }
            </div>    
            <h1 className='text-xl font-bold italic text-center'>$5000/month</h1>
            <button className='bg-purple-600 rounded-xl p-3 text-white font-bold'>Get Started</button>
            
        </div>
        <div className='w-[400px] h-[600px] bg-slate-800 rounded-[30px]'>
        <div className='w-[400px] h-[600px] bg-gray-800 rounded-[30px] justify-between flex flex-col p-10 '>
            <h1 className='text-6xl font-bold text-center'>Elite</h1>
            <div className='p-1'>{
                    elite.map((item) =>{
                        return(
                            <div className='flex flex-row p-2' key={item}> 


                            <Checkbox  className='text-bold max-w-[300px] p-1 !text-white' size='lg' defaultSelected color="default"></Checkbox >
                            <h1>{item}</h1>
                            </div>
                        )
                    })
                }
            </div>    
            <h1 className='text-xl font-bold italic text-center'>$5000/month</h1>
            <button className='bg-purple-600 rounded-xl p-3 text-white font-bold'>Get Started</button>
            
        </div>
            
        </div>
        <div className='w-[400px] h-[600px] bg-slate-800 rounded-[30px]'>
        <div className='w-[400px] h-[600px] bg-gray-800 rounded-[30px] justify-between flex flex-col p-10 '>
            <h1 className='text-6xl font-bold text-center'>Ultimate</h1>
            <div className='p-1'>{
                    ultimate.map((item) =>{
                        return(
                            <div className='flex flex-row p-2' key={item}> 


                            <Checkbox className='text-bold max-w-[300px] p-1 !text-white' size='lg' defaultSelected color="default"></Checkbox >
                            <h1>{item}</h1>
                            </div>
                        )
                    })
                }
            </div>    
            <h1 className='text-xl font-bold italic text-center'>$Custom/month</h1>
            <button className='bg-purple-600 rounded-xl p-3 text-white font-bold'>Talk to us!</button>
            
        </div>
            
        </div>
        </div>
        
    </div>
  )
}
