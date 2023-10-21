import { udghosh, launchpad } from "@/assets"
import Image from "next/image"

const Events = () => {
  return (
    <section className="flex flex-col items-center py-32">
      <h1 className="font-poppins font-bold text-[3.5vw]">Our Events</h1>
      <div className="flex flex-row justify-center mt-10">
        <Image
          src={launchpad}
          alt={"Launchpad"}
          className="w-[32vw] h-[48vh] object-contain"
        />
        <Image
          src={udghosh}
          alt={"Udghosh"}
          className="w-[32vw] h-[48vh] object-contain"
        />
      </div>
    </section>
  )
}

export default Events
