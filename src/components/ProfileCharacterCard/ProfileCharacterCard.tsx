import { characterState } from '../../interfaces/features/characters';
import { formatDate, formatEpisode } from '../../utils';
import { Heading } from '../Heading';
import { InfoEmoji } from '../InfoEmoji/InfoEmoji';
import { Section } from '../Section';
import './ProfileCharacterCard.scss';

export const ProfileCharacterCard = ({
    image,
    name,
    episode,
    location,
    origin,
    species,
    status,
    type,
    gender,
    created,
}: characterState): JSX.Element => {
    return (
        <Section className={`profile-character-card profile-character-card--${species}`}>
            <Section className='profile-character-card__details'> 
                <img src={image}/>
                <div className='profile-character-card__info'>
                    <Heading className='profile-character-card__title'>
                        {name}
                        <span>{type || 'unknown'}</span>    
                    </Heading>
                    <span className='profile-character-card__date'>
                        Created on: {formatDate(created)}
                    </span>
                    <div className='profile-character-card__emojis'>
                        <InfoEmoji size='medium' status={status} />
                        <InfoEmoji size='medium' species={species} />
                        <InfoEmoji size='medium' gender={gender} />
                    </div>
                </div>
            </Section>
            <Section className='profile-character-card__extra'>
                <Section>
                    <Heading>Episodes</Heading>
                    <ul>
                        {episode?.map((epi, index) => (
                            <li key={index}>Episode {formatEpisode(epi)}</li>
                        ))}
                    </ul>
                </Section>
                <Section>
                    <Heading>Location</Heading>
                    <span>{location?.name}</span>
                    {/* <span>{location?.url}</span> */}
                </Section>
                <Section>
                    <Heading>origin</Heading>
                    <span>{origin?.name}</span>
                    {/* <span>{origin?.url}</span> */}
                </Section>
            </Section>
        </Section>
    );
};