export class BaseService {
  get [Symbol.toStringTag]() {
    return __dirname + '\\' + this.constructor.name;
  }
}
