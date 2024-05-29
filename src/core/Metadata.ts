export function Metadata(metadata?: Record<string | symbol | number, unknown>) {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  return function <T extends { new (...args: any[]): object }>(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any, @typescript-eslint/ban-types
    target: T,
    ctx: ClassDecoratorContext,
  ) {
    const data = metadata
      ? { ...metadata, CLASS: `${__dirname}\\${ctx.name}` }
      : { CLASS: `${__dirname}\\${ctx.name}` };

    target[Symbol.metadata] = data;
  };
}
