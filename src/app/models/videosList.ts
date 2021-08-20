export interface VideosList {
  cloudinary_video_url: string,
  id: number,
  path: string,
  title: string,
  type_of: string,
  user: { name: string },
  name: string,
  user_id: number,
  video_duration_in_minutes: string,
  video_source_url:string
}
