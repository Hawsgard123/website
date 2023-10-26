import Image from "next/image"
import { qutopia } from "@/assets"
import { NavLink, navLinks } from "@/constants"

const NavBar = () => {
  return (
    <div className="fixed z-10 w-full flex py-2 justify-between items-center rounded-b-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
      <Image
        src={qutopia}
        alt={"qutopia"}
        className="w-[4.5rem] h-[4.5rem] ml-8 mr-24"
      />
      <ul className="list-none flex flex-row justify-end items-center mr-10">
        {navLinks.map((nav: NavLink, index: number) => (
          <li
            key={nav.id}
            className={`font-poppins font-bold cursor-pointer text-[1.2rem] tracking-wide hover:text-black transition delay-150 duration-200 ${
              index === navLinks.length - 1 ? "mr-5" : "mr-16"
            } text-white`}
          >
            <a href={`${nav.id}`}>{nav.title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default NavBar
