export function formatTitle(title) {
    return title.toLowerCase().replace(/\s/g, '-')
}

export function joinObjectsKeyInARow(list, key, separator) {
    return list.map(item => item[key]).join(separator)
}