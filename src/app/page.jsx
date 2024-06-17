"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGEN CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/hero.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXTO CONTAINER*/}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold">
            Estamos aquí para dejar una marca en el universo
          </h1>
          {/* DESCRIPTION */}
          <p className="md:text-xl">
            Steve Jobs no sólo fue un hombre de éxito en sus misiones: también
            sabía inspirar ese éxito. Y eso se ha notado muchas veces en cosas
            que ha hecho, pero también en cosas que ha dicho. Buen ejemplo es el
            discurso que el cofundador de Apple dio en la Universidad de
            Stanford ante los alumnos que se graduaban.
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">
              Ver Mi Trabajo
            </button>
            <button className="p-4 rounded-lg ring-1 ring-black">
              Contactarme
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
