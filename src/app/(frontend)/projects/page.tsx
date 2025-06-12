import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'

export default async function ProjectsPage() {
  return (
    <div className="flex flex-col">
      <Navbar
        navElements={[
          { href: '/projects', text: 'Projects' },
          { href: '/leetcode', text: 'Leetcode' },
        ]}
      />

      <Footer />
    </div>
  )
}
