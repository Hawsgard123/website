import Image from "next/image"

import {
  gallery1,
  gallery2,
  gallery3,
  gallery4,
  gallery5,
  gallery6,
  gallery7,
  gallery8,
  gallery9,
  gallery10,
} from "./assets"
const Content = () => {
  return (
    <>
      <div className="my-32 flex flex-col">
        <h1 className="text-6xl font-bold text-white-800 text-center mb-8">
          Gallery
        </h1>
        <div className="lg:grid lg:grid-cols-3 flex flex-col flex-wrap justify-center md:mx-12 mx-4">
          {/* Col1 */}
          <div className="flex flex-col items-center mx-4">
            <Image src={gallery1} alt="gallery1" className="my-4 border-4" />
            <Image src={gallery2} alt="gallery2" className="my-4 border-4" />
            <Image src={gallery3} alt="gallery3" className="my-4 border-4" />
          </div>
          {/* Col2 */}
          <div className="flex flex-col items-center mx-4">
            <Image src={gallery4} alt="gallery4" className="my-4 border-4" />
            <Image src={gallery5} alt="gallery5" className="my-4 border-4" />
            <Image src={gallery6} alt="gallery6" className="my-4 border-4" />
          </div>
          {/* Col3 */}
          <div className="flex flex-col items-center mx-4">
            <Image src={gallery7} alt="gallery7" className="my-4 border-4" />
            <Image src={gallery8} alt="gallery8" className="my-4 border-4" />
            <Image src={gallery9} alt="gallery9" className="my-4 border-4" />
            <Image src={gallery10} alt="gallery10" className="my-4 border-4" />
          </div>
        </div>
      </div>
    </>
  )
}

export default Content
