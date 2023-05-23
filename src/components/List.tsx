import React from 'react';
import places from '../data.json';
import { Place } from './Place';

interface Iplace {
    id: number,
    name: string,
    description: string,
    imageId: string,
}

export const List = () => {
    const listItems = places.map(( place : Iplace ) : JSX.Element =>
      <li key={place.id}>
        <Place
            place={place}
        />
      </li>
    );
    return <ul>{listItems}</ul>;
  }