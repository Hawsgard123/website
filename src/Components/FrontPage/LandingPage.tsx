import { waveSphere } from "./assets"
import Image from "next/image"
const LandingPage = () => {
  return (
    <>
      <div className="lg:flex hidden justify-center items-center overflow-hidden">
        <Image
          src={waveSphere}
          alt="Picture of the author"
          className="sphere mt-24 w-[70vw] h-[80vh]"
        />
        <h1 className="absolute mt-20 font-pacifico text-[15vw]">Qutopia</h1>
      </div>
      <div className="lg:hidden flex justify-center items-center overflow-hidden">
        <Image
          src={waveSphere}
          alt="Picture of the author"
          className="sphere w-[70vw] h-[80vh]"
        />
        <h1 className="absolute my-16 font-pacifico text-[24vw]">Qutopia</h1>
      </div>
    </>
  )
}

export default LandingPage
