export function slugify(string: string) {
    return string
        .toLowerCase()
        .trim()
        .replaceAll('_', '-')
        .replaceAll("'", '_')
        .replace(/[^\w\s-]/g, '')
        .replace(/\s+/g, '-') // .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '')
}

export function deslugify(slug: string) {
    return slug
        .replaceAll('-', ' ')
        .replaceAll('_', "'")
}