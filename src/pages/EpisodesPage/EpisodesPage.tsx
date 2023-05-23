import { Episodes } from '../../components/Episodes/Episodes';
import { Heading } from '../../components/Heading';
import { Section } from '../../components/Section';
import './EpisodesPage.scss';

export const EpisodesPage = () => {
    return (
        <Section className="episodes-page">
            <Heading>Rick and Morty episodes</Heading>
            <Episodes />
        </Section>
    );
};