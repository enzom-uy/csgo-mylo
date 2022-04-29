import { object, string } from 'yup'

export const nadeSchema = object().shape({
  name: string().required(),
  map: string().required(),
  location: string().required(),
  type: string().required(),
  videoUrl: string().matches(/./).required()
})
