export function stripEmptyLines(str: string) {
    return str.replace(/(^[ \t]*\n)/gm, "")
}

export function capitalize(str: string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}