function mergeObj(obj1, obj2) {
    let newObj = {};
    return Object.assign(newObj, obj1, obj2);
}

export {mergeObj}