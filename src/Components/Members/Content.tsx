import { Members, mem_tech } from "./constants"
import Card from "./card"
const Content = () => {
  return (
    <div className="mt-32 flex flex-col">
      <h1 className="text-center font-semibold text-[4rem] text-white">
        Meet Our Team
      </h1>
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-left font-semibold text-[3rem] text-white">Lead</h1>
        <div className="flex md:flex-row flex-col justify-center items-center mx-32 flex-wrap">
          {mem_tech.map((mem: Members, index: number) => (
            <Card
              key={mem.id}
              name={mem.name}
              image={mem.image}
              dept={mem.dept}
              insta_url={mem.insta_url}
              linkedin_url={mem.linkedin_url}
              x_url={mem.x_url}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-left font-semibold text-[3rem] text-white">
          Marketing
        </h1>
        <div className="flex md:flex-row flex-col justify-center items-center mx-32 flex-wrap">
          {mem_tech.map((mem: Members, index: number) => (
            <Card
              key={mem.id}
              name={mem.name}
              image={mem.image}
              dept={mem.dept}
              insta_url={mem.insta_url}
              linkedin_url={mem.linkedin_url}
              x_url={mem.x_url}
            />
          ))}
        </div>
      </div>
      <div className="flex flex-col justify-center items-center mt-12">
        <h1 className="text-left font-semibold text-[3rem] text-white">Tech</h1>
        <div className="flex md:flex-row flex-col justify-center items-center mx-32 flex-wrap">
          {mem_tech.map((mem: Members, index: number) => (
            <Card
              key={mem.id}
              name={mem.name}
              image={mem.image}
              dept={mem.dept}
              insta_url={mem.insta_url}
              linkedin_url={mem.linkedin_url}
              x_url={mem.x_url}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Content
