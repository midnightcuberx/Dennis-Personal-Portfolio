'use client'

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
import { type CarouselApi } from '@/components/ui/carousel'

interface CarouselProps {
  projects: Project[]
}

const ProjectCarousel: React.FC<CarouselProps> = React.memo(({ projects }) => {
  const [api, setApi] = React.useState<CarouselApi>()
  const [current, setCurrent] = React.useState(projects.length > 0 ? 1 : 0)
  const [count, setCount] = React.useState(projects.length)

  React.useEffect(() => {
    if (!api) {
      return
    }

    api.on('select', () => {
      setCurrent(api.selectedScrollSnap() + 1)
    })
  }, [api])
  return (
    <div>
      <Carousel
        opts={{
          align: 'start',
          loop: true,
        }}
        className="rounded-2xl"
        setApi={setApi}
      >
        <CarouselContent className="p-2 items-stretch justify-start">
          {projects.map((project, index) => (
            <CarouselItem key={index} className="flex xl:basis-1/2 2xl:basis-1/3">
              <ProjectCard {...project} />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="hidden md:flex" />
        <CarouselNext className="hidden md:flex" />
      </Carousel>
      <div className="md:hidden text-muted-foreground py-2 text-center text-sm">
        Slide {current} of {count}
      </div>
    </div>
  )
})

ProjectCarousel.displayName = 'ProjectCarousel'
export default ProjectCarousel
