import { BsPersonFill, BsBookmarkPlusFill, BsBookmarkXFill } from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import { addToList, removeFromList } from '../../features/characters/charactersSlice';
import './CharacterActions.scss';
import { charactersState } from '../../interfaces/features/characters';
import { Link } from 'react-router-dom';

type CharacterActionsProps = {
    characterId: number | null | undefined,
    className?: string,
}

export const CharacterActions = ({ characterId, className = '' }: CharacterActionsProps) => {
    const dispatch = useDispatch();
    const isCharacterAdded = useSelector((state: {characters: charactersState} ) => state.characters.charactersList.find((character) => character.id === characterId));
    const charactersList = useSelector((state: {characters: charactersState}) => state.characters.charactersList);
    const charactersListCount = charactersList.length;

    const handleAddRemoveCharacter = () => {
        if (!isCharacterAdded && charactersListCount < 6) {
            dispatch(addToList(characterId));
        } else {
            dispatch(removeFromList(characterId));
        }
    };

    const addRemove = !isCharacterAdded ? 'add' : 'remove'; 

    return (
        <div className={`character-actions ${className}`}>
            <Link to={`/characters/${characterId}`}>
                <button className="character-actions__btn character-actions__profile-btn"><BsPersonFill /></button>
            </Link>
            <button className={`character-actions__btn character-actions__${addRemove}-btn`} onClick={handleAddRemoveCharacter}>
                {!isCharacterAdded ? (<BsBookmarkPlusFill />) : (<BsBookmarkXFill />)}
            </button>
        </div>
    );
};