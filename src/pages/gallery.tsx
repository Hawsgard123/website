import { NavBar, Footer } from "@/Components/FrontPage"
import Content from "@/Components/Gallery/Content"
const gallery = () => {
  return (
    <div className="flex flex-col">
      <NavBar />
      <Content />
      <Footer />
    </div>
  )
}

export default gallery
