import React from 'react'
import Header from './components/Header';
import Hero from './components/Hero';
import WhoWeAre from './components/WhoWeAre';
import childrenImg from './assets/childrenImg.jpg'
import food from './assets/food.jpg'
import education from './assets/education.jpg'
import helpCommunities from './assets/helpCommunities.jpg'
import supportFamilies from './assets/supportFamilies.jpg'
import WhatWeDo from './components/WhatWeDo';
import Footer from './components/Footer';


function App() {
  return (
    <>
      <main className="main relative mb-5 ">
        {/* <div className="absolute inset-0 bg-black/30 "></div> */}
        <Header />
        <Hero />
      </main>
      <WhoWeAre
        image={childrenImg}
        head="We believe every act of kindness can create a lasting change."
        para="  Khawaab is a community-driven charity committed to supporting people
        and communities facing difficult circumstances. We connect compassion
        with meaningful action, turning donations and volunteer efforts into
        practical support for those who need it most."
        variant="primary"
        btnText="Learn more about our work →"
      />
      <div className="whatwedo bg-gray-200 mt-10  grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 min-h-screen items-center gap-10 px-10 md:px-20">
        <WhatWeDo
          img={food}
          head="Support Families"
          des="We provide essential support to families facing financial hardship, helping them meet their everyday needs."
          btn="read more"
        />
        <WhatWeDo
          img={supportFamilies}
          head="Provide Food"
          des="We distribute nutritious meals and food packages to individuals and communities experiencing food insecurity."
          btn="read more"
        />
        <WhatWeDo
          img={helpCommunities}
          head="Empower Through Education"
          des="We help children and young people access educational resources and opportunities for a brighter future."
          btn="read more"
        />
        <WhatWeDo
          img={education}
          head="Help Communities"
          des="We support vulnerable communities through essential resources that create lasting positive change."
          btn="read more"
        />
      </div>
      <Footer />
    </>
  );
}

export default App;
