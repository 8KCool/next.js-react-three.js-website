export interface BlogPost {
  posts: [Object]
  id_post: string
  date_created: string
  date_updated: string
  title: string
  author: string
  content: string
  categories: [string]
  tags: [string]
  original_filename: string
}
