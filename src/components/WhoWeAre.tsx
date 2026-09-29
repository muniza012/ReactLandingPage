import React from 'react'
import Button from './Button';

interface WhoWeAreProps {
  image: string;
  head: string;
  para: string;
  variant: "primary" | "secondary";
  btnText: string;
}

function WhoWeAre({image,head,para,variant,btnText}:WhoWeAreProps) {
  return (
    <div className="who-we-are  grid grid-cols-1 md:grid-cols-2 min-h-screen items-center gap-10 px-10 md:px-20">
     
        <img src={image} alt="" className="w-full h-[400px] object-cover rounded-xl" />
      <div className="text flex flex-col gap-10  justify-start">
          <h2 className='text-3xl font-bold'>{head}</h2>
          <p className='text-gray-500'>{para}</p>
          <Button variant={variant}>{btnText}</Button>
        </div>
 
    </div>
  );
}

export default WhoWeAre