'use client'
import { WorkExperience } from '@/payload-types'
import React, { memo } from 'react'
import { formatDate } from '@/utils/date'

const TimelineElement: React.FC<WorkExperience> = memo(
  ({ startDate, endDate, title, description, company }) => {
    return (
      <div>
        <li className="mb-10 ms-4">
          <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700 hover:bg-black"></div>
          <div className="transition-transform duration-300 hover:translate-x-3 max-w-[600px] wrap-break-words">
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              {formatDate(startDate)} - {endDate ? formatDate(endDate) : 'Present'}
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              {company} | {title}
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
        </li>
      </div>
    )
  },
)

TimelineElement.displayName = 'TimelineElement'
export default TimelineElement
