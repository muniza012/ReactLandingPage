import React from 'react'



function Header() {
const gap = "flex gap-4 font-bold items-center justify-center";

  return (
    <header className="h-[80px] p-5 border-b border-white/90 flex justify-between z-30">
      <div className="left ">
        <p className="logo">khawaab</p>
      </div>
      <nav className={`center ${gap}`}>
        <a href="#home">Who we are</a>
        <a href="#about">What we do</a>
        <a href="#how-it-works">News&Events</a>
      </nav>
      <div className={`right ${gap}`}>
        <a href="#donate">Donate</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}




export default Header