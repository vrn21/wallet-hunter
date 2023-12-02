"use client"
import React from 'react'
import {Navbar, NavbarBrand, NavbarMenuToggle, NavbarMenuItem, NavbarMenu, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import WalletHunter from './WalletHunterLogo';

export default function NavbarR() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  
  const menuItems = [
    "About us",
    "Our services",
    "FAQ",
    "Pricing",
    "Brands",
    "Contact Us"
  ]


  return (
    <div className=' rounded-lg mt-5px'>
      <Navbar isBordered isBlurred={true} isMenuOpen={isMenuOpen}  onMenuOpenChange={setIsMenuOpen} className='rounded-lg m-5px'>
          <NavbarContent>
            <NavbarMenuToggle
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            className="sm:hidden"
             />
          </NavbarContent>
            <NavbarBrand>
              <WalletHunter />
            </NavbarBrand>
          <NavbarContent />
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
          <NavbarItem>
            <Link color="foreground" href="#About us">
              About Us
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#services" aria-current="page">
              Our services
            </Link>
          </NavbarItem>
          <NavbarItem>
            <Link color="foreground" href="#">
              Integrations
            </Link>
          </NavbarItem>
        </NavbarContent>
        <NavbarContent justify="end">
          <NavbarItem className="hidden lg:flex">
            <Link href="#">Login</Link>
          </NavbarItem>
      </NavbarContent>
      </Navbar>

    </div>
  )
}
