import React, { useState } from 'react'
import Footer from '../components/Footer'
import ImageOne from "../images/custom-icons-00.png"
import ImageTwo from "../images/custom-icons-01.png"
import ImageThree from "../images/custom-icons-11.png"
import ImageFour from "../images/custom-icons-12.png"
import ImageFive from "../images/custom-icons-22.png"
import ImageSix from "../images/custom-icons-23.png"
import ImageSeven from "../images/service-icons-0.png"
import ImageEight from "../images/service-icons-00.png"
import ImageNine from "../images/service-icons-1.png"
import ImageTen from "../images/service-icons-11.png"
import ImageEleven from "../images/service-icons-2.png"
import ImageTwelve from "../images/service-icons-22.png"
import Thirteen from "../images/service-icons-3.png"
import Fourteen from "../images/service-icons-33.png"
import Fifteen from "../images/service-img.png"
import Header from "../components/Header"
import { Link } from 'react-router-dom'
import FreeQuote from '../components/Buttons/FreeQuote'
import { createPopper } from "@popperjs/core"



const Home = () => {

  const [dropdownPopoverShow, setDropdownPopoverShow] = React.useState(false);
  const btnDropdownRef = React.createRef();
  const popoverDropdownRef = React.createRef();
  const openDropdownPopover = () => {
    createPopper(btnDropdownRef.current, popoverDropdownRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(true);
    setDropdownPopoverShowOne(false);
    setDropdownPopoverShowTwo(false);
    setDropdownPopoverShowThree(false);
  };
  const closeDropdownPopover = () => {
    setDropdownPopoverShow(false);
  };



  const [dropdownPopoverShowOne, setDropdownPopoverShowOne] = React.useState(false);
  const btnDropdownOneRef = React.createRef();
  const popoverDropdownOneRef = React.createRef();
  const openDropdownPopoverOne = () => {
    createPopper(btnDropdownOneRef.current, popoverDropdownOneRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(false);
    setDropdownPopoverShowOne(true);
    setDropdownPopoverShowTwo(false);
    setDropdownPopoverShowThree(false);
  };
  const closeDropdownPopoverOne = () => {
    setDropdownPopoverShowOne(false);
  };
 
  const [dropdownPopoverShowTwo, setDropdownPopoverShowTwo] = React.useState(false);
  const btnDropdownTwoRef = React.createRef();
  const popoverDropdownTwoRef = React.createRef();
  const openDropdownPopoverTwo = () => {
    createPopper(btnDropdownTwoRef.current, popoverDropdownTwoRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(false);
    setDropdownPopoverShowOne(false);
    setDropdownPopoverShowTwo(true);
    setDropdownPopoverShowThree(false);
  };
  const closeDropdownPopoverTwo = () => {
    setDropdownPopoverShowTwo(false);
  };


  const [dropdownPopoverShowThree, setDropdownPopoverShowThree] = React.useState(false);
  const btnDropdownThreeRef = React.createRef();
  const popoverDropdownThreeRef = React.createRef();
  const openDropdownPopoverThree = () => {
    createPopper(btnDropdownThreeRef.current, popoverDropdownThreeRef.current, {
      placement: "bottom-start"
    });
    setDropdownPopoverShow(false);
    setDropdownPopoverShowOne(false);
    setDropdownPopoverShowTwo(false);
    setDropdownPopoverShowThree(true);
  };
  const closeDropdownPopoverThree = () => {
    setDropdownPopoverShowThree(false);
  };

  return (
    <div>
      <Header />
        <div className="custom-section-first-hold">
      <div className="container">
        <div className="row">
          <div className="">
            <div className="text-center">
              <h2 className="text-[#3224AF] text-5xl font-bold">Axopolitan. It's more than just a move.</h2>
              <p className='text-lg font-semibold'>When moving day comes, you know we've got your back</p>
            </div> 
          </div>
        </div>

        <div className='my-2 md:flex justify-center mx-10 gap-10 md:my-12'>
        <Link className='no-underline hover:text-white' to='/localmoving'>
          <div className='mb-3 bg-white shadow-md pb-2 cursor-pointer hover:bg-gradient-to-b from-[#C46BD6] via-[#3224AFCC] to-[#3927B1]'>
            <img src={ImageOne} alt="" className='scale-50' />
            <h1 className='text-[#3224AF] text-2xl font-bold pl-8 hover:text-white'>Local <br /> moving</h1>
            <p className='font-thin pl-8 mr-20'>Moving within the <br /> island or mainland or <br /> from either side? <br /> We're your favourite <br /> choice and we've got <br /> you!</p>
          </div> </Link>
          <Link className='no-underline hover:text-white' to='/commercialmoving'>
          <div className='mb-3 bg-white pb-2 shadow-md cursor-pointer hover:bg-gradient-to-b from-[#C46BD6] via-[#3224AFCC] to-[#3927B1]'>
            <img src={ImageThree} alt="" className='scale-50' />
            <h1 className='text-[#3224AF] text-2xl font-bold pl-8 hover:text-white'>Commercial <br /> moving</h1>
            <p className='font-thin pl-8 mr-20'>New achievements <br /> for the business? <br /> We're experts in <br /> ofﬁce relocation and <br /> we won't loose a <br /> paper clip</p>
          </div></Link>
          <Link className='no-underline hover:text-white' to='/storage'>
          <div className='bg-white pb-[2px] shadow-md cursor-pointer hover:bg-gradient-to-b from-[#C46BD6] via-[#3224AFCC] to-[#3927B1]'>
            <img src={ImageFive} alt="" className='scale-50' />
            <h1 className='text-[#3224AF] text-2xl font-bold pl-8 hover:text-white'>Moving and <br /> Storage services</h1>
            <p className='font-thin pl-8 mr-20'>Need more room for <br /> what you love? Need a <br /> space to keep your <br /> stuffs while you travel <br /> or ﬁnd a new home? <br /> We've got you covered!</p>
          </div></Link>
        </div>
      </div>
    </div>
    <div className="custom-second-section">
      <div className="border-layers"></div>
      <div className="container">
        <div className="row">
          <div className="text-center">
            <div className="">
              <h3 className='text-2xl text-[#3224AF]'>
                We're one of the best moving companies you'll ﬁnd in Lagos
              </h3>
              <p className='text-xl font-semibold'>You'll enjoy several beneﬁts by choosing us.</p>
            </div>
          </div>
        </div>
      <div>
      </div>
      </div>
    </div>
      {/* services section */}
      <div className='mb-52'> 
        <div className='flex justify-center gap-5 mr-16 cursor-pointer'>
          <div className=''> 
              <div 
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShow
                    ?closeDropdownPopover()
                    :openDropdownPopover()
                }}
                >{
                dropdownPopoverShow ?
                <img src={ImageEight} className='w-20 h-16 ml-[105px] rounded-t-md' alt="" /> : <img src={ImageSeven} className='w-16 h-16 ml-[105px] rounded-t-md' alt="" /> 
                }
              </div>
              <div  ref={popoverDropdownRef} className={(dropdownPopoverShow ? "block" : "hidden")}>
                <h1 className='text-lg flex text-center ml-10'>Simple and Affordable <br /> pricing for all move types</h1>
                <p className='text-sm text-black/50 text-center ml-10'>Moving doesn't have to cost you <br /> a fortune. With our simple and <br /> affordable pricing options, you'd <br /> get the best value for your move at <br /> a fair price with no hidden charges. <br /> We are a moving company that <br /> puts your happiness as a top <br /> priority.</p>
              </div>
          </div>


          <div className=''> 
              <div 
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShowOne
                    ?closeDropdownPopoverOne()
                    :openDropdownPopoverOne()
                }}
                >{
                dropdownPopoverShowOne ?
                <img src={ImageTen} className='w-20 h-16 ml-[105px] rounded-t-md' alt="" /> : <img src={ImageNine} className='w-16 h-16 ml-[105px] rounded-t-md' alt="" /> 
                }
              </div>
              <div  ref={popoverDropdownRef} className={(dropdownPopoverShowOne ? "block" : "hidden")}>
                <h1 className='text-lg flex text-center ml-16'>Top rated & Great <br /> reputation</h1>
                <p className='text-sm text-black/50 text-center ml-10'>Over the years, we have assisted <br /> thousands move seamlessly and <br /> have build a good reputation. <br /> We know what customers need <br /> when moving day comes and we <br /> provide just that. Sounds too <br /> good to be true? check out our <br /> reviews and ask customers who <br /> would happily refer their friends <br /> and family.</p>
              </div>
          </div>


          <div className=''> 
              <div 
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShowTwo
                    ?closeDropdownPopoverTwo()
                    :openDropdownPopoverTwo()
                }}
                >{
                dropdownPopoverShowTwo ?
                <img src={ImageTwelve} className='w-20 h-16 ml-[105px] rounded-t-md' alt="" /> : <img src={ImageEleven} className='w-16 h-16 ml-[105px] rounded-t-md' alt="" /> 
                }
              </div>
              <div  ref={popoverDropdownRef} className={(dropdownPopoverShowTwo ? "block" : "hidden")}>
                <h1 className='text-lg flex text-center ml-16'>Excellent customer <br /> service relation</h1>
                <p className='text-sm text-black/50 text-center ml-10'>From the moment you reach out <br /> to us, know you're fully backed <br /> with a 5- star customer support <br /> team, we would go the extra <br /> mile to ensure your moving <br /> experience is a pleasurable one <br /> that rings a bell with Axopolitan <br /> Moving</p>
              </div>
          </div>

          <div className='mb-32'> 
              <div 
                ref={btnDropdownRef}
                onClick={() => {
                  dropdownPopoverShowThree
                    ?closeDropdownPopoverThree()
                    :openDropdownPopoverThree()
                }}
                >{
                dropdownPopoverShowThree ?
                <img src={Fourteen} className='w-20 h-16 ml-[105px] rounded-t-md' alt="" /> : <img src={Thirteen} className='w-16 h-16 ml-[105px] rounded-t-md' alt="" /> 
                }
              </div>
              <div  ref={popoverDropdownRef} className={(dropdownPopoverShowThree ? "block" : "hidden")}>
                <h1 className='text-lg flex text-center ml-10'>Tailored moving service</h1>
                <p className='text-sm text-black/50 text-center ml-10 mb-20'>Experience great ﬂexibility <br /> options with Axopolitan moving. <br /> Whether you need a packing <br /> and unpacking service, furniture <br /> disassembling and reassembling, <br /> moving grand pianos or special <br /> crating for exporting and <br /> whatever may pose as a <br /> nightmare with moving. Let us <br /> know what you want and we'll <br /> tailor our service to meet your <br /> needs.</p>
              </div>
          </div>
        </div>
      </div>
      {/* services section end */}

    <div className='border-t'>
      <div className='px-20 mt-9'>
        <h1 className='text-lg pl-[65px] text-[#1905BE] md:text-4xl font-bold'>Let's create a stress-free moving <br /> experience for you</h1>
      </div>
      <div className='md:flex justify-between gap-36 mx-36 my-3'>
        <div>
          <h1 className='font-semibold text-lg text-black/40'>We'll help you navigate the stress of moving</h1>
          <p className='text-black/90 text-base'>When you desire to have seemless moving experience, you <br /> want Axopolitan Moving. We are the most ideal team in the <br /> business because we have the friendliest and most helpful <br /> movers who take their time to meet the desires of customers. <br /> Here's what you can expect:</p>
          <ul className='text-black font-semibold list-disc'>
            <li>Highly trained and professional team.</li>
            <li>Excellent packing and unpacking service</li>
            <li>Extra careful protection on items</li>
            <li>Greater efficiency</li>
            <li>Customer service</li>
          </ul>
          <FreeQuote />
        </div>
        <img src={Fifteen} alt="" className='text-white w-96 h-96' />
      </div>
    </div>
    <Footer />
    </div>
  )
}

export default Home