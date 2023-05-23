import React, { useState } from 'react';
import { Ripples } from '@uiball/loaders';
import { Section } from '../Section';
import './Characters.scss';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchCharacter } from '../../features/characters/charactersSlice';
import _ from 'lodash';
import { SearchForm } from '../SearchForm/SearchForm';
import { ChangeEventType, SubmitEventType } from '../../types/Common';
import { charactersState } from '../../interfaces/features/characters';
import { CharacterList } from './CharactersList';
import { SummaryCharacterCard } from '../SummaryCharacterCard/SummaryCharacterCard';

export const Characters = (): JSX.Element => {
    const [characterId, setCharacterId] = useState<string>('');
    const [isError, setIsError] = useState<boolean>(false);
    const dispatch = useDispatch<any>();

    const character = useSelector((state: {characters: charactersState}) => state.characters.character);
    const charactersList = useSelector((state: {characters: charactersState}) => state.characters.charactersList);
    const characterStatus = useSelector((state: {characters: charactersState}) => state.characters.status);

    const isFetching = characterStatus === 'loading';

    const getCharacterById = async (id: string) => {
        try {
            const response = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
            if (!response.ok) {
                const { error } = await response.json();
                setIsError(true);
                return {
                    error,
                    message: `This is an HTTP error: The status is ${response.status}`,
                };
            }
            const character = response.json();
            setIsError(false);
            return character;
        } catch(error) {
            console.error(error);
            return error;
        }
    };

    const handleChangeCharacterId = (event: ChangeEventType) => {
        if (!isNaN(Number(event.target.value))) setCharacterId(event.target.value);
        return;
    };

    const handleSubmitCharacterId = async(event: SubmitEventType) => {
        event.preventDefault();
        dispatch(fetchCharacter(characterId));
        setCharacterId('');
    };

    const isListCharactersEmpty = !(charactersList && charactersList.length > 0);

    return (
        <div className='characters'>
            <Section className='characters__character'>
                <SearchForm
                    onSubmitSearchId={handleSubmitCharacterId}
                    onChangeSearchId={handleChangeCharacterId}
                    searchId={characterId}
                    labelText='Find a character between 1 and 826'
                />
                {isFetching && (
                    <Ripples 
                        size={45}
                        speed={2} 
                        color="black" 
                    />
                )}

                {!isFetching && !_.isEmpty(character) && (
                    <SummaryCharacterCard {...character} isError={isError} />
                )}
            </Section>
            <CharacterList
                charactersCount={charactersList.length}
            >
                {!isListCharactersEmpty ? (
                    charactersList.map((character: any) => (
                        <SummaryCharacterCard key={character.id} {...character} />
                    ))
                ) : (
                    <div>Characters not added yet</div>
                )}
            </CharacterList>
        </div>
    );
};