import { motion } from "framer-motion";
import React from "react";
import { ReactTyped } from "react-typed";
import ShuffleCard from "./ShuffleCardsGrid";
export default function Grid() {
  return (
    <div className=" w-screen h-fit relative">
      <section className=" w-full grid grid-cols-5 md:grid-cols-12 h-[120vh] lg:h-screen overflow-y-clip">
        {Array.from(Array(20 * 12), (i, index) => (
          <motion.div
            key={index}
            className=" aspect-square bg-neutral-950 border border-neutral-900 "
            whileHover={{ backgroundColor: "#B15EFF" }}
            transition={{ duration: 3, ease: "easeOut" }}
          />
        ))}
      </section>
      <div className=" flex flex-col lg:flex-row items-center justify-evenly pointer-events-none absolute inset-0 gap-5 overflow-hidden px-6">
        <div
          className=" flex flex-col items-center lg:items-start justify-center pointer-events-none lg:w-[35vw] gap-5 pt-[100px] lg:pt-0
         "
        >
          <motion.h1 className=" text-2xl text-neutral-200 pointer-events-none">
            Welcome to👋 ,
          </motion.h1>
          <motion.h1 className=" text-4xl text-center lg:text-left z-[999] whitespace-nowrap md:text-wrap lg:text-nowrap md:text-6xl font-bold  pointer-events-none md:leading-[70px] bg-gradient-to-r from-purple-600 via-white to-blue-400 text-transparent ... bg-clip-text">
            Parindeyy Wings Of <br /> Imagination
          </motion.h1>
          <motion.p className=" w-[90vw] lg:w-[35vw] text-slate-500 text-md text-center lg:text-justify pointer-events-none">
            "Parindeyy Studioz brings your vision to life with exceptional event
            planning, mesmerizing cultural dance performances, and top-notch
            film production services. Let us create unforgettable moments for
            your special occasions!"
            {/* <ReactTyped
              className=" text-orange-500"
              strings={["products", "categories", "brands"]}
              typeSpeed={40}
              backSpeed={50}
              loop
            >
            </ReactTyped> */}
          </motion.p>
          <motion.button
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className=" text-neutral-100 rounded-full text-xl md:text-3xl bg-indigo-700 px-10 py-3 border border-indigo-900 pointer-events-auto"
          >
            Explore Now{" "}
          </motion.button>{" "}
        </div>
        <ShuffleCard />
      </div>
    </div>
  );
}
