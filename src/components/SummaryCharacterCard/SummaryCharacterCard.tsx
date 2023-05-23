import { CharacterProps } from '../../types/Characters';
import { CharacterActions } from '../Characters/CharacterActions';
import { Heading } from '../Heading';
import { InfoEmoji } from '../InfoEmoji/InfoEmoji';
import { Section } from '../Section';
import './SummaryCharacterCard.scss';

export const SummaryCharacterCard = ({ id, image, name, status, species, isError, error, message }: CharacterProps): JSX.Element => {
    return !isError ? (
        <Section className={`summary-character-card summary-character-card--${species}`}>
            <CharacterActions characterId={id}/>
            <img src={image} />
            <Heading className={`summary-character-card__title summary-character-card--${species}__title`}>{name}</Heading>
            <div className="summary-character-card__extra">
                <InfoEmoji status={status} />
                <InfoEmoji species={species} />
            </div>
        </Section>
    ) : (
        <div>
            <h3>{error}</h3>
            <span>{message}</span>
        </div>
    );
};