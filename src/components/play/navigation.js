import React from 'react';
import { Spinner } from 'react-bootstrap';

import ButtonLink from 'components/button_link';

export const Navigation = ({
  previousDisabled = false,
  nextDisabled,
  nextLoading,
}) => {
  const previous = '';
  const next = '';

  return (
    <>
      {/* <div className="flex flex-column w100 " style={{color: 'black', justifyContent:'center', alignItems:'center' }}> */}
          {/* <div className="br3 w100" style={{paddingLeft: '5px', paddingRight: '5px', border: 'solid black 1px'}}>
            <p className="game-footer">Tap The Logo to Match The Shoes!</p>
          </div> */}
      {/* </div> */}
        <span className="nav-span nav-span--split hidden show-sm">
          <ButtonLink
            href={previous}
            disabled={previousDisabled}
            variant="light"
            className="nav-btn btn--previous br4 "
          >
            Back
          </ButtonLink>
        </span>

        <span className="hidden-sm mr4">
          <ButtonLink
            href={previous}
            disabled={previousDisabled}
            variant="outline-dark"
            className="nav-btn nav-btn-previous br4"
          >
            Back
          </ButtonLink>
        </span>

        <span className="nav-span nav-span--split hidden show-sm">
          <ButtonLink
            href={next}
            disabled={nextDisabled}
            variant="dark"
            className={`nav-btn br4 ${
              nextLoading ? 'nav-btn-entering' : 'nav-btn-next'
            }`}
          >
            {nextLoading ? (
              <>
                <span className="btn__text">Entering</span>

                <Spinner
                  animation="border"
                  as="span"
                  className="btn__icon"
                  size="sm"
                  role="status"
                />
              </>
            ) : (
              'Next'
            )}
          </ButtonLink>
        </span>

        <span className="hidden-sm ml4">
          <ButtonLink
            href={next}
            disabled={nextDisabled}
            variant="dark"
            className={`nav-btn br4 ${
              nextLoading ? 'nav-btn-entering' : 'nav-btn-next'
            }`}
          >
            {nextLoading ? (
              <>
                <span className="btn__text">Entering</span>

                <Spinner
                  animation="border"
                  as="span"
                  className="btn__icon"
                  size="sm"
                  role="status"
                />
              </>
            ) : (
              'Next'
            )}
          </ButtonLink>
        </span>
    </>
  );
};
