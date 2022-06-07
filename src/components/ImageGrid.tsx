import React, { useContext } from 'react';
import { ApplicationContext } from '../context/application';

export const ImageGrid = (): JSX.Element => {
  const { current } = useContext(ApplicationContext);
  const { images } = current;

  return (
    <div className="container">
      {images.map((image) => (
        <figure key={image.href}>
          <img src={image.href} alt={image.desciption} title={image.title} />
        </figure>
      ))}
    </div>
  );
};
