import {
  Mentor,
  FixedBR,
  NavBar,
  LandingPage,
  Events,
  Footer,
  Achievements,
} from "@/Components"

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
