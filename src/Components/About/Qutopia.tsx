import { qutopia, vector1 } from "./assets"
import Image from "next/image"
const Qutopia = () => {
  return (
    <>
      {/* Desktop Screen */}
      <div className="lg:flex flex-row hidden mx-16 mt-56 items-center">
        <Image
          src={qutopia}
          alt="qutopia"
          className="z-5 w-[200vw] h-[60vh] mx-8 rounded-[4rem] object-cover"
        />
        <div className=" z-5 flex flex-col justify-center">
          <h1 className="text-5xl font-bold font-poppins mb-8">Qutopia</h1>
          <p className="text-xl font-poppins">
            Qutopia is a student-run club at KIIT that aims to provide a
            platform for students to learn about and explore the field of
            quantum computing. We aim to achieve this by hosting a variety of
            events throughout the year, including workshops, seminars, and
            hackathons.
          </p>
        </div>
        <Image
          src={vector1}
          alt="vector"
          className="-z-10 absolute w-[50rem] h-[50rem] mx-[30vw]"
        />
      </div>
      {/* Mobile Screen */}
      <div className="lg:hidden flex flex-col my-28">
        <Image
          src={qutopia}
          alt="qutopia"
          className="z-5 w-[20rem] h-[20rem] m-6 rounded-[4rem] object-cover mb-8"
        />
        <div className="z-5 flex flex-col justify-center mx-8">
          <h1 className="text-[2rem] font-bold font-poppins mb-2">Qutopia</h1>
          <p className="text-[1rem] font-poppins">
            Qutopia is a student-run club at KIIT that aims to provide a
            platform for students to learn about and explore the field of
            quantum computing. We aim to achieve this by hosting a variety of
            events throughout the year, including workshops, seminars, and
            hackathons.
          </p>
        </div>
      </div>
    </>
  )
}

export default Qutopia
