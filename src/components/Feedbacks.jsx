import { testimonials } from "../constants/index"

const Feedbacks = () => {
  return (
    <div className=" flex sm:px-16 px-6 sm:py-16 py-10 max-w-7xl mx-auto relative z-0">
      <div className=" mx-auto w-[100%]">
        <div className="title">
          <h1 className="text-white font-black md:text-[60px] sm:text-[50px] xs:text-[40px] text-[30px]">Feedbacks.</h1>
        </div>

        {/* testimonials */}
        <div className="testimonial-box md:grid-cols-3 grid-cols-1 p-4">
          {testimonials.map((item, index) => {
            return (

                <div className=" ">
                  <div  className="animate hover:transition-all hover:duration-300 flex flex-col items-center bg-tertiary rounded-lg p-4 m-4 border">
                    <div className="rounded-full"><img src={item.image} className="object-contain rounded-full w-[5rem]" alt="" /></div>

                    {/* details */}
                    <div className="flex my-4  w-full py-2 flex-col items-center">
                      <span className="text-[24px] font-semibold">{item.name}</span>
                      <span className="text-[] text-secondary">{item.designation}</span>
                      <span className="text-[] text-secondary">{item.company}</span>
                    </div>

                    <div className="text-center">
                      " {item.testimonial} "
                    </div>

                  </div>
                </div>

            )
          })}
        </div>
      </div>
    </div>

  )
}



export default Feedbacks