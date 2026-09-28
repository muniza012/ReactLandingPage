import React from 'react'


interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary";
  children?: React.ReactNode;
}
function Button({
  children,
  variant='primary',
  ...props
  
  }:ButtonProps) {
  
  const black_btn = 'bg-black text-white';
  const white_btn='border border-black text-black'
  return (
    <button
      {...props}
      className={`px-8 py-2 rounded-xl font-medium z-30  ${variant === "primary" ? black_btn : white_btn}`}
    >
      {children}
    </button>
  );
}

export default Button