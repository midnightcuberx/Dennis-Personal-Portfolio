import { UserRole } from '@/types/types'
import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    {
      name: 'role',
      type: 'select',
      options: Object.values(UserRole),
      defaultValue: UserRole.User,
      required: true,
      admin: {
        description: 'Role of the user, used for access control.',
      },
    },
  ],
}
