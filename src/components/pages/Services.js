import React from 'react';
import Navbar from '../Navbar_contact.js';
import maps from "../../images/maps.png";
import founder from '../../images/image 553.png'
import img1 from '../../images/1 (5) 1.png'
import img2 from '../../images/1 (17) 1.png'
import img3 from '../../images/1 (2) 1.png'
import back  from '../../images/bg sec 2.png';



const ContactUs = () => {
  return (
    <>
    
    <Navbar/>
    <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"

      ></link>
    <div className='mt-6 bg-gradient-to-r from-slate-800 to bg-yellow-800'>   
      <div className=" md:grid grid-cols-3  transition duration-300  rounded-xl ">
        
        <div className=' pt-12 flex justify-end '>
          <img
            className='w-[400px] h-[450px]  '
            src={founder}
            ></img>
        </div>

        <div className="sm:w-fit  mb-10 justify-center pt-8 col-span-2 md:mx-28">
        <h1 className="font-noraml d text-xl md:text-3xl md:leading-snug pb-5 text-slate-300">
            <div><span className=' text-white bg-clip-text text-transparent text-5xl pl-3'>
              About Us
            </span></div><br/>
            
            Meet Our Visionary Leader 
          </h1>
        
           
            <p className=' text-left text-lg tracking-wider leading-snug pb-12' style={{ color:'white' }}>Bringing over 15 years of expertise in the financial and investment sectors, 
            he has held key positions like Head of Market Analysis, Head of Market Research,
            and Chief Strategy Officer.<br/><br/>


            Currently, he also leads as the Founder and Chairman of a well-established 
            consulting and investment firm, showcasing his visionary leadership in the 
            dynamic realm of finance and investment.<br/><br/>

            Passionate about prefabricated housing, our Founder has owned various 
            types of prefabricated homes, ranging from shipping container houses to 
            manufactured homes. Recognizing the versatility and expandability of Modular 
            Homes, he sees it as a comprehensive solution.<br/><br/>

            Mr. HUYNH ventures into the Modular housing industry with the aspiration to 
            provide affordable housing solutions with rapid construction timelines, 
            emphasizing environmental friendliness. His commitment to delivering homes 
            that are not only cost-effective but also quick to build aligns with the urgent 
            demand for sustainable and accessible housing solutions in Canada.

             
            </p>
        
        </div>
        <div>
        </div>
        </div>
        </div>  
        
        <h1 className="md:font-semibold  md:text-5xl md:leading-snug text-4xl pl-32 pt-24 ">
          How we Started <br/>
          
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
              our Journey</span>
          </h1>
          <div className='grid grid-cols-3'>
            <div className='col-span-2 ml-32 mr-20 mt-10'>
              <p>Mr. HUYNH and his spouse embarked on a deeply personal journey, aspiring to provide
              their family with a farmhouse in place of their residence in Ho Chi Minh City, Vietnam. 
              Upon realizing the farmhouse couldn't meet their needs, it ignited the evolution of a 
              comprehensive project. Setting stringent criteria for their new dwelling became 
              imperative: it had to be inviting, cost-effective, locally sourced, expandable, 
              off-grid, and capable of self-sustaining energy.</p>

            </div>
            <div className='-my-14'><img src={img1}></img></div>

          </div>
          <div className='mt-16'><div className='grid grid-cols-3'>
          <div className='-my-14 ml-32'><img src={img2}></img></div>
            <div className='col-span-2 mx-20 mr-56 mt-10'>
              <p>Realizing that such a home didn't yet exist, they undertook the challenge of
              designing and building it themselves. Leveraging their extensive contacts 
              within Vietnam's construction industry, their invaluable support propelled 
              the realization of this vision. Beginning in 2020, construction commenced 
              with a microhouse, gradually expanding to encompass a bedroom, mud 
              room, porch, bathroom, utility room, and an aquaponic greenhouse -
              ultimately culminating in a 2500 sq ft living and working space in 
              Ho Chi Minh City ..</p>

            </div>
            
            

          </div>
          </div>
          <div className='grid grid-cols-3 mt-24'>
            <div className='col-span-2 ml-32 mr-20 mt-10'>
              <p>During this transformative journey, navigating through trials and errors, they devised 
              and perfected a groundbreaking formula that streamlined house construction. 
              Their focus on enhancing efficiency and cost-effectiveness yielded impressive results.
              One notable achievement exemplified their innovative approach: a team, predominantly 
              novices, built an 800 sq ft aquaponic greenhouse from raw materials within a remarkably 
              short span of 5 days. This incredible feat, accomplished at a total cost of $6,000, 
              underscored their resourcefulness and pioneering spirit in construction.</p>

            </div>
            <div className='-my-14'><img src={img3}></img></div>

          </div>
          <div className='hidden md:block pt-24 relative'>
          <img src={back} className='w-full h-auto'></img>
          <div className='absolute top-24 left-0 w-full h-auto bottom-0 bg-black opacity-80'></div>
          <div className='absolute  top-72 font-bold text-8xl left-0 w-full h-auto text-center text-white'><p>Build your Dream<br/>Home Now</p></div>
          <div className='absolute  top-[550px] left-0 w-full h-auto text-center'><button className='text-yellow-700 border bg-slate-100 w-48 h-16 rounded-full '> <a href="/log-in">Get Started</a></button></div>
    
    



  </div>
        
        
        
        
        
        
      
       
    
    </>
  )
}

export default ContactUs