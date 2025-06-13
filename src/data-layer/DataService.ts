import { Project, WorkExperience } from '@/payload-types'
import { payloadInstance } from './Payload'

export default class DataService {
  public static getWorkExperience = async (): Promise<WorkExperience[]> => {
    // neg number = a comes before b
    // pos number = b comes before a
    const res = await payloadInstance.find({ collection: 'workExperience' })
    /*res.docs.sort((a, b) => {
      if (!a.endDate && b.endDate) {
        return -1
      }
      if (a.endDate && !b.endDate) {
        return 1
      }
      if (a.endDate && b.endDate) {
        return new Date(b.endDate).getTime() - new Date(a.endDate).getTime()
      }
      return new Date(b.startDate).getTime() - new Date(a.startDate).getTime()
    })*/
    res.docs.sort((a, b) => {
      return b.order - a.order
    })
    return res.docs
  }

  public static getProjects = async (): Promise<Project[]> => {
    const res = await payloadInstance.find({ collection: 'projects' })
    res.docs.sort((a, b) => {
      return b.order - a.order
    })
    return res.docs
  }

  public static getProjectById = async (id: string): Promise<Project> => {
    const res = await payloadInstance.findByID({
      collection: 'projects',
      id,
    })
    return res
  }
}
