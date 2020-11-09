export interface AddCharacterRequestIn {
    name: string,
    weight: number,
    colorHair: string,
    originPlanet: string
}

const AddCharacterValidator = {
    name: 'string|min:2|singleLine|trim',
    weight: 'number|convert|positive|min:1',
    colorHair: 'string|min:3|singleLine|trim',
    originPlanet: 'string|min:3|singleLine|trim'
};

export {
    AddCharacterValidator
}