"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import WalletHunter from './WalletHunterLogo';

export default function NavbarR() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);



  return (
    <div className='flex justify-center'>
      <Navbar isBordered isBlurred={true} isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen} shouldHideOnScroll className='rounded-lg bg-purple-700 mt-3  text-white justify-between items-end w-[60%]' >
          <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
             />
          </NavbarContent>
            <NavbarBrand >
              <WalletHunter />
            </NavbarBrand>
          <NavbarContent />
          <NavbarContent className="hidden sm:flex gap-6 text-md text-white pr-5" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#About us" className='text-white'>
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#services" aria-current="page"className='text-white'>
              Our services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#" className='text-white'>
              FAQ
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#pricing" className='text-white'>
              Pricing
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#brands" className='text-white'>
              Brands
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color='primary' href="#contact"className='text-blue-100'>
              Contact Us
            </Link>
          </NavbarItem>
        </NavbarContent>
      </Navbar>
      </div>
  )
}
