'use cache'

import Navbar from '@/components/Navbar/Navbar'
import Footer from '@/components/Footer/Footer'
import Handlers from '@/handlers/Handlers'
import { redirect } from 'next/navigation'
import Image from 'next/image'
import { FiLink2 } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import { Badge } from '@/components/ui/badge'

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
      <div className="min-h-screen mb-10 flex items-center justify-center text-navy-deep">
        <Navbar navElements={[{ href: '/#projects', text: 'Projects' }]} />
        <div className="mt-30 mx-[5%] w-full md:w-[75%] lg:w-[50%]">
          <div className="flex flex-col gap-6 items-center justify-center">
            <h1 className="text-3xl font-bold mb-4 text-navy-deep">{project.projectName}</h1>
            <Image
              src={`/${project.image}`}
              alt={project.projectName}
              width={600}
              height={450}
              className="w-full h-auto rounded-lg mb-6"
            />
            <div className="flex flex-wrap gap-4 mt-4">
              {project.tags.map((tag) => (
                <Badge key={tag.tag} variant="outline">
                  {tag.tag}
                </Badge>
              ))}
            </div>
            <div className="flex justify-between gap-2 text-navy-deep">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  className="flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FiLink2 /> Live Project
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  className="flex items-center gap-2 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub /> GitHub Repository
                </a>
              )}
            </div>
            <p className="whitespace-pre-line">{project.description}</p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
