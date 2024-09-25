import { Certificate } from 'src/models/Certificate'
import { Location } from 'src/models/Location'

export class Config {
  domain : string
  port : number
  isSsl: boolean
  location : Array<Location>
  upstream : string
  certificates : Certificate
  certificatesKeyPath : string

  constructor (serverName: string, port: number, isSsl: boolean, location: Array<Location>, upstream : string, certificates: Certificate, certificatesKeyPath: string) {
    this.domain = serverName
    this.port = port
    this.isSsl = isSsl
    this.location = location
    this.upstream = upstream
    this.certificates = certificates
    this.certificatesKeyPath = certificatesKeyPath
  }
}
