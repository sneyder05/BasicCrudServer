export interface LoadCharacterRequestIn {
    id: string
}

const LoadCharacterValidator = {
    id: 'string|length:24|singleLine|trim'
};

export {
    LoadCharacterValidator
}