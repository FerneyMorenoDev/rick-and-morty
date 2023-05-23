import React from 'react';
import { PlaceImage } from './PlaceImage';

type place = {
    place: {
        id: number,
        name: string,
        description: string,
        imageId: string,
    },
};

export const Place = ({ place } : place) => {
    return (
      <>
        <PlaceImage />
        <p>
          <b>{place.name}</b>
          {': ' + place.description}
        </p>
      </>
    );
  }