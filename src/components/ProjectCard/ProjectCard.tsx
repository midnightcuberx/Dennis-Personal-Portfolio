'use client'
import { Project } from '@/payload-types'
import React, { memo } from 'react'

const ProjectCard: React.FC<Project> = memo(({ projectName, description, date, tags }) => {
  return (
    <div className="bg-navy-deep">
      <h3>{projectName}</h3>
      <p>{description}</p>
      <time>{date}</time>
      <ul>
        {tags.map((tag) => (
          <li key={tag.tag}>{tag.tag}</li>
        ))}
      </ul>
    </div>
  )
})

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
