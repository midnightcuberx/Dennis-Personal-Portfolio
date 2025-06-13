import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Handlers from '@/handlers/Handlers'
import ProjectCard from '@/components/ProjectCard/ProjectCard'
import { Project } from '@/payload-types'

export default async function ProjectsPage() {
  const projects = await Handlers.getProjects()
  /*const projects: Project[] = [
    {
      id: '1',
      projectName: 'Project 1',
      description: 'Description of project 1',
      date: '2023-01-01',
      tags: [{ tag: 'React' }, { tag: 'JavaScript' }],
      order: 1,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
    {
      id: '2',
      projectName: 'Project 2',
      description: 'Description of project 2',
      date: '2023-02-01',
      tags: [{ tag: 'Next.js' }, { tag: 'TypeScript' }],
      order: 2,
      updatedAt: new Date().toISOString(),
      createdAt: new Date().toISOString(),
    },
  ]*/
  return (
    <div className="flex flex-col">
      <div className="min-h-screen mt-50">
        <Navbar
          navElements={[
            { href: '/projects', text: 'Projects' },
            { href: '/leetcode', text: 'Leetcode' },
          ]}
        />
        <div className="mt-30 mx-[20%]">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </div>

      <Footer />
    </div>
  )
}
