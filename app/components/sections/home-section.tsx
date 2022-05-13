import React from 'react'

const HomeSection = () => {
  return (
    <section id='home' className='px-5vw'>
      <div className='container mx-auto'>
        <div className='relative px-4 py-16 sm:px-6 sm:py-24 lg:py-32 lg:px-8'>
          <h1 className='text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-7xl'>
            <span className='block bg-gradient-to-r from-purple-800 to-indigo-700 mix-blend-multiply text-transparent bg-clip-text'>
              Boston Smith
            </span>
            <span className='block text-black'>Full-Stack Web Developer</span>
          </h1>
          <p className='mt-6 max-w-lg mx-auto text-center text-xl text-gray-500 sm:max-w-3xl'>
            I'm a full stack web developer who has a passion for solving
            business problems with code. Let's start scrolling and learn more
            about me.
          </p>
        </div>
      </div>
    </section>
  )
}

export default HomeSection
