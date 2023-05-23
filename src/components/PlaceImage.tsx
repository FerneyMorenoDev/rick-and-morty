import React, { useContext } from 'react';
import { ImageSizeContext } from '../context/ImageSizeContext';
import './PlaceImage.scss';

export const PlaceImage = () => {
    const imageSize = useContext(ImageSizeContext);
    return (
      <svg className='test-svg' width={imageSize} height={imageSize} />
    );
  }