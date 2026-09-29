import React from 'react'
import Button from './Button';

function Hero() {
  return (
    <div className="hero flex items-center justify-center mt-[130px] flex-col gap-[40px] relative z-30 px-10 md:px-20">
      <div className="flex flex-col items-center justify-center h-[200px] w-full text-center">
        <h1 className="text-5xl md:text-7xl font-bold">Together,</h1>
        <span className="text-2xl md:text-4xl mt-3 font-bold block">
          we can turn compassion into real change.
        </span>
      </div>

      <div className="hero-bt  flex gap-5">
        <Button variant="primary">Donate</Button>
        <Button variant="secondary">learn more</Button>
      </div>
    </div>
  );
}

export default Hero