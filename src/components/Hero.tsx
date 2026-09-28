import React from 'react'
import Button from './Button';

function Hero() {
  return (
    <div className="hero flex items-center justify-center mt-[100px] flex-col gap-[40px] z-30">
     
        <h1 className="text-7xl font-bold flex flex-col items-center justify-center">
          Together,
          <span className="text-4xl mt-3 font-bold">
            we can turn compassion into real change.
          </span>
        </h1>
  
      <div className="hero-bt  flex gap-5">
        <Button variant="primary">Donate</Button>
        <Button variant="secondary">learn more</Button>
      </div>
    </div>
  );
}

export default Hero