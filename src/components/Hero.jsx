import React from 'react'

const Hero = () => {
  return (
    <>
    <div className="hero custom-h" style={{ backgroundImage: `url("https://images.unsplash.com/photo-1563381013529-1c922c80ac8d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1413&q=80")` }}>
      <div className="hero-overlay bg-opacity-80"></div>
      <div className="hero-content text-center text-white">
        <div className="max-w-xl">
          <h1 className="mb-5 text-7xl font-bold">Hello there</h1>
          <p className="mb-5 text-xl">Are you bored of netflix? Let's grab some popcorn and light up the theatres for the movies you and your mates been waiting for!!!</p>
        </div>
      </div>
    </div>
    </>
  )
}

export default Hero