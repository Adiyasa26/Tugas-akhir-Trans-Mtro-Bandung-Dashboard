import React from 'react';

import { ReactComponent as StarLogo } from '../../../icon/Star.svg';
import { ReactComponent as NonStarLogo } from '../../../icon/Star-non.svg';

import './style.scss';

const Star = props => {
  const { starCount, className } = props;

  if (starCount === 5) {
    return (
      <div className="star--container">
        <StarLogo id="star1" className={className ? className : `logo`}/>
        <StarLogo id="star2" className={className ? className : `logo`}/>
        <StarLogo id="star3" className={className ? className : `logo`}/>
        <StarLogo id="star4" className={className ? className : `logo`}/>
        <StarLogo id="star5" className={className ? className : `logo`}/>
      </div>
    );
  }

  if (starCount === 4) {
    return (
      <div className="star--container">
        <StarLogo id="star1" className={className ? className : `logo`}/>
        <StarLogo id="star2" className={className ? className : `logo`}/>
        <StarLogo id="star3" className={className ? className : `logo`}/>
        <StarLogo id="star4" className={className ? className : `logo`}/>
        <NonStarLogo id="star5" className={className ? className : `logo`}/>
      </div>
    );
  }

  if (starCount === 3) {
    return (
      <div className="star--container">
        <StarLogo id="star1" className={className ? className : `logo`}/>
        <StarLogo id="star2" className={className ? className : `logo`}/>
        <StarLogo id="star3" className={className ? className : `logo`}/>
        <NonStarLogo id="star4" className={className ? className : `logo`}/>
        <NonStarLogo id="star5" className={className ? className : `logo`}/>
      </div>
    );
  }

  if (starCount === 2) {
    return (
      <div className="star--container">
        <StarLogo id="star1" className={className ? className : `logo`}/>
        <StarLogo id="star2" className={className ? className : `logo`}/>
        <NonStarLogo id="star3" className={className ? className : `logo`}/>
        <NonStarLogo id="star4" className={className ? className : `logo`}/>
        <NonStarLogo id="star5" className={className ? className : `logo`}/>
      </div>
    );
  }

  if (starCount === 1) {
    return (
      <div className="star--container">
        <StarLogo id="star1" className={className ? className : `logo`}/>
        <NonStarLogo id="star2" className={className ? className : `logo`}/>
        <NonStarLogo id="star3" className={className ? className : `logo`}/>
        <NonStarLogo id="star4" className={className ? className : `logo`}/>
        <NonStarLogo id="star5" className={className ? className : `logo`}/>
      </div>
    );
  }

  if (starCount === 0) {
    return (
      <div className="star--container">
        <NonStarLogo id="star1" className={className}/>
        <NonStarLogo id="star2" className={className}/>
        <NonStarLogo id="star3" className={className}/>
        <NonStarLogo id="star4" className={className}/>
        <NonStarLogo id="star5" className={className}/>
      </div>
    );
  }
};

export default Star;
