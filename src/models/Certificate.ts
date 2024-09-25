export class Certificate {
  principal : string
  notBefore : string
  notAfter : string
  path : string

  constructor (principal: string, notBefore: string, notAfter: string, path: string) {
    this.principal = principal
    this.notBefore = notBefore
    this.notAfter = notAfter
    this.path = path
  }
}
