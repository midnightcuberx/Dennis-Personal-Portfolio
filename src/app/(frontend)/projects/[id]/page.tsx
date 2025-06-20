//'use cache'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Handlers from '@/handlers/Handlers'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { redirect } from 'next/navigation'

interface ProjectPageProps {
  params: Promise<{ id: string }>
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const project = await Handlers.getProject((await params).id)
  if (!project) {
    redirect('/404')
  }

  return (
    <div className="flex flex-col">
      <div className="min-h-screen mb-10">
        <Navbar
          navElements={[
            { href: '/#projects', text: 'Projects' },
            { href: '/leetcode', text: 'Leetcode' },
          ]}
        />
        <div className="mt-30 mx-[5%] grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-4 gap-6 p-4">
          <ProjectCard key={project.id} {...project} />
        </div>
      </div>

      <Footer />
    </div>
  )
}
