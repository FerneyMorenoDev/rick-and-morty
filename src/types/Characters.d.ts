export interface CharacterData {
    id?: number,
    name?: string,
    status?: string,
    species?: string,
    image?: string,
    gender?: string,
    episode?: string[],
    created?: string,
    type?: string,
    location?: {
        name: string,
        url: string,
    },
    origin?: {
        name: string,
        url: string,
    }
    isError?: boolean,
    error?: string,
    message?: string,
}

export type CharacterProps = CharacterData;