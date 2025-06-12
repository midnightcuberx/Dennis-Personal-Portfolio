import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Timeline from '@/components/Timeline/Timeline'
import TypingText from '@/components/TypingText/TypingText'
import ContentService from '@/data-layer/ContentService'
import DataService from '@/data-layer/DataService'
import { RiNextjsFill, RiTailwindCssFill } from 'react-icons/ri'
import { AiOutlinePython } from 'react-icons/ai'
import { FaJava } from 'react-icons/fa'
import { SiTypescript } from 'react-icons/si'
import { FaHtml5 } from 'react-icons/fa'

export default async function HomePage() {
  const homeData = await ContentService.getHomeData()
  const workExperience = await DataService.getWorkExperience()

  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-gradient-to-b from-navy-deep via-navy-core to-navy-glow text-white px-6">
        <Navbar
          navElements={[
            { href: '/projects', text: 'Projects' },
            { href: '/leetcode', text: 'Leetcode' },
          ]}
        />
        {/* Hero Section */}
        <div className="mt-50 md:mt-0 md:flex md:items-center md:justify-center px-4 min-h-screen">
          <div className="text-left max-w-3xl mx-auto gap-4">
            <TypingText title={"Hi, I'm"} text={'Dennis Hu'} />
            <p className="text-lg text-blue-200 leading-relaxed mb-8 md:mb-12">{homeData.About}</p>
            <div className="mt-6">
              <a href="/CV.pdf" download target="_blank">
                <button className="bg-white text-blue-900 font-semibold px-6 py-3 rounded-lg hover:bg-gray-200 transition">
                  Download My CV
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Navy-to-white wave transition */}
      <div className="w-full overflow-hidden leading-none relative">
        <svg
          viewBox="0 0 1440 100"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-[100px]"
          preserveAspectRatio="none"
        >
          <path d="M0,0 C480,100 960,0 1440,100 L1440,0 L0,0 Z" fill="#0a2c70" />
        </svg>
      </div>
      {/*Work Experience Section*/}
      <div className="flex justify-center w-[65%] mx-auto my-10">
        <Timeline timelineElements={workExperience} />
      </div>
      <div className="bg-navy-deep">
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
      {/*Projects Section*/}
      {/*Contact Section*/}
      <Footer />
    </div>
  )
}
