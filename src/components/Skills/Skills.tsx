import React from 'react'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { AiOutlinePython } from 'react-icons/ai'
import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'

const Skills: React.FC = () => {
  return (
    <div>
      {/*Wave Transition*/}
      <div className="relative w-full h-24 bg-white overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 50 25"
          preserveAspectRatio="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="50" height="25" fill="white" />
          <polygon points="50,25 0,0 0,25" className="fill-navy-deep" />
        </svg>
      </div>
      {/*Skills Section*/}
      <div className="flex justify-center group p-4">
        <h1 className="text-3xl font-bold relative inline-block">
          Skills
          <span className="absolute left-0 -bottom-1 h-1 bg-white w-full origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
        </h1>
      </div>
      <div className="bg-navy-deep grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-4 p-10">
        <RiTailwindCssFill size={200} className="mx-auto my-10" />
        <RiNextjsFill size={200} className="mx-auto my-10" />
        <AiOutlinePython size={200} className="mx-auto my-10" />
        <FaJava size={200} className="mx-auto my-10" />
        <SiTypescript size={200} className="mx-auto my-10" />
        <FaHtml5 size={200} className="mx-auto my-10" />
      </div>

      <div className="relative w-full h-64 bg-white overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 50 50"
          preserveAspectRatio="none"
        >
          <polygon points="50,0 0,0 0,25" className="fill-navy-deep" />
        </svg>
      </div>
    </div>
  )
}

export default Skills
