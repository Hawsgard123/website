import { ksac, kiit } from "./assets"
import Image from "next/image"

const FixedBR = () => {
  return (
    <div className="fixed flex flex-row items-center right-5 bottom-5 opacity-80">
      <h1 className="tracking-widest font-poppins font-bold text-[1.2rem] mr-4">
        POWERED BY
      </h1>
      <Image src={ksac} alt={"ksac"} className="w-[3.5rem] h-[3rem]" />
      <p className="mx-4">|</p>
      <Image src={kiit} alt={"kiit"} className="w-[4rem] h-[3rem] mr-4" />
    </div>
  )
}

export default FixedBR
