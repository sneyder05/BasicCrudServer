export interface GetPagedCharactersRequestIn {
    name: string,
    originPlanet: string,
    page: number,
    records: number
}

const GetPagedCharactersValidator = {
    name: {
        type: 'string',
        optional: true,
        empty: true,
        lowercase: true,
        trim: true,
        default: ''
    },
    originPlanet: {
        type: 'string',
        optional: true,
        empty: true,
        lowercase: true,
        trim: true,
        default: ''
    },
    page: 'number|convert|integer|positive|optional|min:1|default:1',
    records: 'number|convert|integer|positive|optional|min:1|default:10'
};

export {
    GetPagedCharactersValidator
}