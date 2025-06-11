import Navbar from '@/components/Navbar/Navbar'
import TypingText from '@/components/TypingText/TypingText'

export default async function HomePage() {
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
            <p className="text-sm text-blue-200 leading-relaxed mb-8 md:mb-12">
              I'm a software engineer with a passion for building innovative solutions and projects
              through the art of coding. I specialise in Backend Development with frameworks such as
              TSOA, NextJs, Flask and Express as well as libraries like Firebase Auth. I've also got
              experience in frontend development, with frameworks such as NextJs, and libraries such
              as TanStack Query. When I'm not coding, you can find me playing chess, learning a
              language, or solving my trusty Rubik's Cube.
            </p>
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
