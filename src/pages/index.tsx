import {
  Mentor,
  FixedBR,
  NavBar,
  LandingPage,
  Events,
  Footer,
  Achievements,
} from "@/Components/FrontPage"

import about from "./about"
import members from "./members"
import gallery from "./gallery"
import contact from "./contact"

const Home = () => {
  return (
    <div className="flex flex-col">
      {/* <FixedBR /> */}
      <NavBar />
      <LandingPage />
      <Mentor />
      <Achievements />
      <Footer />
    </div>
  )
}

export default Home
