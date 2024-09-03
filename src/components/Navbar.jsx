import React from 'react'

const Navbar = () => {
  return (
    <>
    <nav className='flex h-10 bg-slate-500'>
      <div className='flex justify-between'>
        <div>
            <div>Ems Client</div>
        </div>
            <div>
              <div>Home</div>
              <div>About</div>
              <div>Service</div>
              <div>Contact</div>
            </div>
      </div>
      </nav>
    </>
   
  )
}

export default Navbar