import DataService from '@/data-layer/DataService'
import { Message, Project, WorkExperience } from '@/payload-types'
import { MessageCreationType } from '@/types/types'
import { NotFound } from 'payload'

export default class Handlers {
  public static async getProject(id: string): Promise<Project | null> {
    try {
      const project = await DataService.getProjectById(id)
      return project
    } catch (error) {
      if (error instanceof NotFound) {
        console.error(`Project with ID ${id} not found.`)
        return null
      }
      console.error(`Error fetching project with ID ${id}:`, error)
      return null
    }
  }

  public static async getProjects(): Promise<Project[]> {
    try {
      const projects = await DataService.getProjects()
      return projects
    } catch (error) {
      console.error('Error fetching projects:', error)
      return []
    }
  }

  public static async getWorkExperience(): Promise<WorkExperience[]> {
    try {
      const workExperience = await DataService.getWorkExperience()
      return workExperience
    } catch (error) {
      console.error('Error fetching work experience:', error)
      return []
    }
  }

  public static async addMessage(message: MessageCreationType): Promise<void> {
    try {
      await DataService.addMessage(message)
    } catch (error) {
      console.error('Error adding message:', error)
    }
  }
  public static async getMessages(): Promise<Message[]> {
    try {
      const messages = await DataService.getMessages()
      return messages
    } catch (error) {
      console.error('Error fetching messages:', error)
      return []
    }
  }
}
