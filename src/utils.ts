import { base } from '../route.config'

export const joinBase = (path: string) => {
  const pathWithoutLeadingSlash = path.replace(/^\//, '')
  return `/${base}/${pathWithoutLeadingSlash}`
}

export const getRoute = (endpoint: string) => {
  const currentPath = window.location.pathname
  const currentPathWithoutTrailingSlash = currentPath.replace(/\/$/, '')
  const baseWithoutTrailingSlash = base.replace(/\/$/, '')
  const endpointWithoutLeadingSlash = endpoint.replace(/^\//, '')
  if (currentPath === '/') {
    return `${baseWithoutTrailingSlash}/${endpointWithoutLeadingSlash}`
  }
  return `${currentPathWithoutTrailingSlash}/${endpointWithoutLeadingSlash}`

}
