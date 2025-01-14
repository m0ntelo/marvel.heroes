export interface ApiResponse<T> {
  code: number
  status: string
  data: ApiDataContainer<T> 
}

export interface ApiDataContainer<T> {
  offset: number
  limit: number
  total: number
  count: number
  results: T[]
}
