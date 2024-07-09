export class Wrapper<T> {
  value: T;

  constructor(value: T) {
    this.value = value;
  }

  item(): T {
    return this.value;
  }

  let<R>(block: (it: T) => R): Wrapper<R> | undefined {
    const result = block(this.value);
    if (result !== undefined) return new Wrapper<R>(result);
  }

  letW<R>(block: (it: T) => R): Wrapper<R> {
    const result = block(this.value);
    return new Wrapper<R>(result);
  }

  also(block: (it: T) => void): Wrapper<T> {
    block(this.value);
    return this;
  }

  run<R>(block: (this: T) => R): Wrapper<R> | undefined {
    const result = block.call(this.value);
    if (result !== undefined) return new Wrapper<R>(result);
  }

  runW<R>(block: (this: T) => R): Wrapper<R> {
    const result = block.call(this.value);
    return new Wrapper<R>(result);
  }

  apply(block: (this: T) => void): Wrapper<T> {
    block.call(this.value);
    return this;
  }

  takeIf(predicate: (it: T) => boolean): Wrapper<T> | undefined {
    return predicate(this.value) ? this : undefined;
  }

  takeUnless(predicate: (it: T) => boolean): Wrapper<T> | undefined {
    return predicate(this.value) ? undefined : this;
  }
}

export function use<T>(value: T | undefined): Wrapper<T> | undefined {
  if (value !== undefined) return new Wrapper<T>(value);
}

// @ts-ignore
if (typeof window === "object") window.use = use;

export default use;
