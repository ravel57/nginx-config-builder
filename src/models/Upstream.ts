export class Upstream {
  name: string;
  host: string;
  port: number;

  constructor(
    name: string = '',
    host: string = '',
    port: number = 0,
  ) {
    this.name = name;
    this.host = host;
    this.port = port;
  }
}
