"use client";
import { motion } from "framer-motion";

const AboutPage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll">
        {/*  TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:px-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64">
          {/*  BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SOBRE MI</h1>
            <p className="text-lg">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
              quae ab illo inventore veritatis et quasi architecto beatae vitae
              dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit
              aspernatur aut o dit aut fugit, sed quia consequuntur magni
              dolores eos qui ratione voluptatem sequi nesciunt.
            </p>
            <span className="italic">
              Nemo enim ipsam voluptatem quia voluptas sit
            </span>
          </div>
          {/*  SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            <h1 className="font-bold text-2xl">SKILLS</h1>
            <div className="flex gap-4 flex-wrap">
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                JavaScript
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                SQL
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                C#
              </div>
              <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">
                REACT.JS
              </div>
            </div>
          </div>
          {/*  EXPERIENCE CONTAINER */}
          <div className="flex flex-col gap-12 justify-center pb-48">
            <h1 className="font-bold text-2xl">EXPERIENCE</h1>
            {/*  EXPERIENCE LIST */}
            <div>
              {/*  EXPERIENCE LIST ITEM */}
              <div>
                {/*  LEFT */}
                <div className="w-1/3 ">
                  {/*  JOB TITLE*/}
                  <div className="bg-white p-3 font-semibold rounded-b-lg rounded-s-lg">
                    FARMACIA
                  </div>
                  {/*  JOB DESC*/}
                  <div className="p-3 text-sm italic">asdfgasdfasdfa</div>
                  {/*  JOB DATE*/}
                  <div className="p-3 text-red-400 text-sm font-semibold">
                    24-02
                  </div>
                  {/*  JOB COMPANY*/}
                  <div className="p-1 rounded bg-white text-sm font-semibold w-fit">
                    ANTARES
                  </div>
                </div>
                {/*  CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div></div>
                  </div>
                </div>
                {/*  RIGHT */}
              </div>
            </div>
            <div>
              {/*  EXPERIENCE LIST ITEM */}
              <div className="flex justify-between h-48">
                {/*  LEFT */}
                <div className="w-1/3"></div>
                {/*  CENTER */}
                <div className="w-1/6">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>
                {/*  RIGHT */}
                <div className="w-1/3">
                  <div>
                    {/*  JOB TITLE*/}
                    UNIVERSO BINARIO
                  </div>
                  <div>
                    {/*  JOB DESC*/}
                    asdfgasdfasdfa
                  </div>
                  <div>
                    {/*  JOB DATE*/}
                    24-02
                  </div>
                  <div>
                    {/*  JOB COMPANY*/}
                    ANTARES
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* SVG CONTAINER */}
        <div className="hidden"></div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
