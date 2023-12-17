import { NavBar, Footer } from "@/Components/FrontPage"
import { Content } from "@/Components/Members"
const members = () => {
  return (
    <>
      <div className="flex flex-col">
        <NavBar />
        <Content />
      </div>
    </>
  )
}

export default members
