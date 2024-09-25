export class Certificate {
  principal : string
  notBefore : Date
  notAfter : Date
  path : string

  constructor (principal: string, notBefore: Date, notAfter: Date, path: string) {
    this.principal = principal
    this.notBefore = notBefore
    this.notAfter = notAfter
    this.path = path
  }
}
