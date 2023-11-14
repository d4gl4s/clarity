export interface postType {
  postId: number
  title: string
  description: string
  contentBlocks: contentBlock[]
  shareCount: number
  dateCreated: string
  authors: userType[]
  topics: string[]
  category: string
}

export interface contentBlock {
  blockId: number
  body: string
  orderNumber: number
  type: string
  ref?: string
  refNumber?: string
  title?: string
  author?: string
  url?: string
  year?: number
}

export interface userPageResponse {
  user: userType
  posts: postType[]
}

export interface userType {
  userId: number
  firstName: string
  lastName: string
  email: string
  bio: string
  timestamp: string
}

export interface errorResponse {
  statusCode: number
  message: string
  timestamp: Date
}
