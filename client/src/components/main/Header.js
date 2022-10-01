import React from 'react'
import Logo from '../../assets/images/logo.svg';

export default function Header() {
  return (
    <section id="navigation" className="flex">
        <div className='container'>
            <div className="logo">
                <img src={Logo} alt="" />
            </div>
        
        </div>
        <div>Hello</div>
    </section>
  )
}
