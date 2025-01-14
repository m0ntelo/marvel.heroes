export interface Character {
  id: number             
  name: string 
  description: string
  thumbnail: Thumbnail    
  comics?: ResourceList
  series?: ResourceList
  stories?: ResourceList 
  events?: ResourceList
}

export interface Thumbnail {
  path: string
  extension: string
}

export interface ResourceList {
  available: number
  collectionURI: string
  items: ResourceItem[]
}

export interface ResourceItem {
  resourceURI: string
  name: string
}
