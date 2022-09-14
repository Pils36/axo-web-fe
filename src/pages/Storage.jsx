import React, {useState} from 'react'
import ConsultBtn from '../components/Buttons/ConsultBtn'
import QuoteBtn from '../components/Buttons/QuoteBtn'
import Footer from '../components/Footer'
import store from "../components/store.png"
import Boxes from "../components/boxes.png"
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import { FaSearch } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Search from '../components/searchbar/Search'
import Quoy from '../components/Buttons/Quoy'

const Storage = () => { 
   const [active, setActive] = useState (false)
    const showMenu = () => {
        setActive(!active)
    }


  return (
    <div>
      <div className='bg-storeee h-screen bg-cover mb-80 md:bg-top bg-center'>
      <div  className='flex justify-between'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10'>
            <div>
               <Search />
            {/* <FaSearch className='text-white scale-100' /> */}
            </div>
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
              <path stroke-linecap="round" stroke-linejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
          </div>
        </div> 
      <Nav showMenu={showMenu} active={active}/>
         <div>
            <div className='flex-col justify-center md:flex-col md:justify-center text-center text-white py-32 transition-all'>
               <h1 className='text-3xl md:text-5xl font-bold mb-8'>Moving & Storage Services that give <br /> you peace of mind</h1>
               <p className='text-lg px-8 md:text-2xl font-base'>Let Our Storage experts take good care of your <br /> valuable goods while you travel or find a new place</p>
            </div>

            <div className='px-6 w-full py-20 flex-col justify-center items-center text-center bg-white'>
               <h1>Storage has never been this nice</h1>
               <p>Axopolitan moving and storage keeps you rest assured that your precious <br /> possessions are in good hands</p>
               <div className='flex justify-center gap-8 mt-4'>
                  <Link className='no-underline' to='/freequote'><QuoteBtn /></Link>
                  <Link className='no-underline' to='/consultation'><Quoy /></Link>
               </div>
            </div>

            <div className='mx-3 md:flex md:w-full'>
               <img src={store} alt=""  className='pb-4 md:w-1/2'/>
               <div className='md:px-14 py-7'>
                  <h1 className='md:text-4xl font-bold'>We are here for all your storage needs!</h1>
                  <p className='md:text-2xl font-light'>Having troubles with where to keep your things while your travel, find a new home or even renovate your house? Thanks to us! You can be sure to find us ready to store your items safe regardless of how many they are. This means you can take a dream vacation or take the time to find your dream home while your things stay safe and intact in our climate controlled warehouses.</p>
               </div>
            </div>
            <div className='w-full bg-blue-900 h-1'></div>

            <div className='mx-3 md:flex md:w-full md:my-20'>
               <img src={Boxes} alt=""  className='pb-4 md:w-1/2'/>
               <div className='md:px-14 py-7'>
                  <h1 className='md:text-4xl font-bold'>Why store with us?</h1>
                  <div>
                     <h2 className='font-bold'>A home away from home</h2>
                     <p className='text-gray-400'>As one of the leading moving companies in Lagos, we would ensure your possessions are kept safe. All your items are wrapped padded and protected with utmost care and kept on custom shelves away from any potential damage. To move your items, we have dedicated moving experts who would handle the moving process to storage from start-to-ﬁnish and we'd keep them protected until you’re ready to move into your new home.</p>
                  </div>
                  <div>
                     <h2 className='font-bold'> Tailor-Fit For Your Needs</h2>
                     <p className='text-gray-400'>When looking for storage services, look no further. We won’t just store your things, we ensure we store your possessions exactly to your needs. Our team understands how people might want to be extra detailed with how they want their belongings to be stored and maintained, you may not ﬁnd this with other services. You can be rest assured that we will tailor-ﬁt your storage to your needs.</p>
                  </div>
               </div>
            </div>


            <div className='px-3 my-9'>
               <h1 className='md:text-5xl'>Best Moving & Storage Services In Lagos</h1>
               <p className='font-bold text-slate-600'>From enquiry, Axopolitan’s experienced team of professional movers will organize a seamless moving and storage service for your home or ofﬁce, making the transition smooth, efﬁcient and easy. Our mission is to make your move a stress-free one!</p>
               <button className='capitalize bg-blue-500 py-2 px-3 rounded-md text-white hover:bg-blue-700 hover:text-black'>get started</button>
            </div>
         </div>
         <Footer />
      </div>
    </div>
  )
}

export default Storage