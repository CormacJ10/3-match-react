import React, { Suspense, useMemo, useState } from 'react';
import CardLoading from '../card_loading';

/*
 *
 * Interactive Quiz Interface
 *
 * InteractiveGameProps {
 *   entered: Boolean,
 *   entryValue?: Number,
 *   submit: Function(Number),
 *   submitting: Boolean,
 *   submitError: Boolean,
 *   wrapperElement: Ref
 * }
 */

export const Interface = ({ component, wrapperElement }) => {
  // Demo Interface
  const [entered] = useState(false);
  const [entryValue] = useState(0);
  const [submitting] = useState(false);

  const interactiveInterface = useMemo(
    () => ({
      entered,
      entryValue,
      submit: (value) => {
        console.log('submitting', value);
      },
      submitting,
      wrapperElement,
    }),
    [entered, entryValue, submitting, wrapperElement]
  );

  const Component = component;

  return (
    <Suspense fallback={<CardLoading />}>
      <Component {...interactiveInterface} />
    </Suspense>
  );
};
