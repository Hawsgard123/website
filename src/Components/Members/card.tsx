import Image from "next/image"
import { instagram, linkedin, twitter } from "./assets"
interface CardProps {
  name: string
  image: any
  dept: string
  insta_url: string
  linkedin_url: string
  x_url: string
}
const card = ({
  name,
  image,
  dept,
  insta_url,
  linkedin_url,
  x_url,
}: CardProps) => {
  return (
    <div className="border-2 rounded-[1.7rem] bg-gradient-to-br from-[#642B73] to-[#C6426E] items-center bg-white mx-4 my-8 flex flex-col w-[14rem] h-[20rem]">
      <Image
        src={image}
        alt="image"
        className="w-[8rem] h-[8rem] rounded-full object-cover border-4 border-white mt-4 object-top"
      />
      <h1 className="bg-transparent text-white font-poppins font-semibold mt-4 text-[1.5rem]">
        {name}
      </h1>
      <div className="flex flex-row gap-6 items-end mt-20">
        <a href={insta_url}>
          <Image
            src={instagram}
            alt="instagram"
            className="bg-transparent w-[1.5rem] h-[1.5rem]"
          />
        </a>
        <a href={linkedin_url}>
          <Image
            src={linkedin}
            alt="linkedin"
            className="bg-transparent w-[1.5rem] h-[1.5rem]"
          />
        </a>
        <a href={x_url}>
          <Image
            src={twitter}
            alt="twitter"
            className="bg-transparent w-[1.5rem] h-[1.5rem]"
          />
        </a>
      </div>
    </div>
  )
}

export default card
