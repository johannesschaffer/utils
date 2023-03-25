export const array = (n: number) => Array.from(Array(n).keys())

export const remFromEnd = <T>(arr: Array<T>, n: number) => arr.slice(0, arr.length-n)

export const remDuplicates = <T>(arr1: Array<T>, arr2: Array<T>) => [...new Set([...arr1, ...arr2])]
