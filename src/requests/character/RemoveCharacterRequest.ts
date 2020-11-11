export interface RemoveCharacterRequestIn {
    id: string
}

const RemoveCharacterValidator = {
    id: 'string|length:24|singleLine|trim'
};

export {
    RemoveCharacterValidator
}