import { Pair } from 'src/models/Pair'

export class Location {
  location: string
  proxyPass: Array<string>
  proxySetHeaders: Array<Pair>

  constructor (location: string, proxyPass: Array<string>, proxySetHeaders: Array<Pair>) {
    this.location = location
    this.proxyPass = proxyPass
    this.proxySetHeaders = proxySetHeaders
  }
}
