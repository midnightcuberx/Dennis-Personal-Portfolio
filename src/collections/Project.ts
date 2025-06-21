import type { CollectionConfig } from 'payload'

export const Project: CollectionConfig = {
  slug: 'projects',
  admin: {
    useAsTitle: 'projectName',
  },
  fields: [
    {
      name: 'projectName',
      type: 'text',
      required: true,
    },
    {
      name: 'description',
      type: 'textarea',
      required: true,
      admin: {
        description: 'Description of the project',
      },
    },
    {
      name: 'date',
      type: 'text',
      required: true,
    },
    /*{
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: false,
      admin: {
        description: 'Image representing the project',
      },
    },*/
    {
      name: 'image',
      type: 'text',
      required: true,
      admin: {
        description: 'Image URL representing the project',
      },
    },
    {
      name: 'liveUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'URL to the live project',
      },
    },
    {
      name: 'githubUrl',
      type: 'text',
      required: false,
      admin: {
        description: 'URL to the project repository on GitHub',
      },
    },
    {
      name: 'tags',
      type: 'array',
      required: true,
      fields: [
        {
          name: 'tag',
          type: 'text',
          required: true,
        },
      ],
      admin: {
        description: 'Tags associated with the project',
      },
    },
    {
      name: 'order',
      type: 'number',
      required: true,
      unique: true,
      admin: {
        description: 'Order of projects in the timeline',
      },
    },
  ],
}
