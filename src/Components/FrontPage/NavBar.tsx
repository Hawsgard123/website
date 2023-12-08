import Image from "next/image"
import { qutopia, close, menu } from "./assets"
import { useState } from "react"
import { NavLink, navLinks } from "./constants"

const NavBar = () => {
  const [toggle, setToggle] = useState(false)
  return (
    <>
      <div className="lg:flex fixed z-10 w-full hidden py-2 justify-between items-center rounded-b-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 ">
        <Image
          src={qutopia}
          alt={"qutopia"}
          className="w-[4.5rem] h-[4.5rem] ml-8 mr-24"
        />
        <ul className="list-none md:flex flex-row hidden justify-end items-center mr-10">
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
      <div className="lg:hidden fixed w-full z-10 h-20 flex justify-between items-center rounded-b-[2rem] bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
        <Image
          src={qutopia}
          alt={"qutopia"}
          className="w-[4.5rem] h-[4.5rem] ml-3 mr-24 my-10"
        />
        <Image
          src={toggle ? close : menu}
          alt={"menu"}
          className={`min-w-[7vw] min-h-[3vh] my-2 mx-4`}
          onClick={() => setToggle((prev) => !prev)}
        />
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } absolute top-[6rem] w-full rounded-[2rem] py-4 bg-white text-black`}
        >
          <ul
            className={`list-none flex flex-1 flex-col justify-end items-center`}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-poppins cursor-pointer text-[1.5rem] font-bolder ${
                  index === navLinks.length - 1 ? "mb-0" : "mb-4"
                }`}
              >
                <a href={`${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}

export default NavBar
