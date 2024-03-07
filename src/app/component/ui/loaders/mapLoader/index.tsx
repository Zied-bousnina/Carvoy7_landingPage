import Image from 'next/image'
import React from 'react'

const MapLoader = () => {
  return (
    <div
    style={{ transform: "translate(-50%, -50%)", borderRadius: "30px" }}
    className="absolute flex justify-center items-center top-[50%] left-[50%] z-[10000] w-full h-full bg-slate-700 bg-opacity-30"
  >
    <Image
      className=""
      src="/images/markers/marker-loader-gif.gif"
      alt="loader"
      width={100}
      height={100}
    />
  </div>
  )
}

export default MapLoader