import React from 'react';

import img_paperz from '../../assets/images/paperz.png';
import img_dorfus from '../../assets/images/dorfus.png';
import img_martino from '../../assets/images/martino.png';
import img_square from '../../assets/images/square.png';
import img_gobona from '../../assets/images/gobona.png';

const clientImages =[img_paperz, img_dorfus, img_martino, img_square, img_gobona];

const Clients = () => {
  return (
    <div className="clients">
      <div>
        {clientImages.map((image, index) => (
          <img key={index} src={image} alt={`image displaying company logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default Clients;