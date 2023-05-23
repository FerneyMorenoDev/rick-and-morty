import { ChangeEventType, SubmitEventType } from '../types/Common';

export interface CharacterFormType {
    onSubmitSearchId: (event: SubmitEventType) => void,
    onChangeSearchId: (event: ChangeEventType) => void,
    searchId: string,
    labelText: string,
}