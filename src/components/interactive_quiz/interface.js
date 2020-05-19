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

export const Interface = ({
  component,
  entered,
  entryValue,
  submit,
  submitting,
  wrapperElement,
}) => {
  // Demo Interface
  const interactiveInterface = useMemo(
    () => ({
      entered,
      entryValue,
      submit,
      submitting,
      wrapperElement,
    }),
    [entered, entryValue, submit, submitting, wrapperElement]
  );

  const Component = component;

  return (
    <Suspense fallback={<CardLoading />}>
      <Component {...interactiveInterface} />
    </Suspense>
  );
};
