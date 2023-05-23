import { CharacterFormType } from '../../interfaces/searchForm';
import './SearchForm.scss';

export const SearchForm = ({
    onSubmitSearchId,
    onChangeSearchId,
    searchId,
    labelText,
}: CharacterFormType): JSX.Element => {
    return (
        <form className="search-form" onSubmit={onSubmitSearchId}>
            <label className="search-form__label">{labelText}</label>
            <input
                className="search-form__input"
                type="text"
                onChange={onChangeSearchId}
                value={searchId}
                placeholder="type your id, eg: 5"
            />
            <button disabled={!searchId} className="search-form__button">Search</button>
        </form>
    );
};