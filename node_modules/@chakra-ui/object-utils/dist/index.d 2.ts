declare function compact<T extends Record<any, any>>(object: T): {} & T;
declare function omit<T extends Record<string, any>, K extends keyof T>(object: T, keysToOmit?: K[]): Omit<T, K>;
declare function pick<T extends Record<string, any>, K extends keyof T>(object: T, keysToPick: K[]): { [P in K]: T[P]; };
declare function split<T extends Record<string, any>, K extends keyof T>(object: T, keys: K[]): [{ [P in K]: T[P]; }, Omit<T, K>];
declare function assignAfter(target: Record<string, any>, ...sources: any[]): Record<string, unknown>;

export { assignAfter, compact, omit, pick, split };
