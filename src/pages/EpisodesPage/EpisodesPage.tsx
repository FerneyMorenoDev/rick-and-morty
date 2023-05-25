import { Heading } from '../../components/Heading';
import { SearchForm } from '../../components/SearchForm/SearchForm';
import { Section } from '../../components/Section';
import './EpisodesPage.scss';

export const EpisodesPage = () => {
    return (
        <Section className="episodes">
            <Heading>Rick and Morty episodes</Heading>
            <Section className='episodes__content'>
                <Section className='episodes__search'>
                    <SearchForm
                        onSubmitSearchId={() => 'hola'}
                        onChangeSearchId={() => 'hola'}
                        searchId={'3'}
                        labelText="Find an episode between 1 and 51"
                    />
                </Section>
                <Section className='episodes__favourites'>
                    <div>test</div>
                </Section>
            </Section>
        </Section>
    );
};