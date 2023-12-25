import React from 'react'
import { Instagram, Youtube, Linkedin, Mail } from 'react-feather';

export default function Footer() {
  const iconStyle = {
    strokeWidth: 1,
    // Add other styles if needed
  };
  return (
    <div className='footer py-4'>
     <div className='text-center'>
     <a> <Instagram size={32} color='#fff' className='icon' style={iconStyle} /></a>
       <a><Youtube size={32} color='#fff' className='icon ms-3' style={iconStyle} /></a>
       <a> <Linkedin size={32} color='#fff' className='icon  ms-3' style={iconStyle} /></a>
       <a> <Mail size={32} color='#fff' className='icon  ms-3' style={iconStyle} /></a>
      <p className='mt-4 text-white'>© Copyright 2023 <span style={{color:'red'}}>"The Web Designer"!</span></p>

     </div>
    </div>
  )
}
