'use client'
import { WorkExperience } from '@/payload-types'
import React, { memo } from 'react'
import { formatDate } from '@/utils/date'

const ProjectCard: React.FC<WorkExperience> = memo(
  ({ startDate, endDate, title, description, company }) => {
    return (
      <div>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-navy-glow rounded-full mt-1.5 -start-1.5 border border-white dark:border-blue-900 dark:bg-blue-700 hover:bg-blue-900"></div>
          <div className="transition-transform duration-300 hover:translate-x-3 max-w-[600px] wrap-break-words">
            <time className="mb-1 text-sm font-normal leading-none text-navy-glow dark:text-blue-500">
              {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
            </time>
            <h3 className="text-lg font-semibold text-navy-glow dark:text-white">
              {company} | {title}
            </h3>
            <p className="mb-4 text-base font-normal text-navy-glow dark:text-blue-400">
              {description}
            </p>
          </div>
        </li>
      </div>
    )
  },
)

ProjectCard.displayName = 'ProjectCard'
export default ProjectCard
