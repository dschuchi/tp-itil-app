export function hasReadPermission(user) {
    return user.group >= 1
}

export function hasCreatePermission(user) {
    return user.group >= 2
}

export function hasEditingPermission(user) {
    return user.group >= 3
}