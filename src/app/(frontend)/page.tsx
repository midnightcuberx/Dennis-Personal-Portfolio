//'use cache'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Timeline from '@/components/Timeline/Timeline'
import TypingText from '@/components/TypingText/TypingText'
import ContentService from '@/data-layer/ContentService'
import Skills from '@/components/Skills/Skills'
import ContactForm from '@/components/ContactForm/ContactForm'
import Handlers from '@/handlers/Handlers'
import ProjectCarousel from '@/components/ProjectCarousel/ProjectCarousel'

export default async function HomePage() {
  const homeData = await ContentService.getHomeData()
  const workExperience = await Handlers.getWorkExperience()
  const projects = await Handlers.getProjects()

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
      <div className="flex justify-center items-center w-full md:w-[60%] md:mx-[20%] my-10">
        <Timeline timelineElements={workExperience} />
      </div>
      <div className="bg-navy-deep">
        <Skills />
      </div>
      <div className="w-[80%] md:w-[65%] mx-auto my-10">
        <ProjectCarousel projects={projects} />
      </div>
      {/*Contact Section*/}
      <div className="w-[80%] md:w-[65%] mx-auto my-10">
        <ContactForm />
      </div>

      <Footer />
    </div>
  )
}
