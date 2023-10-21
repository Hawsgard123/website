import { NavBar, LandingPage, Events, Footer } from "@/Components"

const Home = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <LandingPage />
      <Events />
      <Footer />
    </div>
  )
}

export default Home
