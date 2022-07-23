export function addIntoMap(map: Map<string, string[]>, key: string, value: string) {
    if (map.get(key) === undefined) {
        map.set(key, [value])
        return;
    }
    map.get(key).push(value)
}