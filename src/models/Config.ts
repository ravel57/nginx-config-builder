import { Certificate } from 'src/models/Certificate'
import { Location } from 'src/models/Location'
import {Upstream} from "src/models/Upstream";

export class Config {
  domain : string
  port : number
  isSsl: boolean
  location : Array<Location>
  upstream : Upstream
  certificates : Certificate
  certificatesKeyPath : string

  constructor (
    serverName: string = '',
    port: number = 0,
    isSsl: boolean = false,
    location: Array<Location> = [],
    upstream : Upstream | null = new Upstream(),
    certificates: Certificate | null = new Certificate(),
    certificatesKeyPath: string = '',
  ) {
    this.domain = serverName
    this.port = port
    this.isSsl = isSsl
    this.location = location
    this.upstream = upstream ?? new Upstream()
    this.certificates = certificates ?? new Certificate()
    this.certificatesKeyPath = certificatesKeyPath
  }
}
