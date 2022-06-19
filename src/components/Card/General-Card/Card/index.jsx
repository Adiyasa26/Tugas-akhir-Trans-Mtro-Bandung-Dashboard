import React from 'react';

import './style.scss';

const HEALTH_CARE_CARD_CLASSES = {
    cold: 'cold',
    neutral: 'neutral',
    warm: 'warm'
}

function Card(props) {
  const { key, headerTitle, headerTag, mainTitle, mainTag, colorType } = props;

  return (
    <div key={key} className={`universal-card-container ${colorType ? HEALTH_CARE_CARD_CLASSES[colorType] : ``}`}>
      <div className="universal-card-container--header">
        <h3>{headerTitle}</h3>
        <p>{headerTag}</p>
      </div>
      <div className="universal-card-container--main">
        <h1>{mainTitle}</h1>
        <p>{mainTag}</p>
      </div>
    </div>
  );
}

export default Card;
