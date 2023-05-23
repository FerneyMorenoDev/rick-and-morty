import { Heading } from '../Heading';
import { Section } from '../Section';
import './CharactersList.scss';

interface CharacterListProps {
    children: React.ReactNode,
    charactersCount: number,
}

export const CharacterList = ({ children, charactersCount }: CharacterListProps): JSX.Element => {
    return (
        <Section className='characters-list'>
            <Heading className='characters-list__title'>
                Characters' List
                <span className='characters-list__counter'>Characters: {charactersCount} of 6</span>
            </Heading>
            <div className='characters-list__cards'>
                {children}
            </div>
        </Section>
    );
};