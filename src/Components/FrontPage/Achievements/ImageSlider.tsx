import { useState, useEffect, useRef } from "react"
import { Slides, slides } from "../constants"
import Image from "next/image"

const ImageSlider = () => {
  const wid = 70
  const val = Math.floor(slides.length / 2)
  const [currentIndex, setCurrentIndex] = useState(0)
  const timerRef = useRef<NodeJS.Timeout | null>(null)
  useEffect(() => {
    if (timerRef.current) {
      clearTimeout(timerRef.current)
    }
    timerRef.current = setTimeout(() => {
      let newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1
      setCurrentIndex(newIndex)
    }, 5000)

    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current)
      }
    }
  }, [currentIndex, val])

  return (
    <>
      <div className="w-[70rem] overflow-hidden">
        <div
          className="lg:flex hidden ease-in-out duration-500"
          style={{
            width: `${slides.length * 70}rem`,
            transform: `translateX(${-currentIndex * 70}rem)`,
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className="flex flex-row mx-4 w-[70rem] h-[30rem] rounded-[4rem] bg-gray-600"
            >
              <Image
                src={slides[index].url}
                alt={slides[index].title}
                className="rounded-tl-[4rem] rounded-bl-[4rem] w-[18rem] h-[28rem] mx-4 my-4"
              />
              <div className="flex flex-col my-4 ml-3 mr-5 text-white">
                <h1 className=" text-[3rem]">{slides[index].title}</h1>
                <h2 className=" text-[1.2rem] mb-5">{slides[index].id}</h2>
                <p className="text-justify text-[1.2rem]">
                  {slides[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="lg:hidden w-[20rem] overflow-hidden">
        <div
          className="flex ease-in-out duration-500"
          style={{
            width: `${slides.length * 20}rem`,
            transform: `translateX(${-currentIndex * 20}rem)`,
          }}
        >
          {slides.map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center w-[20rem] rounded-[4rem] bg-gray-600"
            >
              <Image
                src={slides[index].url}
                alt={slides[index].title}
                className="rounded-[4rem] px-4 py-4 object-contain"
              />
              <div className="flex flex-col mx-7 text-white">
                <h1 className=" text-[3rem]">{slides[index].title}</h1>
                <h2 className=" text-[1.2rem] mb-5">{slides[index].id}</h2>
                <p className="text-justify text-[1.2rem] mb-6">
                  {slides[index].description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
export default ImageSlider
