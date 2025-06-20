import { Message } from '@/payload-types'

export type MessageCreationType = Omit<Message, 'id' | 'createdAt' | 'updatedAt'>

export enum UserRole {
  Admin = 'admin',
  User = 'user',
}
