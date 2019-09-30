export function isComponent(maybeComponent) {
    return (
        typeof maybeComponent === 'function' &&
        maybeComponent.__proto__.name === 'SvelteComponent'
    )
}
export function camelCase(str) { 
    return str
        .replace(/-([a-z])/g, g => g[1]
        .toUpperCase()); 
}
