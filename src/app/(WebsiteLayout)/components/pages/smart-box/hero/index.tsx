import { Button } from '@mui/material'
import React from 'react'

const SmartBoxHero = () => {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row lg:pl-40 lg:pr-12  px-8 py-12 items-center bg-gray-200">
    <div className="flex flex-col justify-center sm:text-center lg:py-12 lg:text-left xl:w-5/12 xl:py-24">
      <p className="mb-4 font-semibold text-[#0085db] md:mb-6 md:text-lg xl:text-xl">
        Very proud to introduce
      </p>

      <h1 className=" text-4xl font-bold text-black sm:text-5xl md:text-6xl">
        Smart box
      </h1>
      <p className="mb-8 text-xl text-black sm:text-2xl md:mb-12 md:text-3xl">
        350.00 TND
      </p>

      <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-lg">
        It is compatible with standard 140L, 240L and 360L wheelie bins for
        easy and safe waste removal. It communicates the information it
        collects in real time via wireless transmission.
      </p>
      <p className="mb-8 leading-relaxed text-gray-500 md:mb-12 lg:w-4/5 xl:text-md">
        It can also be equipped with various optional features such as
        sprayers and multiple sensors.
      </p>
      <p className="mb-2 leading-relaxed text-gray-500  lg:w-4/5 xl:text-2xl">
        Please request a quote for exact pricing details.
      </p>

      <div className="flex flex-col gap-2.5 sm:flex-row sm:justify-center lg:justify-start">
        <Button
          color="primary"
          variant="contained"
          sx={{
            marginTop: 2,
            borderRadius: "10px",
            paddingTop: "10px",
            paddingBottom: "10px",
          }}
        >
          Request a quote{" "}
        </Button>
      </div>
    </div>

    <div className="sm:h-auto h-48 overflow-hidden  lg:h-auto xl:w-5/12">
      <img
        src="/images/pages/landingpage/about/bin.png"
        loading="lazy"
        alt="bin img"
        className="h-full w-full object-cover object-center"
      />
    </div>
  </section>  )
}

export default SmartBoxHero