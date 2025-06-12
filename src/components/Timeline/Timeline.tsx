'use client'
import React, { memo } from 'react'
import TimelineElement from './TimelineElement'
import { WorkExperience } from '@/payload-types'
interface TimelineProps {
  timelineElements: WorkExperience[]
}

const Timeline: React.FC<TimelineProps> = memo(({ timelineElements }) => {
  return (
    <div>
      <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6">Work Experience</h2>
      <ol className="relative border-s border-gray-200 dark:border-gray-700">
        {timelineElements.map((element, index) => (
          <TimelineElement key={index} {...element} />
        ))}
      </ol>
    </div>
  )
})

Timeline.displayName = 'Timeline'
export default Timeline
