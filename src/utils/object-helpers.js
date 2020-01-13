export const updateObjectInArray = (items, itemId, objPropName, newObjProps) => {
    items.map((item) => item[objPropName] === itemId ? {...item, ...newObjProps} : item)
}