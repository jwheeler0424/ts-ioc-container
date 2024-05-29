export abstract class Base {
  get [Symbol.toStringTag]() {
    return this.constructor.name;
  }
}
