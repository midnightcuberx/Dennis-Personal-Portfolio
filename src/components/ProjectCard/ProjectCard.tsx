'use client'
import { Project } from '@/payload-types'
import React, { memo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'
import { Badge } from '../ui/badge'
import { FiLink2 } from 'react-icons/fi'
import { FaGithub } from 'react-icons/fa'
import Link from 'next/link'

const ProjectCard: React.FC<Project> = memo(
  ({ id, projectName, tags, image, liveUrl, githubUrl }) => {
    return (
      <Card className="flex flex-col bg-white outline outline-1 outline-navy-glow hover:outline-navy-deep transition-all duration-300 overflow-hidden rounded-2xl hover:scale-105 p-0 m-3">
        {image && (
          <img
            className="rounded-t-2xl w-full"
            src={`/${image}`}
            alt={projectName}
            width={500}
            height={300}
          />
        )}
        <CardHeader>
          <CardTitle className="text-navy-glow">{projectName}</CardTitle>
        </CardHeader>
        <CardContent className="text-navy-glow pb-6 flex flex-col mt-auto">
          <div className="flex justify-between gap-2">
            {liveUrl && (
              <a
                href={liveUrl}
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FiLink2 /> Live Project
              </a>
            )}
            {githubUrl && (
              <a
                href={githubUrl}
                className="flex items-center gap-2 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub /> GitHub Repository
              </a>
            )}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {tags.map((tag) => (
              <Badge key={tag.tag} className="text-navy-deep" variant="outline">
                {tag.tag}
              </Badge>
            ))}
          </div>
          <Link href={`/projects/${id}`}>
            <button className="mt-4 w-full bg-navy-deep rounded-2xl text-white transition-colors duration-300">
              View Project
            </button>
          </Link>
        </CardContent>
      </Card>
    )
  },
)

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
