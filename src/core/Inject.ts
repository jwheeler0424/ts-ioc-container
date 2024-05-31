/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
export function Inject(metaParams?: any[]) {
  return function <T extends { new (...args: any[]): object }>(
    target: T,
    _: ClassDecoratorContext,
  ) {
    const constructorParams: any[] = metaParams || [];

    const instance = new target(...constructorParams);
    const properties = Reflect.ownKeys(instance);

    const params = properties.map((key, index) => {
      if (!constructorParams[index]) throw new Error('Missing parameter');
      return { [key]: constructorParams[index] };
    });

    target[Symbol.metadata] = { ...target[Symbol.metadata], params };
  };
}
