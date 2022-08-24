import sanitizeHtml from 'sanitize-html'
import { createComment } from '@customTypes/commentTypes'

const sanitize = (value: any) => sanitizeHtml(value, {
  allowedTags: [],
  allowedAttributes: {}
})

const safeHTML = (objectToSanitize: createComment) => {
  for (const [key, value] of Object.entries(objectToSanitize)) {
    sanitize(value)
    objectToSanitize[key as keyof createComment] = value
  }
  return objectToSanitize
}

export default safeHTML
