import Image from "next/image"
import { ksac, kiit, qutopia, facebook, twitter, instagram } from "@/assets"
import { NavLink, navLinks } from "@/constants"

const Footer = () => {
  return (
    <div className="flex-1 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 pt-7 rounded-t-[2rem]">
      <div className="flex flex-row justify-center items-center mb-3">
        <Image
          src={facebook}
          alt={"facebook"}
          className="w-[2rem] h-[2rem] mr-3"
        />
        <Image
          src={instagram}
          alt={"instagram"}
          className="w-[2rem] h-[2rem]"
        />
        <Image
          src={twitter}
          alt={"twitter"}
          className="w-[2rem] h-[2rem] ml-3"
        />
      </div>
      <div className="flex flex-row justify-center items-center mb-4">
        <Image
          src={qutopia}
          alt={"qutopia"}
          className="w-[4rem] h-[4rem] mr-3"
        />
        <h1 className="font-poppins text-[2.5vw] font-bold">Qutopia</h1>
      </div>
      <div className="mb-4">
        <ul className="list-none flex flex-row justify-center items-center">
          {navLinks.map((nav: NavLink, index: number) => (
            <li
              key={nav.id}
              className={`flex flex-row font-poppins font-normal cursor-pointer text-[1rem] text-white`}
            >
              <a href={`${nav.id}`}>{nav.title}</a>
              <p
                className={`mx-6 ${
                  index === navLinks.length - 1 ? "hidden" : ""
                }`}
              >
                |
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Footer
