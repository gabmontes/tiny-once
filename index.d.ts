declare function once<T extends (...args: any[]) => any>(fn: T): T;
export = once;
