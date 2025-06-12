import Navbar from '@/components/Navbar/Navbar'
import Timeline from '@/components/Timeline/Timeline'
import TypingText from '@/components/TypingText/TypingText'
import ContentService from '@/data-layer/ContentService'
import DataService from '@/data-layer/DataService'

export default async function HomePage() {
  const homeData = await ContentService.getHomeData()
  const workExperience = await DataService.getWorkExperience()

  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-gradient-to-b from-navy-deep via-navy-core to-navy-glow text-white font-sans px-6">
        <Navbar
          navElements={[
            { href: '/projects', text: 'Projects' },
            { href: '/leetcode', text: 'Leetcode' },
          ]}
        />
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
      {/*Work Experience Section*/}
      <div className="flex justify-center w-[65%] mx-auto">
        <Timeline timelineElements={workExperience} />
      </div>
      {/*Skills Section*/}
      {/*Projects Section*/}
      {/*Contact Section*/}
    </div>
  )
}
