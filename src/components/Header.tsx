import React from 'react'



function Header() {
const gap = "flex gap-4 font-bold items-center justify-center";

  return (
    <header className="h-[70px] p-5 border-b border-white/90 flex justify-between items-center relative z-30 px-10 md:px-20">
      <div className="left ">
        <p className="logo">khawaab</p>
      </div>
      <nav className='hidden md:flex gap-4 font-bold items-center justify-center'>
        <a href="#whoWeAre">Who we are</a>
        <a href="#whatWeDo">What we do</a>
        <a href="#News">News&Events</a>
      </nav>
      <div className={`right ${gap}`}>
        <a href="#donate">Donate</a>
        <a href="#contact">Contact</a>
      </div>
    </header>
  );
}




export default Header