import { motion } from 'framer-motion'
import React from 'react'

const pricingData = [
  {
    name: "Static Portfolio Website alpha beta gaama ",
    price: "999/-",
    content: "Showcasing yourself, skills, expertise, and brand is made easy with Static Portfolios. We're here to elevate and amplify your profile through our tailored pricing.",
  },
  {
    name: "Dynamic Portfolio Website",
    price: "2999/-",
    content: "Portfolio Website is like the brand image for an individual or an organisation , With this pricing , we would be leveraging our skills to provide you with the eye-catching and dynamic portfolio website",
  },
  {
    name: "Technology Migration (from existing tech to MERN)",
    price: ``,
    status: true,
    content: "Explore our straightforward pricing for Static Portfolio Websites. Tailored plans for showcasing your work seamlessly. Choose simplicity, make an impact.",
  },
  {
    name: "Bussiness and Enterprise E-Commerce Solution (End to End)",
    price: `16,999`,
    content: "This section unveils our expertise in solving the pronlem of the bussiness and enterprises and to give the required result in form of a functional yet stunning e-commerce website ",
  },
  {
    name: "Admin Dashboard",
    price: `9,999`,
    content: "Admin Dashboard is one of the crucial factor for many startups and organisations , and with our diverse expertise in our skillset , we are here to assist with this",
  },
  {
    name: "Inventory Management Website alpha beta gama lamda omega",
    price: ``,
    status: true,
    content: "Streamline your inventory management with our tailored pricing. Elevate your business efficiency and boost your brand with our specialized solutions.",
  },


]

const PricingPage = () => {

  return (
    <div className='border-red-500 min-h-screen mb-[5rem] max-h-fit'>
      <div className=' max-w-[1290px] mx-auto mt-6 text- '>
        <h1 className='flex items-center justify-center gap-6 moment  text-3xl'>Our Detailed Pricing Plan <motion.svg
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "backOut" }}
          viewport={{ once: true }}
          width="40"
          height="50"
          viewBox="0 0 21 17"
          fill="none"
          className='text-xl -rotate-45'
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M19.484 9.348h.618v-2h-.617l-.197-.051a17.401 17.401 0 0 1-3.5-1.377c-2.002-1.063-3.798-2.61-4.12-4.732l-.149-.99-1.977.3.15.988c.425 2.816 2.56 4.69 4.554 5.862H.069v2h13.943c-2.06 1.162-4.302 3.066-4.332 5.938l-.01 1 2 .021.01-1c.02-1.905 1.682-3.396 3.818-4.487a18.846 18.846 0 0 1 2.822-1.142 19.087 19.087 0 0 1 1.164-.33"
            test="grey"
            style={{ fill: 'black' }} // Set the color to white
          ></path>
        </motion.svg></h1>

        <div className='grid text-white grid-cols-3 w-full h-full gap-6 mt-[4rem]'>
          {pricingData.map((item, index) => {
            return (
              <>
                <div className='w-full p-8 flex flex-col rounded-xl h-full bg-[#202020]'>
                  <div className='michroma flex-1 flex font-semibold'>
                    <h1 className="text-xl flex-1 my-4 w-fit pb-1">{item.name}</h1>
                  </div>

                  <div className='border-b-2 flex-1 border-[#d4ff3f] mb-6'></div>

                  <div className='flex-1'>
                    <div className='urban '> Starting from only</div>
                    <div className={`text-3xl ${item.status ? "text-xl" : item.price}  moment text-[#d4ff3f]`}>
                      &#8377; {item.status ? "Requirement Based" : item.price}
                    </div>
                  </div>

                  <div className='text-md text-justify urban my-5 flex-1 '>
                    {item.content}
                  </div>


                  <button className='text-lg hover:bg-transparent bg-[#d4ff3f] text-black hover:text-white hover:transition-all hover:duration-300 hover:ease-out font-semibold border-2 hover:border-dashed mt-5 border-[#d4ff3f] rounded-xl w-full h-[3rem] outline-none'>Contact me</button>


                </div>
              </>
            );
          })}


        </div>
      </div>
    </div>
  )
}

export default PricingPage
