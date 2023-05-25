import { CharacterProps } from '../../types/Characters';
import { CharacterActions } from '../Characters/CharacterActions';
import { Heading } from '../Heading';
import { InfoEmoji } from '../InfoEmoji/InfoEmoji';
import { Section } from '../Section';
import './CharacterSummaryCard.scss';

export const CharacterSummaryCard = ({ id, image, name, status, species, isError, error, message }: CharacterProps): JSX.Element => {
    return !isError ? (
        <Section className={`character-summary-card character-summary-card--${species}`}>
            <CharacterActions characterId={id}/>
            <img src={image} />
            <Heading className={`character-summary-card__title character-summary-card--${species}__title`}>{name}</Heading>
            <div className="character-summary-card__extra">
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