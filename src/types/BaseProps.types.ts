export type BaseProps<
  T extends HTMLElement | void = void,
  O extends keyof React.HTMLProps<any> = never
> = T extends HTMLElement ? Omit<React.HTMLProps<T>, O> : React.HTMLProps<HTMLDivElement>;
