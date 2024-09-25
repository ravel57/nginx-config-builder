import { Certificate } from 'src/models/Certificate'
import { Location } from 'src/models/Location'

export class Config {
  domainName : string
  port : string
  location : Location
  certificates : Certificate
  certificatesKeyPath : string

  constructor (serverName: string, port: string, location: Location, certificates: Certificate, certificatesKeyPath: string) {
    this.domainName = serverName
    this.port = port
    this.location = location
    this.certificates = certificates
    this.certificatesKeyPath = certificatesKeyPath
  }
}
