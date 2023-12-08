import { kiit, vector2 } from "./assets"
import Image from "next/image"

const KIIT = () => {
  return (
    <>
      {/* Desktop Screen */}
      <div className="lg:flex flex-row hidden mx-28 mt-28 items-center">
        <div className=" z-10 flex flex-col justify-center">
          <h1 className="text-5xl font-bold font-poppins mb-8 text-right">
            KIIT
          </h1>
          <p className="text-xl font-poppins text-right">
            Kalinga Institute of Industrial Technology (KIIT) is a private
            institute located in Bhubaneswar, Odisha. It was founded in 1992 by
            Achyuta Samanta and is one of the most prestigious institutes in
            India. It is also home to the Kalinga Institute of Social Sciences
            (KISS), which is the largest residential institute for tribal
            children in the world.
          </p>
        </div>
        <Image
          src={kiit}
          alt="kiit"
          className="z-5 w-[60vw] h-[50vh] rounded-[4rem] object-cover mx-8"
        />
        <Image
          src={vector2}
          alt="vector"
          className="-z-10 absolute w-[50rem] h-[50rem] ml-[20rem]"
        />
      </div>
      {/* Mobile Screen */}
      <div className="lg:hidden flex flex-col mb-28">
        <Image
          src={kiit}
          alt="kiit"
          className="z-5 w-[20rem] h-[20rem] m-6 rounded-[4rem] object-cover mb-8"
        />
        <div className="z-5 flex flex-col justify-center mx-8">
          <h1 className="text-[2rem] font-bold font-poppins mb-2">KIIT</h1>
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

export default KIIT
