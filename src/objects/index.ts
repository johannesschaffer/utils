/** Filter out empty/null objects*/
export function cleanObject<T extends {}>(obj: T): T {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => v != null)) as T
}