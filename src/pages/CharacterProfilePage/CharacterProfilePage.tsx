import { useParams } from 'react-router-dom';
import { charactersState } from '../../interfaces/features/characters';
import { useSelector } from 'react-redux';
import { Section } from '../../components/Section';
// import { Heading } from '../../components/Heading';
import { ProfileCharacterCard } from '../../components/ProfileCharacterCard/ProfileCharacterCard';

export const CharacterProfilePage = () => {
    const { characterId } = useParams();
    const character = useSelector((state: {characters: charactersState}) => state.characters.character);
    const charactersList = useSelector((state: {characters: charactersState}) => state.characters.charactersList);
    console.log('characterId', characterId);
    console.log('charactersList', charactersList);
    
    const characterData = charactersList.find(character => character.id === Number(characterId)) || character;
    console.log('character', character);
    return (
        <Section className='character-profile'>
            <ProfileCharacterCard {...characterData}/>
        </Section>
    );
};