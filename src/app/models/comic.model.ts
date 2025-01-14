import { Thumbnail, ResourceList } from '@models/character.model'

export interface Comic {
  id: number
  title: string
  description: string
  pageCount: number
  thumbnail: Thumbnail
  characters: ResourceList
  series: ResourceList
}
