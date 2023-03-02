export interface TeamMember {
  map(arg0: () => void): unknown
  members: any
  backgroundInformation: string
  category: string
  icon: ''
  id: string
  image: string
  longDescription: string
  name: string
  position: number
  project: string
  shortDescription: string
  socialLinks: {
    facebook?: string
    youtube?: string
    instagram?: string
    quora?: string
    LinkedIn?: string
    Twitter?: string
  }
  title: string
}
