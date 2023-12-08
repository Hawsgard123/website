import { founder, vector3 } from "./assets"
import Image from "next/image"

const Founder = () => {
  return (
    <>
      {/* Desktop Screen */}
      <div className="lg:flex flex-col hidden mx-28 my-28 items-center">
        <div className=" z-5 flex flex-col justify-center items-center">
          <h1 className="text-5xl font-bold font-poppins mb-4 text-center">
            Our Founder
          </h1>
          <h1 className="text-2xl font-bold font-poppins mb-8 text-center">
            Achyuta Samanta
          </h1>
          <Image
            src={founder}
            alt="founder"
            className="z-5 w-[40vw] h-[40vh] rounded-[4rem] object-cover object-top mb-8"
          />
          <p className="text-xl font-poppins text-center">
            Kalinga Institute of Industrial Technology (KIIT) is a private
            institute located in Bhubaneswar, Odisha. It was founded in 1992 by
            Achyuta Samanta and is one of the most prestigious institutes in
            India. It is also home to the Kalinga Institute of Social Sciences
            (KISS), which is the largest residential institute for tribal
            children in the world.
          </p>
        </div>
        {/* <Image
          src={vector3}
          alt="vector"
          className="-z-10 absolute w-[50rem] h-[50rem] mx-[25rem]"
        /> */}
      </div>
      {/* Mobile Screen */}
      <div className="lg:hidden flex flex-col mb-28">
        <h1 className="text-5xl font-bold font-poppins mb-4 text-center">
          Our Founder
        </h1>
        <h1 className="text-2xl font-bold font-poppins mb-8 text-center">
          Achyuta Samanta
        </h1>
        <Image
          src={founder}
          alt="founder"
          className="z-5 w-[20rem] h-[40rem] m-6 rounded-[4rem] object-cover object-top mb-8"
        />
        <div className="z-5 flex flex-col justify-center mx-8">
          <p className="text-[1rem] font-poppins">
            Kalinga Institute of Industrial Technology (KIIT) is a private
            institute located in Bhubaneswar, Odisha. It was founded in 1992 by
            Achyuta Samanta and is one of the most prestigious institutes in
            India. It is also home to the Kalinga Institute of Social Sciences
            (KISS), which is the largest residential institute for tribal
            children in the world.
          </p>
        </div>
      </div>
    </>
  )
}

export default Founder
