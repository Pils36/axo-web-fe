import React, { useState } from 'react'
import Footer from '../components/Footer'
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import Commercials from '../components/commercials.jpg'
import ConsultBtn from '../components/Buttons/ConsultBtn'
import GetQuoye from '../components/Buttons/GetQuoye'

const Commercial = () => {
  
  const [active, setActive] = useState (false)
  const showMenu = () => {
      setActive(!active)
  }
  return (
    <div>
      <div className='bg-commercial-bg h-screen bg-cover md:bg-top bg-center'>
      <div  className='flex justify-between px-20'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10 cursor-pointer'>
            {/* <FaSearch className='text-white scale-100' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
          </div>
        </div>
      <Nav showMenu={showMenu} active={active}/>
      <div className='text-white text-center py-48'>
        <h1 className='capitalize text-center text-white text-4xl font-bold'>we know work can be stressful. moving <br /> shouldn't be.</h1>
        <p className='font-light text-2xl py-3'>Let our expert movers give your office a successful move</p> 
        <div className='text center flex justify-center items-center'>
          <ConsultBtn />
        </div>
      </div>
      </div>
      <div className='text-center py-10 border-b border-black/25'>
        <h1 className='text-4xl font-bold'>We'll take your business into its new home</h1>
        <p className='font-semibold text-xl py-3 text-black/50'>Got a new space for the business? Axopolitan's commercial <br /> movers have exactly what you need to get started on the right <br /> foot.</p>
        <div>
          <GetQuoye />
        </div>
      </div>

      <div className='mx-20 flex gap-10 py-20'>
        <img src={Commercials} alt="" className='text-black w-1/2 h-2/3'/>
        <div className='flex-col items-center'>
          <h1 className='text-5xl font-bold pb-3'>Commercial movers <br /> you can trust.</h1>
          <p className='text-black/50 text-xl font-semibold font-[Gotham Book]'>There's a reason we're the most preferred <br /> where it concerns ofﬁce moves. Our years of <br /> moving experience combined with an <br /> affordable, stress-free experience makes for the <br /> best commercial moving experience you can <br /> get out there. Whether you’re moving your <br /> business from a 20th ﬂoor or an entire building, <br /> Axopolitan is the top-notch commercial moving <br /> company for businesses of all sizes.</p>
          <div>
            <ConsultBtn />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Commercial