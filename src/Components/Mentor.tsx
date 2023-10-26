import { ros, fic } from "@/assets"
import Image from "next/image"

const Mentor = () => {
  return (
    <div className="flex flex-col justify-center items-center my-12">
      <h1 className="font-poppins font-bold text-[3.5vw]">Our Mentors</h1>
      <div className="flex flex-row my-4 mx-48 rounded-[4rem] bg-gray-200">
        <Image
          src={ros}
          alt={"ros"}
          className="rounded-tl-[4rem] rounded-bl-[4rem] w-[18rem] h-[23rem] mx-4 my-4"
        />
        <div className="flex flex-col my-4 ml-3 mr-5">
          <h1 className="text-black text-[3rem]">SSB</h1>
          <h2 className=" text-black text-[1.2rem] mb-5 ">Head, KSAC</h2>
          <p className="text-black text-justify text-[1.2rem]">
            I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I
            am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am
            Noob. I am Noob. I am Noob. I am Noob.
          </p>
        </div>
      </div>
      <div className="flex flex-row">
        {/* Box1 */}
        <div className="flex flex-row my-4 ml-48 mr-3 rounded-[4rem] bg-gray-200">
          <Image
            src={ros}
            alt={"ros"}
            className="rounded-tl-[4rem] rounded-bl-[4rem] w-[15rem] h-[22rem] mx-4 my-4"
          />
          <div className="flex flex-col my-4 ml-3 mr-5">
            <h1 className="text-black text-[3rem]">SSB</h1>
            <h2 className=" text-black text-[1.2rem] mb-5 ">Head, KSAC</h2>
            <p className="text-black text-justify">
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I
              am Noob.
            </p>
          </div>
        </div>
        {/* Box2 */}
        <div className="flex flex-row my-4 mr-48 ml-3 rounded-[4rem] bg-gray-200">
          <Image
            src={ros}
            alt={"ros"}
            className="rounded-tl-[4rem] rounded-bl-[4rem] w-[15rem] h-[22rem] mx-4 my-4"
          />
          <div className="flex flex-col my-4 ml-3 mr-5">
            <h1 className="text-black text-[3rem]">SSB</h1>
            <h2 className=" text-black text-[1.2rem] mb-5 ">Head, KSAC</h2>
            <p className="text-black text-justify">
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.
              I am Noob.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Mentor
