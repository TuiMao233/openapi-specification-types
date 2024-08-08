import { AnyObject } from './common'
import { Server } from './server'
import { Tag } from './tag'
import { Paths } from './paths'
import { Components } from './components'

export interface OpenAPISpecificationV3 extends AnyObject {
  openapi: string
  info: {
    description: string
    version: string
    title: string
    termsOfService: string
    contact: Record<'name' | 'url' | 'email', string>
    license: Record<'name' | 'url', string>
  }
  externalDocs: {
    description: string
    url: string
  }
  servers: Server[]
  tags: Tag[]
  paths: Paths
  components: Components
}
