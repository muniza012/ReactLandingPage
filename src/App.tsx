import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';


function App() {
  return (
    <>
      <main className='main relative '>
        <div className='absolute inset-0 bg-black/30 '></div>
        <Header />
        <Hero />
      </main>
   
    </>
  );
}

export default App;
