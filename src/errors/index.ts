/**Can be used as expression, e.g. "const res = nullableVar ?? throwErr()*/
export const throwErr = (msg: string): never => {
    throw new Error(msg)
}

export const readENV = (env: string): string => (
    process.env[env]?.toString() ?? throwErr(`ENV ${env} is undefined`)
)