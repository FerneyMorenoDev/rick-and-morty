import { Characters } from '../../components/Characters/Characters';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import './CharactersPage.scss';

export const CharactersPage = () => {
    return (
        <Section className="characters-page">
            <Heading>Rick and Morty characters</Heading>
            <Characters />
        </Section>
    );
};