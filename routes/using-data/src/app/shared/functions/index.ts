export function hasKey<K extends string>(k: K, o: {}): o is { [_ in K]: {} } {
  return typeof o === 'object' && k in o
}
