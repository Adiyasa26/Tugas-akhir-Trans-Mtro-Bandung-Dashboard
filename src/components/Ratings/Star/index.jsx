import React from 'react';

import { ReactComponent as StarLogo } from '../../../icon/Star.svg';
import { ReactComponent as NonStarLogo } from '../../../icon/Star-non.svg';

import './style.scss';

const Star = props => {
  const { starCount } = props;

  if (starCount === 5) {
    return (
      <div className="star--container">
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
      </div>
    );
  }

  if (starCount === 4) {
    return (
      <div className="star--container">
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <NonStarLogo className="logo"/>
      </div>
    );
  }

  if (starCount === 3) {
    return (
      <div className="star--container">
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <NonStarLogo className="logo"/>
        <NonStarLogo className="logo"/>
      </div>
    );
  }

  if (starCount === 2) {
    return (
      <div className="star--container">
        <StarLogo className="logo"/>
        <StarLogo className="logo"/>
        <NonStarLogo className="logo"/>
        <NonStarLogo className="logo"/>
        <NonStarLogo className="logo"/>
      </div>
    );
  }

  if (starCount === 1) {
    return (
      <div className="star--container">
        <StarLogo className="logo"/>
        <NonStarLogo className="logo"/>
        <NonStarLogo className="logo"/>
        <NonStarLogo className="logo"/>
        <NonStarLogo className="logo"/>
      </div>
    );
  }
};

export default Star;
