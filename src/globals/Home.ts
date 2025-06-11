import type { GlobalConfig } from 'payload'

export const Home: GlobalConfig = {
  slug: 'Home',
  admin: {
    group: 'Pages',
  },
  fields: [
    {
      name: 'About',
      type: 'textarea',
      required: true,
      admin: {
        description: 'A brief introduction about yourself. This will be displayed on the homepage.',
        placeholder: 'Write a short introduction about yourself, your skills, and your interests.',
      },
    },
  ],
}
