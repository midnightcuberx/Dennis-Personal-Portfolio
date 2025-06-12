import { payloadInstance } from './Payload'
import { Home } from '@/payload-types'
import { homeFallback } from '@/fallback-globals/Home'

export default class ContentService {
  public static getHomeData = async (): Promise<Home> => {
    const res = await payloadInstance.findGlobal({
      slug: 'Home',
    })
    if (!res) {
      return homeFallback
    }
    return res
  }
}
