import React, { cloneElement, useMemo, useRef, useState } from 'react';
import { Card } from 'react-bootstrap';

import { noop } from 'util';

import CardWrapper from '../card_wrapper';
import HeaderImage from '../header_image';

const NullNav = () => null;

const randomInteger = (max) => Math.floor(Math.random() * Math.floor(max));

// const [score, setScore] = useState((min, max) => (min != max ? winScreen : min + " of " + max ));

export const Wrapper = ({
  children,
  mutationQuery = '',
  mutationUpdater = noop,
  navigation = NullNav,
}) => {
  const Navigation = navigation;

  const [entry, setEntry] = useState(false);
  const [entryValue, setEntryValue] = useState();
  const [mutationLoading, setMutationLoading] = useState(false);
  const wrapperElement = useRef();

  const additionalProps = {
    entered: !!entry,
    entryValue,
    submit: (value) => {
      setMutationLoading(true);

      setTimeout(() => {
        setEntry(true);
        setEntryValue(value);
        setMutationLoading(false);
      }, 2000);
    },
    submitting: mutationLoading,
    wrapperElement,
  };

  const element = useMemo(() => cloneElement(children, additionalProps), [
    children,
    entry,
    entryValue,
    setEntryValue,
    setEntry,
    mutationLoading,
    setMutationLoading,
    additionalProps,
  ]);

  return (
    <div className="h-100 flex flex-column w100 center overflow-y-hidden interactive__wrapper">
      <HeaderImage
        entry={entry}
        toggleEntry={() => {
          setEntry((value) => !value);
          setEntryValue((value) => (!!value ? null : randomInteger(6)));
        }}
        entryValue={entryValue}
        mutationLoading={mutationLoading}
        toggleMutationLoading={() => setMutationLoading((value) => !value)}
      />

      <CardWrapper>
        <Card.Body>
          <section
            ref={wrapperElement}
            className="card__interaction interaction--type-play"
          >
            {element}
          </section>
        </Card.Body>

        <nav className="flex justify-center hidden-sm">
          <Navigation nextDisabled={!entry} nextLoading={mutationLoading} />
        </nav>
      </CardWrapper>

      <nav className="flex justify-between pa3 ph0-ns pb0-ns hidden show-sm">
        <Navigation nextDisabled={!entry} nextLoading={mutationLoading} />
      </nav>
    </div>
  );
};
