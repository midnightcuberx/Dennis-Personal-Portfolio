'use client'
import { Project } from '@/payload-types'
import React, { memo } from 'react'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardFooter,
  CardTitle,
} from '../ui/card'
import { Badge } from '../ui/badge'

const ProjectCard: React.FC<Project> = memo(({ projectName, description, date, tags }) => {
  return (
    <Card className="bg-white outline outline-1 outline-navy-glow hover:outline-navy-deep transition-all duration-300 max-w-[500px]">
      <CardHeader>
        <CardTitle className="text-navy-glow">{projectName}</CardTitle>
        <CardDescription>{description}</CardDescription>
      </CardHeader>
      <CardContent className="text-navyglow">
        <time>{date}</time>
        {tags.map((tag) => (
          <Badge key={tag.tag} variant="outline" className="ml-2">
            {tag.tag}
          </Badge>
        ))}
      </CardContent>
    </Card>
  )
})

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
