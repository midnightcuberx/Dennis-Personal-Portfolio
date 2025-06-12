import type { CollectionConfig } from 'payload'

export const WorkExperience: CollectionConfig = {
  slug: 'workExperience',
  admin: {
    useAsTitle: 'company',
  },
  fields: [
    {
      name: 'title',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Description of the experience',
      },
    },
    {
      name: 'startDate',
      type: 'date',
      required: true,
    },
    {
      name: 'endDate',
      type: 'date',
      required: false,
    },
    {
      name: 'company',
      type: 'text',
      required: true,
    },
  ],
}
