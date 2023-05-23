import { statusType } from '../../types/features/commons';

export interface characterState {
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
}

export interface charactersState {
    character: characterState,
    charactersList: characterState[],
    status: statusType,
    error: string | null
}