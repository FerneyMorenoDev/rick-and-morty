import React from 'react';
import { Heading } from '../Heading';
import { SearchForm } from '../SearchForm/SearchForm';
import { Section } from '../Section';
import './Episodes.scss';

export const Episodes = (): JSX.Element => {
    return (
        <Section className='episodes'>
            <Section className='episodes__search'>
                <SearchForm
                    onSubmitSearchId={() => 'hola'}
                    onChangeSearchId={() => 'hola'}
                    searchId={'3'}
                    labelText="Find an episode between 1 and 51"
                />
            </Section>
            <Section className='episodes-favourites'>
                <div>test</div>
            </Section>
        </Section>
    );
};