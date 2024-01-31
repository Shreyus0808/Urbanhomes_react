import React, {useState} from 'react';
import Navbar from '../Navbar_transparent_home';
import '../../App.css';
import '../Button.css';
import cover_image from '../../images/resized final bg 2.jpg';
import img9 from '../../images/1 (8).jpeg';
import img10 from '../../images/img-10.png';
import abt_1 from '../../images/abt_1.jpg';
import housemax from '../../images/1 (16) 1.jpg';
import abt_2 from '../../images/abt_2.jpg';
import abt_3 from '../../images/abt_3.jpg';
import bg_round from '../../images/bgabt.png';
import door from '../../images/values_door.png';
import drive from '../../images/values_drive.png';
import home from '../../images/values_home.png';
import thumb  from '../../images/values_thumb.png';
import find  from '../../images/Find Your Home.png';
import Rectangle  from '../../images/Rectangle 14995.png';
import lastbg  from '../../images/Bungalow-Mediteraneo-42-Lux-h.jpg';
import founder from '../../images/founder.jpg'
import core from '../../images/core.png'
import core2 from '../../images/core2.png'
import Ronald  from '../../images/Man with crossed arms.png';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import back  from '../../images/bg sec 2.png';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';


function AccordionItemStart({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>      
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-xl focus:text-[#994b00] hover:bg-gray-100 gap-3"
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isExpanded ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {/* Accordion body content */}
      {isExpanded && (
        <div id="accordion-collapse-body-1" >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-yellow-700">
          <p class="mb-2 text-white">{content}</p>
        </div>
      </div>
      )}
    </div>
  );
}

function AccordionItemMid({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:text-[#994b00] hover:bg-gray-100  gap-3"
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isExpanded ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {/* Accordion body content */}
      {isExpanded && (
        <div id="accordion-collapse-body-1" >
        <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 bg-yellow-700">
          <p class="mb-2 text-white ">{content}</p>
        </div>
      </div>
      )}
    </div>
  );
}
function AccordionItemEnd({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <h2>
        <button
          type="button"
          className="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 rounded-b-xl focus:text-[#994b00] hover:bg-gray-100 gap-3"
          onClick={toggleAccordion}
          aria-expanded={isExpanded}
          aria-controls={`accordion-collapse-body-${title}`}
        >
          <span>{title}</span>
          <svg
            className={`w-3 h-3 rotate-${isExpanded ? '0' : '180'} shrink-0`}
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 10 6"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5 5 1 1 5"
            />
          </svg>
        </button>
      </h2>
      {/* Accordion body content */}
      {isExpanded && (
        <div id="accordion-collapse-body-1" >
        <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700 rounded-b-2xl -translate-y-2 bg-yellow-700">
          <p class="mb-2 text-white">{content}</p>
        </div>
      </div>
      )}
    </div>
  );
}

export default function Home() {
  const [userdata, setFormData] = useState({
    name: "",
    email:"",
    phone: "",
    city: "",
    provience: "",
    zip_code: ""
  })
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    
    try {

      setFormData({ 
        name: "",
        email: "",
        phone: "",
        city: "",
        provience: "",
        zip_code:""
      });
    } catch (error) {
      console.error("Error posting data:", error);
    }
  };

  const handleInputChange = (event) => {
    const value = event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    setFormData({ 
      ...userdata,
      [event.target.name]: value
    });
  };

  // const [formData, setFormData] = useState({
  //   name: '',
  //   landSize: '',
  //   requirement: '',
  //   city: '',
  //   province: '',
  //   zipCode: '',
  //   additionalInfo: '',
  // });

  // const handleChange = (e) => {
  //   const { id, value } = e.target;
  //   setFormData({ ...formData, [id]: value });
  // };
  
  const handleClick = () => {
    // Handle button click logic here
    console.log('Button clicked!');
  };

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleAccordion = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className='p-3'>
    <Navbar />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;700&display=swap"

      ></link>
      <link rel="stylesheet" href="carousel.css"/>
      <div className='home max-w-screen'>
        <div className='home_content h-2/3 md:h-fit '>
          <img
            src={cover_image}
            className='absolute inset-0 w-full h-[600px] md:h-full -z-10 object-cover backdrop-brightness-100 '
            alt="Cover Image"
          />
          <h1 className='home_head text-md'>Empower Your Dream<br /> Construct Your Modular Home <br/>with Ease</h1>
          <h2 className='home_content_text hidden lg:block'>
          Building a Sustainable Future<br/>Transforming Modules into Affordable Homes
          </h2>
          <button className="home_btn" onClick={handleClick}>
            Explore More
          </button>
        </div>
      </div>

      <div className="flex flex-col-reverse md:grid grid-cols-2 md:mt-20 mt-0 ">
        <div>
          <img
            className="  md:w-[450px] md:h-[450px] object-cover rounded-3xl md:ml-32 mt-10 md:mt-4   "
            src={img9}
            alt="Image 1"
          />
          </div>
        
        <div className='relative pl-2 -mt-24 md:mt-0' id='About_us'>
          <h1 className="md:font-semibold  md:text-5xl md:leading-snug text-4xl ">
            Your{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
              Smart Home,</span>
          </h1>
          <h1 className="sm:font-semibold  sm:text-5xl md:leading-snug text-4xl md:pt-3">Your Way</h1>
          <div className='mt-2 pt-6 md:leading-10 md:pr-32 md:text-xl ' style={{color:"#6F6B6B"}}>
            <h2 className='text-xl leading:snug tracking-wider justify'>
            Introducing user-friendly modular designs for swift home construction, our approach fosters a sense of ownership. With simplified processes and intuitive blueprints, homeowners can efficiently build their spaces. Additionally, we support local material creation through providing training.
            <p className='md:pt-8'>Hala Homes off-site modular construction remains a popular, efficient choice in the housing market, catering to diverse needs</p>
            </h2>
          </div>
        </div>
      </div>

      <div className='sm:mt-24 mt-14 md:ml-24' id='features'>
        <div className='relative md:pl-8 '>
          <h1 className="sm:font-semibold  sm:text-5xl text-3xl md:leading-snug ">
            Exceptional{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
              Features of
            </span>
          </h1>
          <h1 className="l-02  md:font-semibold text-gray-800 sm:text-5xl md:text-4xl text-3xl mb-2">Our Hala Homes</h1>
          <div className='mt-2 pt-3 leading-8  sm:pr-32 text-xl' style={{color:"#6F6B6B"}}>
            <p>
              Discover the exceptional features that make modular homes a
              standout<br/>choice,combining flexibility and efficiency for modern living.</p>
          </div>
        </div>
      
      {/* need to change */}
     <div className='hidden md:block md:pr-28'>
      <Carousel>
                <div className='p-1 md:p-5'>
                    <img src={core} />
                    
                
                </div>
                <div className='p-1 md:p-5'>
                    <img src={core2} />
                
                </div>
            </Carousel>
            </div>
            </div>
            
            
      


    
    {/* <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

      <div className='mx-10 md:mx-0'>
      <div className=" grid sm:grid-cols-3 grid-cols-1 gap-3 justify-center mt-10">
        <div className="md:ml-15  md:w-4/6 w-full h-fit bg-[#994a0052] rounded-xl md:mx-10 hover:bg-[#994a00c6] hover:scale-105 transition duration-300 shadow-2xl ">
          <h1 className='text-center font-bold pt-2 leading-10 '>Smarter Builds</h1>
          <p className='sm:text-left mx-5 md:mx-10' style={{color:"black"}}>Our controlled manufacturing facility for climate regulation minimizes weather-related issues and delays, thus eliminating the risk of material mold caused by moisture.</p>
          <img
            className='ml-auto mt-9 md:mt-6 w-1/2 rounded-2xl object-cover'
            src={abt_1}
            ></img>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-4/6 h-fit bg-[#994a0053] rounded-xl md:mx-10  hover:bg-[#994a00c6] hover:scale-105 transition duration-300 shadow-2xl">
        <h1 className='text-center font-bold pt-2 leading-10 '>Faster Turnarounds</h1>
          <p className='sm:text-left  mx-5 md:mx-10' style={{color:"black"}}>Modular homes, which are efficiently structured and operational throughout the year, are generally constructed in approximately one-third of the time required for building a home on-site.</p>
          <img
            className='ml-auto mt-9 md:mt-0 w-1/2 rounded-2xl object-cover'
            src={abt_2}
            ></img>
        </div>
        <div className="w-full mt-10 md:mt-0 md:w-4/6 h-fit bg-[#994a0053] rounded-xl md:mx-10 hover:bg-[#994a00c7] hover:scale-105 transition duration-300 shadow-2xl">
        <h1 className='text-center font-bold pt-2 leading-10'>Increased Reliability</h1>
          <p className='text-left md:mx-10' style={{color:"black"}}>Our precision-focused technology, along with our controlled work environment for climate management, both serve to draw in and cultivate a highly skilled workforce.</p>
          <img
            className='ml-auto mt-10 md:mt-6 w-1/2 rounded-2xl object-cover'
            src={abt_3}
            ></img>
        </div>
      </div>
      </div> */}
      
         {/* maximising investment */}
         <div className='flex flex-col-reverse md:grid md:grid-cols-3 md:pt-24'>
          <div className='col-span-2 md:pl-28 pt-16'>
            <p className="md:font-semibold text-3xl md:text-5xl md:leading-snug">
              <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to-yellow-600 bg-clip-text text-transparent'>
                Maximizing your Investment: <br/> </span>The Value of Hala Homes
              
            </p>
            <div className='text-xl' style={{ color: "#6F6B6B" }}>
              <p className='mt-2 pt-3 md:leading-8 md:pr-44 md:pb-6'>
                Our modular homes provide exceptional value, merging affordability, top-tier construction, and energy efficiency.
                With quicker build times and minimized waste, they amplify your investment.
                Embrace the convenience and eco-friendly nature of modular homes—an ideal pick for today's homeowners.
              </p>
              <button className=' hidden md:flex font-medium border bg-gray-400 rounded-full text-white items-center p-3 pl-12 animate-pulse'>
            KNOW MORE<div className='bg-yellow-800 rounded-full ml-3 '> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M22.0061 24.2088L28.6986 17.5163L22.0061 10.8239L24.0766 8.76807L32.8248 17.5163L24.0766 26.2646L22.0061 24.2088ZM13.2579 24.2088L19.9503 17.5163L13.2579 10.8239L15.3283 8.76807L24.0766 17.5163L15.3283 26.2646L13.2579 24.2088ZM4.50959 24.2088L11.202 17.5163L4.50959 10.8239L6.58002 8.76807L15.3283 17.5163L6.58002 26.2646L4.50959 24.2088Z" fill="url(#paint0_linear_72_1419)"/>
            <defs>
              <linearGradient id="paint0_linear_72_1419" x1="27.7217" y1="14.6002" x2="4.50959" y2="17.5163" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F5EEE4"/>
                <stop offset="1" stop-color="#F1F1F1" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          </div>
          </button>
            </div>
          </div>
          <img src={housemax} className='mt-10 md:mt-0 rounded-3xl shadow-xl md:w-[400px] md:h-[510px]' alt="Description of the image" />
         
        </div>

  
    
    
    {/*founder*/}
       <div className='mt-16 md:mt-28 '>   
      <div className=" md:grid grid-cols-3  transition duration-300  rounded-xl ">
        
        <div className=' pt-12 flex justify-center md:justify-end '>
          <img
            className='w-96 h-96 rounded-full object-cover shadow-2xl  container-fill border-[40px] border-yellow-800 '
            src={founder}
            ></img>
        </div>

        <div className="sm:w-fit  mb-10 justify-center pt-8 col-span-2 md:mx-28">
        <h1 className="md:font-semibold text-3xl md:text-5xl md:leading-snug pb-5 ">
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent '>
              About Us
            </span><br/>
            A Look into our Journey
          </h1>
        
           
            <p className=' text-left text-xl leading-8 pb-12' style={{ color: "#6F6B6B" }}>Mr. HUYNH, a finance expert with 15+ years' experience, leads as Founder and Chairman of a top consulting firm. His passion for prefabricated housing drove him to innovate modular solutions, addressing Canada's need for affordable and sustainable homes. His journey began with a personal quest to create an innovative and self-sustaining farmhouse, leading to transformative construction methods.

             
            </p>
        
        <div>
        <Link to="/about-us">
        <button className='md:flex font-medium border bg-gray-400 rounded-full text-white items-center p-3 pl-12 animate-pulse'>
            READ OUR STORY<div className='bg-yellow-800 rounded-full ml-3 '> <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
            <path d="M22.0061 24.2088L28.6986 17.5163L22.0061 10.8239L24.0766 8.76807L32.8248 17.5163L24.0766 26.2646L22.0061 24.2088ZM13.2579 24.2088L19.9503 17.5163L13.2579 10.8239L15.3283 8.76807L24.0766 17.5163L15.3283 26.2646L13.2579 24.2088ZM4.50959 24.2088L11.202 17.5163L4.50959 10.8239L6.58002 8.76807L15.3283 17.5163L6.58002 26.2646L4.50959 24.2088Z" fill="url(#paint0_linear_72_1419)"/>
            <defs>
              <linearGradient id="paint0_linear_72_1419" x1="27.7217" y1="14.6002" x2="4.50959" y2="17.5163" gradientUnits="userSpaceOnUse">
                <stop stop-color="#F5EEE4"/>
                <stop offset="1" stop-color="#F1F1F1" stop-opacity="0"/>
              </linearGradient>
            </defs>
          </svg>
          </div>
          </button>
          </Link>
        </div>
        </div>
        
        
        
        
        
      </div>
      </div>  
      {/* FAQ */}
    
    <div className='mt-10 md:mt-24 'id='faq'>
        <div className='relative w-fit md:w-full flex flex-col mx-2 md:mx-0 md:'>
          <h1 className="md:font-semibold text-3xl md:text-5xl leading-snug md:text-center">
          Hala Homes Queries:{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
            Get Informed
            </span>
          </h1>
          <div className=' md:text-center mt-2 pt-3 md:px-96'>
          <p className='text-xl' style={{color:"#6F6B6B"}}>Explore the most common queries about modular homes to gain a comprehensive understanding of this housing option</p>
          </div>
          <div className='mt-16 md:px-32' >
            <div id="accordion-collapse" data-accordion="collapse">
              {/* <h2 id="accordion-collapse-heading-1">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-b-0 border-gray-200 rounded-t-xl  hover:bg-gray-100  gap-3" onClick={toggleAccordion} aria-expanded={isExpanded} aria-controls="accordion-collapse-body-1">
                  <span>What is the difference between a manufactured home and a modular home?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              {isExpanded && (
              <div id="accordion-collapse-body-1" >
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700 dark:bg-gray-900">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes.</p>
                </div>
              </div>)} */}
              <AccordionItemStart 
              title="What is the difference between a manufactured home and a modular home?" 
              content="While both manufactured homes and modular homes are built in a factory environment, there are some differences between the two. The main source of difference between modular and manufactured homes is the code to which they are built. Manufactured homes are built to a federal HUD code, while modular homes are built to state or local residential building codes." 
              />
              <AccordionItemMid 
              title="Where can I go to tour a model that I see online?" 
              content="You can often tour models of factory-built homes at dealerships, showrooms, or manufacturers' facilities. Contact the manufacturer or dealership associated with the model you're interested in to inquire about available locations for tours or showings. Many companies also participate in home expos or trade shows where they display their models for public viewing." 
              />
              <AccordionItemMid
              title="Can factory built homes be placed on basements?" 
              content="Factory-built homes are usually not designed to be placed in basements due to their construction and transportation methods. Their structure isn't typically conducive to basement installation. Site-built homes are more adaptable for basement construction, offering designs that can integrate with basement foundations during on-site building." 
              />
              <AccordionItemMid
              title="Do your Cape Cod models come with a finished upstairs??" 
              content="Cape Cod-style homes traditionally feature unfinished upstairs spaces like attics or lofts. However, some modern variations or customized designs may offer finished upstairs areas, providing additional living space or bedrooms. It varies based on the specific model, customization options, and builder preferences." 
              />
              <AccordionItemEnd
              title="How is factory built housing different than site built homes?" 
              content="Factory-built homes are constructed in controlled environments, then transported and assembled on-site, offering faster, standardized construction. However site-built homes offer limitless customization, allowing owners to create unique designs. They promote local employment, fostering community ties and craftsmanship. Their on-site construction process enables adaptation to specific needs, and they often showcase higher architectural complexity and individuality, reflecting personal preferences and creativity." 
              />
              {/* <h2 id="accordion-collapse-heading-2 ">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>Where can I go to tour a model that I see online?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-2" class="hidden" aria-labelledby="accordion-collapse-heading-2">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-3">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>Can factory built homes be placed on basements?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-3" class="hidden" aria-labelledby="accordion-collapse-heading-3">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-4">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-grey-700 border border-b-0 border-gray-200 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-2" aria-expanded="false" aria-controls="accordion-collapse-body-2">
                  <span>Do your Cape Cod models come with a finished upstairs?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2>
              <div id="accordion-collapse-body-4" class="hidden" aria-labelledby="accordion-collapse-heading-4">
                <div class="p-5 border border-b-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is first conceptualized and designed using the Figma software so everything you see in the library has a design equivalent in our Figma file.</p>
                  <p class="text-gray-500 dark:text-gray-400">Check out the <a href="https://flowbite.com/figma/" class="text-blue-600 dark:text-blue-500 hover:underline">Figma design system</a> based on the utility classes from Tailwind CSS and components from Flowbite.</p>
                </div>
              </div>
              <h2 id="accordion-collapse-heading-5">
                <button type="button" class="flex items-center justify-between w-full p-5 font-medium rtl:text-right text-gray-700 border border-gray-200 rounded-b-xl focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:border-yellow-700 dark:text-gray-700 hover:bg-gray-100 dark:hover:bg-yellow-700 gap-3" data-accordion-target="#accordion-collapse-body-3" aria-expanded="false" aria-controls="accordion-collapse-body-3">
                  <span>How is factory built housing different than site built homes?</span>
                  <svg data-accordion-icon class="w-3 h-3 rotate-180 shrink-0" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 6">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5 5 1 1 5"/>
                  </svg>
                </button>
              </h2> */}
              <div id="accordion-collapse-body-5" class="hidden" aria-labelledby="accordion-collapse-heading-5">
                <div class="p-5 border border-t-0 border-gray-200 dark:border-gray-700">
                  <p class="mb-2 text-gray-500 dark:text-gray-400">The main difference is that the core components from Flowbite are open source under the MIT license, whereas Tailwind UI is a paid product. Another difference is that Flowbite relies on smaller and standalone components, whereas Tailwind UI offers sections of pages.</p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">However, we actually recommend using both Flowbite, Flowbite Pro, and even Tailwind UI as there is no technical reason stopping you from using the best of two worlds.</p>
                  <p class="mb-2 text-gray-500 dark:text-gray-400">Learn more about these technologies:</p>
                  <ul class="ps-5 text-gray-500 list-disc dark:text-gray-400">
                    <li><a href="https://flowbite.com/pro/" class="text-blue-600 dark:text-blue-500 hover:underline">Flowbite Pro</a></li>
                    <li><a href="https://tailwindui.com/" rel="nofollow" class="text-blue-600 dark:text-blue-500 hover:underline">Tailwind UI</a></li>
                  </ul>
                </div>
              </div> 
            </div>

            </div>
    </div>
    </div>
 

  {/*secure financing*/}
  <div className='hidden md:block pt-24 relative'>
    <img src={back} className='w-full h-auto'></img>
    <div className='absolute top-24 left-0 w-full h-auto bottom-0 bg-black opacity-80'></div>
    <div className='absolute  top-72 font-bold text-8xl left-0 w-full h-auto text-center text-white'><p>Build your Dream<br/>Home Now</p></div>
    <div className='absolute  top-[550px] left-0 w-full h-auto text-center'><button className='text-yellow-700 border bg-slate-100 w-48 h-16 rounded-full '> <a href="/log-in">Get Started</a></button></div>
    
    



  </div>
 
  {/* <div className='pt-80 md:pt-32 w-full md:space-x-32 justify-center md:flex'> */}
  {/* <div className='bg-white  sm:w-[550px]  rounded-xl'>
        
  <h1 className="font-normal text-3xl md:text-4xl leading-snug mb-4 md:text-center">
            Ask Us.{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
              We are here to help!
            </span></h1>
        <form className='border-0 bg-transparent p-0 w-full justify-center'>
        <div className=' pl-10 flex-col pr-10'>
            <div className='grid grid-rows-4 text-slate-500 pl-4'>
        <div className="grid grid-cols-2 pt-3">
            <div>
                <h3>Name</h3>
                <div className='border border-slate-600 rounded-md w-4/5 h-2/3'>
                <label htmlFor="textBox" className='text-gray-200'></label>
                <input type="text"
                        id="name"
                        placeholder='Annie Cooper'
                        className='w-full h-full'
                        value={formData.name}
                        onChange={handleChange} />
                </div>


            </div>
            <div>
                <h3>Email</h3>
                <div className='border border-slate-600 rounded-md w-4/5 h-2/3'>
                <label htmlFor="textBox" className='text-gray-200'></label>
                <input type="email"
                        id="landSize"
                        placeholder='600'
                        className='w-full h-full'
                        value={formData.landSize}
                        onChange={handleChange} />
                </div>
            


            </div>
            </div>
            <div className="grid grid-cols-2 pt-3">
            <div>
                <h3>Phone Number</h3>
                <div className='border border-slate-600 rounded-md w-4/5 h-2/3'>
                <label htmlFor="textBox" className='text-gray-200'></label>
                <input type="text"
                        id="requirement"
                        placeholder='Home'
                        className='w-full h-full'
                        value={formData.requirement}
                        onChange={handleChange} 
                         />
                </div>


            </div>
            <div>
                <h3>Company</h3>
                <div className='border border-slate-600 rounded-md w-4/5 h-2/3'>
                <label htmlFor="textBox" className='text-gray-200'></label>
                <input type="text"
                        id="city"
                        placeholder='St. Catherines'
                        className='w-full h-full'
                        value={formData.city}
                        onChange={handleChange} />

                </div>


            </div>
            </div>
            </div>
            <div className='pt-3'>
                <h3>Additional Info</h3>
                <div className='  w-11/12 h-40'>
                <label htmlFor="textBox" className='text-gray-200'></label>
                <textarea 
                        id="additionalInfo"
                        placeholder=''
                        className='w-full h-full border border-slate-600 rounded-md'
                        value={formData.additionalInfo}
                        onChange={handleChange} />
                </div>


            </div>
        </div>
        
            
                    <div className='pt-12  pl-80 '>
                        <button className='hover:border-slate-500 rounded-2xl shadow-lg hover:bg-yellow-700 h-10 w-16 text-slate-500 hover:text-white mx-6 transition-all' >Close</button>
                        <button
          className='hover:border-slate-500 rounded-2xl shadow-lg hover:bg-yellow-700 h-10 w-16 text-slate-500 hover:text-white transition-all'>
          Done
        </button>
                    </div>
                
                    </form>
                
             
        

    </div> */}
    
              {/* <div className='flex-col md:w-1/3 space-y-2'>
              <h1 className="font-normal p-2 text-4xl leading-snug mb-4">
            Contact{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
             Us
            </span></h1>
      <form className='border-0 w-full p-0 bg-transparent' onSubmit={handleFormSubmit}>

            <div className='md:inline-flex justify-evenly py-1 space-y-5 md:space-y-0 md:space-x-3 w-full'>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Name
                </h2>
                <div className='w-full'>
                  <input required type="text" id='email' name='email' placeholder="" onChange={handleInputChange} value={userdata.email} className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Email
                </h2>
                <div className='w-full'>
                  <input required type="text" id='phone' name='phone'  onChange={handleInputChange}
              value={userdata.phone} placeholder="" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
            </div>
            <div className='md:inline-flex justify-evenly py-1 space-y-5 md:space-y-0 md:space-x-3 w-full'>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Mobile Number
                </h2>
                <div className='w-full'>
                  <input required type="text" id='city' name='city'  onChange={handleInputChange}
              value={userdata.city} placeholder="" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
              <div className='flex-col md:w-1/2 px-3'>
                <h2 className='text-gray-800 pl-1 md:space-x-3 md:pb-2 text-md'>
                Company
                </h2>
                <div className='w-full'>
                  <input required type="text" id='provience' name='provience'  onChange={handleInputChange}
              value={userdata.provience} placeholder="" className="mt-2 md:mt-0 w-full md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>
            </div>
            <div className='justify-start py-2 pb-5 pd:mb-4 w-full'>
              <div className='flex-col md:w-full px-3'>
                <h2 className='text-gray-800 pl-1  md:pb-2 text-md'>
                Message
                </h2>
                <div className='w-full'>
                  <textarea required type="text" id='zip_code' name='zip_code'  onChange={handleInputChange} value={userdata.zip_code} placeholder="" className="mt-2 md:mt-0 w-full h-32 md:justify-end   text-gray-500 py-3 px-3 rounded-sm bg-transparent transition-all outline focus:outline outline-gray-100 focus:outline-gray-200" />
                </div>
                </div>              
            </div>
            <div className='grid md:grid-flow-col md:pt-6 mt-4 md:mt-10 items-center  space-y-5 md:space-y-0 md:space-x-6 w-full justify-center'>
<button type='submit' className='block uppercase rounded-full py-2 md:py-2 text-md p-2 px-14 bg-[#994b00] transition-all text-white hover:text-[#994b00] hover:bg-[#994b002a] '> Send Message </button>
</div>
      </form>
          </div> */}

  {/* <h1 className="font-normal mt-14 md:mt-0 md:w-1/3 text-4xl leading-snug pl-10 mb-4 ">
            How to find{' '}
            <span className='bg-gradient-to-r from-yellow-900 via-cream-light via-yellow-700 to to-yellow-600 bg-clip-text text-transparent'>
              Us
            </span>
            <div className='flex justify-center'>
            <img src={map} className='md:h-[600px] w-full object-contain object-left-top pl-0 p-10'></img>
            </div>
  </h1> */}

  {/* </div> */}
    </div>
  );
}
