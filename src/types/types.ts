import { Message } from '@/payload-types'

export type MessageCreationType = Omit<Message, 'id' | 'createdAt' | 'updatedAt'>
