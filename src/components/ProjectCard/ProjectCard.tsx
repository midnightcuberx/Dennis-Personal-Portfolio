'use client'
import { Media, Project } from '@/payload-types'
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
import Image from 'next/image'

const ProjectCard: React.FC<Project> = memo(
  ({ projectName, description, date, tags, image, liveUrl, githubUrl }) => {
    return (
      <Card className="bg-white outline outline-1 outline-navy-glow hover:outline-navy-deep transition-all duration-300 max-w-[500px] overflow-hidden rounded-2xl transition-transform duration-300 hover:scale-105 p-0">
        {image && (
          <Image
            className="rounded-t-2xl"
            src={`${(image as Media).url}`}
            alt={(image as Media).alt || 'Project Image'}
            width={500}
            height={300}
          />
        )}
        <CardHeader>
          <CardTitle className="text-navy-glow">{projectName}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        <CardContent className="text-navy-glow pb-6 flex flex-col">
          {tags.map((tag) => (
            <Badge key={tag.tag} variant="outline">
              {tag.tag}
            </Badge>
          ))}
        </CardContent>
      </Card>
    )
  },
)

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
