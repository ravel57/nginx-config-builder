export class Location {
  proxyPass: Array<string>
  upstream : string

  constructor (proxyPass: Array<string>, upstream: string) {
    this.proxyPass = proxyPass
    this.upstream = upstream
  }
}
