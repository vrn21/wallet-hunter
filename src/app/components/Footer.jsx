import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import {Image} from "@nextui-org/react";
import TwitterX from './TwitterX';
import WalletHunter from './WalletHunterLogo';

export default function Footer() {
  return (
    <div className='mt-10 bg-slate-600 flex flex-col justify-center h-[40vh] items-center'>
        <div className=''>
            <WalletHunter/>
        </div>
        <div className='flex flex-row gap-5 text-slate-400 '>
            <ul className='hover:text-white hover:cursor-pointer'>About</ul>
            <ul className='hover:text-white hover:cursor-pointer'>Blog</ul>
            <ul className='hover:text-white hover:cursor-pointer'>Jobs</ul>
            <ul className='hover:text-white hover:cursor-pointer' >Press</ul>
            <ul className='hover:text-white hover:cursor-pointer'>Accesibility</ul>
            <ul className='hover:text-white hover:cursor-pointer'>Partners</ul>
        </div>
        <div className='flex flex-row gap-5'>
            <FacebookIcon className='text-slate-400 hover:text-white hover:cursor-pointer'/>
            <InstagramIcon className='text-slate-400 hover:text-white hover:cursor-pointer'/>
            <TwitterX />

        </div>
    </div>
  )
}
