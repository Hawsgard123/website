import { pot3, ros, fic, qutopia } from "../assets"

export interface NavLink {
  id: string
  title: string
}

export const navLinks: NavLink[] = [
  {
    id: "about",
    title: "About Us",
  },
  {
    id: "members",
    title: "Members",
  },
  {
    id: "gallery",
    title: "Gallery",
  },
  {
    id: "contact",
    title: "Contact Us",
  },
]

export interface Slides {
  id: string
  title: string
  url: any
  description: string
}

export const slides: Slides[] = [
  {
    id: "ach1",
    title: "Quiz1",
    url: ros,
    description: `I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.`,
  },
  {
    id: "ach2",
    title: "Quiz2",
    url: fic,
    description: `I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.`,
  },
  {
    id: "ach3",
    title: "Quiz3",
    url: pot3,
    description: `I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.`,
  },
  {
    id: "ach4",
    title: "Quiz4",
    url: pot3,
    description: `I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.`,
  },
  {
    id: "ach5",
    title: "Quiz5",
    url: pot3,
    description: `I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.I am Noob. I am Noob. I am Noob. I am Noob. I am Noob. I am Noob.`,
  },
]
