import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <div className="min-h-screen mt-50">
        <Navbar
          navElements={[
            { href: '/projects', text: 'Projects' },
            { href: '/leetcode', text: 'Leetcode' },
          ]}
        />
        <div className=""></div>
      </div>

      <Footer />
    </div>
  )
}
