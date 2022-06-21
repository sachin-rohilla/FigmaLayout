import React from 'react'
import './Footer.css'

const Footer = () => {
  return (
    <>
    <div className='footer-container'>
        <div><p>Request a Callback</p></div>
        <div><input type="text" placeholder='Your Name' className='footer-input'/></div>
        <div><input type="text" placeholder='Your Phone Number' className='footer-input'/></div>
         <div><button className='footer-btn'>Submit</button></div>
    </div>
    </>
  )
}

export default Footer