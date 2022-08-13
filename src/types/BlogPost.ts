export interface BlogPost {
  posts: any
  id_post: string
  date_created: string
  date_updated: string
  title: string
  author: string
  content: string
  categories: Array<string>
  tags: Array<string>
  original_filename: string
}
