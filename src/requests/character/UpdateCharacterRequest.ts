export interface UpdateCharacterRequestIn {
    id: string,
    name: string,
    weight: number,
    colorHair: string,
    originPlanet: string
}

const UpdateCharacterValidator = {
    id: 'string|length:24|singleLine|trim',
    name: 'string|min:2|singleLine|trim',
    weight: 'number|convert|positive|min:1',
    colorHair: 'string|min:3|singleLine|trim',
    originPlanet: 'string|min:3|singleLine|trim'
};

export {
    UpdateCharacterValidator
}