import { statusType } from '../../types/features/commons';

export interface episodeState {
    id?: number,
    name?: string,
    airDate?: string,
    episode?: string,
    characters?: string[],
}

export interface episodesState {
    episode: episodeState,
    episodesList: episodeState[],
    status: statusType,
    error: string | null
}