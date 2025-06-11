import Navbar from '@/components/Navbar/Navbar'
import TypingText from '@/components/TypingText/TypingText'
import { Home } from '@/payload-types'
import { homeFallback } from '@/fallback-globals/Home'
import { payloadInstance } from '@/data-layer/Payload'

export default async function HomePage() {
  const getHomeData = async (): Promise<Home> => {
    const res = await payloadInstance.findGlobal({
      slug: 'Home',
    })
    if (!res) {
      return homeFallback
    }
    return res
  }

  const homeData = await getHomeData()

  return (
    <div className="flex flex-col">
      <div className="min-h-screen bg-gradient-to-b from-navy-deep via-navy-core to-navy-glow text-white font-sans px-6 py-8">
        <Navbar
          navElements={[
            { href: '/projects', text: 'Projects' },
            { href: '/leetcode', text: 'Leetcode' },
          ]}
        />
        <div className="mt-50 px-4">
          <div className="text-center md:text-left max-w-3xl mx-auto gap-4">
            <TypingText title={"Hi, I'm"} text={'Dennis Hu'} />
            <p className="text-sm text-blue-200 leading-relaxed mb-8 md:mb-12">{homeData.About}</p>
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
      {/*Work Expereince Section*/}

      {/*Skills Section*/}
      {/*Projects Section*/}
      {/*Contact Section*/}
    </div>
  )
}
