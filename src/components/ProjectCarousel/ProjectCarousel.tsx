import * as React from 'react'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel'
import { Project } from '@/payload-types'
import ProjectCard from '../ProjectCard/ProjectCard'

interface CarouselProps {
  projects: Project[]
}

const ProjectCarousel: React.FC<CarouselProps> = React.memo(({ projects }) => {
  return (
    <Carousel
      opts={{
        align: 'start',
        loop: true,
      }}
      className="rounded-2xl"
    >
      <CarouselContent className="p-2 items-stretch justify-start">
        {projects.map((project) => (
          <CarouselItem key={project.id} className="flex xl:basis-1/2 2xl:basis-1/3">
            <ProjectCard {...project} />
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden md:flex" />
      <CarouselNext className="hidden md:flex" />
    </Carousel>
  )
})

ProjectCarousel.displayName = 'ProjectCarousel'
export default ProjectCarousel
