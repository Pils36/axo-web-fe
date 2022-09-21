import React, {useState} from 'react'
import LogoMenu from '../components/LogoMenu'
import Nav from '../components/Nav'
import Building from '../components/building.png'
import Lorry from '../components/lorry.png'
import Badge from '../images/badge.png'
import Service from '../images/localcust.png'
import Care from '../images/localcare.png'
import BoxOne from '../images/box00.png'
import BoxTwo from '../images/box01.png'
import StepOne from '../images/step1.png'
import StepTwo from '../images/step2.png'
import StepThree from '../images/step3.png'
import StepFour from '../images/step4.png'
import Footer from '../components/Footer'
import FreeQuote from '../components/Buttons/FreeQuote'


const Local = () => {
  const [active, setActive] = useState (false)
  const showMenu = () => {
      setActive(!active) 
  }
  return (
    <div>
      <div className='bg-local-bg h-screen bg-cover md:bg-top bg-center'>
      <div  className='flex justify-between px-16'>
          <LogoMenu />
          <div className='flex gap-20 items-center mx-10'>
            {/* <FaSearch className='text-white scale-100' /> */}
              <svg xmlns="http://www.w3.org/2000/svg" onClick={showMenu} className="h-6 w-6 text-white scale-100 cursor-pointer" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h7" />
              </svg>
          </div>
        </div>
      <Nav showMenu={showMenu} active={active}/>

      <div className='pl-20 py-20'>
        <h1 className='text-white text-5xl pl-8'>Let us Move you to</h1>
        <h2 className='text-white text-5xl pl-8'>Your New Life.</h2>
        <p className='text-white text-xl py-3 pl-8'>Whether you’re moving within the mainland or island, or from either side. we’ve got you.</p>
        <div className='mx-8 my-5'>
                <form className='bg-white mr-[350px] py-1 flex gap-8'>
                  <div className='w-56 px-3 py-2 ml-3 rounded-md'>
                    <span className='pl-2 text-base font-extrabold uppercase'>Moving From</span>
                    <input type="text" placeholder='Enter Current Address' className='text-black pl-2 focus:bg-gray-300 rounded-md'/>
                  </div>
                    {/* <div className='w-1 h-2'></div> */}
                  <div className='w-56 px-3 py-2 ml-1 rounded-md'>
                    <span className='pl-2 text-base font-extrabold uppercase'>Moving To</span>
                    <input type="text" placeholder='Enter Destination' className='text-black pl-2 focus:bg-gray-300 rounded-md'/>
                  </div>
                  <FreeQuote />
                </form>
              </div>
      </div>
      </div>

      <div className='border-b border-gray-300'>
        <div className='flex gap-10 justify-center mx-10 my-10'>
          <div>
            <h1 className='text-3xl text-[#5A96DF] font-bold mb-9'>Let’s show you how to <br /> make your move in Lagos <br /> a pleasing one</h1>
            <p className='text-black/50 font-semibold'>When choosing the best Movers in Lagos, know <br /> Axopolitan moving is the favorite choice take our <br /> time to understand your needs and pain because <br /> we point. We are experts with a proven track <br /> record of friendly, professional and timely moving <br /> services. Let Us Create a Stress-Free Moving <br /> Experience for You. Everyone knows moving can <br /> be one of life's most stressful events, this is why <br /> we’re here to help you manage your relocation <br /> stress. Too good to be true? Just ask our customers <br /> who would refer us to friends and family for their <br /> next move.</p>
          </div>

          <div className='flex w-1/2'>
            <img src={Building} alt="" className='mt-20 scale-75' />
          </div>
        </div>
      </div>

      <div className='py-16 border-b border-gray-300'>
        <div className='text-center pb-0 mb-0'>
          <p className='text-[#5A96DF] text-3xl font-bold'>Why you should choose Axopolitan for your next move</p>
          <span className='text-lg font-semibold'>We're your clear favorite. You’ll enjoy several beneﬁts with the #1 Lagos movers</span>
        </div>

        <div className='flex px-20 gap-3'>
          <img src={Lorry} alt="" className='w-1/2 scale-90 pt-0 mt-0' />
          <div>
          <div className='flex pt-10'>
            <img src={Badge} alt="" className='w-9 h-12'/>
            <div>
              <h1 className='text-2xl font-semibold pl-3'>Top Rated</h1>
              <p className='text-black font-thin pl-3'>We are top-rated movers in Lagos and, we have built a good reputation <br /> by helping thousands of people move into new homes and commercial <br /> premises seamlessly. From the experience we've been able to attain, <br /> we’ve come to understand what customers would want from a moving <br /> company and we tailor our services to meet the needs of our clients <br /> where moving is concerned. Check out our reviews to see what <br /> customers have had to say about us over the years.</p>
            </div>
          </div>

          <div className='flex'>
            <img src={Service} alt="" className='w-9 h-12'/>
            <div>
              <h1 className='text-2xl font-semibold pl-3'>Customer Service</h1>
              <p className='text-black font-thin pl-3'>We are top-rated movers in Lagos and, we have built a good reputation <br /> by helping thousands of people move into new homes and commercial <br /> premises seamlessly. From the experience we've been able to attain, <br /> we’ve come to understand what customers would want from a moving <br /> company and we tailor our services to meet the needs of our clients <br /> where moving is concerned. Check out our reviews to see what <br /> customers have had to say about us over the years.</p>
            </div>
          </div>

          <div className='flex'>
            <img src={Care} alt="" className='w-10 h-12'/>
            <div>
              <h1 className='text-2xl font-semibold pl-3'>Caring, Professional Movers</h1>
              <p className='text-black font-thin pl-3'>We are top-rated movers in Lagos and, we have built a good reputation <br /> by helping thousands of people move into new homes and commercial <br /> premises seamlessly. From the experience we've been able to attain, <br /> we’ve come to understand what customers would want from a moving <br /> company and we tailor our services to meet the needs of our clients <br /> where moving is concerned. Check out our reviews to see what <br /> customers have had to say about us over the years.</p>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className='py-10'>
        <div className='text-center'>
          <h1>It's more than just a move</h1>
          <p className='text-lg font-normal text-black/70'>There’s more to moving than moving. We do it all.</p>
        </div>

        <div className='flex justify-center gap-12 px-20'>
          <div className='items-center'>
            <div className='flex items-center'>
              <img src={BoxOne} alt="" className='w-16 h-12 mt-2'/>
              <h1 className='text-2xl font-semibold pl-2 text-center pt-4'>Wrapping and Packing</h1>
            </div>
            <div>
            <p className='text-black font-thin pl-3'>We ensure all furniture pieces are carefully <br /> protected, wrap and pack mattresses in <br /> custom protection materials, Flat screens <br /> wrapped and packed in special TV box or <br /> padded, wrap couches and chairs in <br /> blankets and shrink wrap.</p>
            </div>
          </div>

          <div className='my-4'>
            <div className='flex items-center'>
              <img src={BoxTwo} alt="" className='w-10 h-10'/>
              <h1 className='text-2xl font-semibold pl-2 text-center'>Disassembly and Reassembly</h1>
            </div>
            <div>
            <p className='text-black font-thin pl-3'>Disassembling and assembling of bed <br /> frames, dining set, Dismount and pack ﬂat- <br /> screen TVs. Disassembling Tables that may <br /> need to be separated to move nicely.</p>
            </div>
          </div>

          <div className='my-4'>
            <div className='flex items-center'>
              <img src={BoxTwo} alt="" className='w-10 h-10'/>
              <h1 className='text-2xl font-semibold pl-2 text-center'>Packing</h1>
            </div>
            <div>
            <p className='text-black font-thin pl-3'>Hang and pack clothes in wardrobe boxes or <br /> custom boxes...………………...</p>
            </div>
          </div>
        </div>

        <div className='py-10'>
          <h1 className='text-2xl px-20'>Input a few simple details and get your moving quote in just four steps:</h1>
          <div className='flex justify-center gap-16 py-5 px-20'>
            <div className=''>
              <img src={StepOne} alt="" className='w-16 h-16'/>
              <h2 className='text-2xl font-semibold'>Step 1</h2>
              <span className='text-black/40 text-base font-normal'>Provide your current address <br /> and where you're moving to.</span>
            </div>

            <div>
              <img src={StepTwo} alt="" className='w-16 h-16'/>
              <h2 className='text-2xl font-semibold'>Step 2</h2>
              <span className='text-base text-black/40 font-normal'>Tick the box that corresponds <br /> with your current home size.</span>
            </div>

            <div>
              <img src={StepThree} alt="" className='w-16 h-16'/>
              <h2 className='text-2xl font-semibold'>Step 3</h2>
              <span className='text-base text-black/40 font-normal'>Choose the date you want to <br /> move.</span>
            </div>

            <div>
              <img src={StepFour} alt="" className='w-16 h-16'/>
              <h2 className='text-2xl font-semibold'>Step 4</h2>
              <span className='text-base text-black/40 font-normal'>Provide contact details and <br /> where we can send your quote.</span>
            </div>
          </div>
        </div>
        <div className='px-20 flex gap-10'>
          <h1 className='text-3xl mt-3'>Get started with us today</h1>
          <div>
            <FreeQuote />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Local 