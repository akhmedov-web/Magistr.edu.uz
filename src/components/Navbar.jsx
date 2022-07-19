import React, { useState } from 'react';
import { Icon } from 'react-icons-kit'
import { menu } from 'react-icons-kit/feather/menu'
import { x } from 'react-icons-kit/feather/x'
const HomeNavbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)
  const toggleNav = () => {
    setToggleMenu((e) => !e)
  }



<<<<<<< HEAD:src/components/Home/HomeNavbar.jsx
=======
export default function Navbar() {
>>>>>>> 69b215395732f5941503c19fbda95bcf003eaa9c:src/components/Navbar.jsx
  return (
    <div className={ toggleMenu ? 'HomeNavbar col-12 expanded' : 'HomeNavbar'}>
      <div className='logo'> <span> Magistr.edu.uz</span></div>

      <ul>
        <li>Asosiy</li>
        <li>Imtiyozlar</li>
        <li>Yangiliklar</li>
        <li>Statistika</li>
        <button className='btn1'>Kirish </button>
      </ul>

      <div className="toggle-icon" onClick={toggleNav}>
        {toggleMenu ? <Icon icon={x} size={28} /> : <Icon icon={menu} size={28} />}
      </div>

    </div>
  );
};

export default HomeNavbar;