# Interactive Game Skeleton

## Getting Started

To get started quickly run

```sh
$ npx degit smiledealers/interactive-game-skeleton my-interactive-game
```

or

```sh
$ yarn global add degit
$ degit smiledealers/interactive-game-skeleton my-interactive-game
```

then run

```sh
$ yarn install
$ yarn dev
```

## Development

Create a new private repo to develop within.

Your game is loaded from `src/pages/play.js`, it is loaded asynchronously, you
can provide a custom loader in `src/components/interactive_quiz/interface.js`,
or remove the lazy loading, and load a game shell that has a loader.

This skeleton loads `src/components/game.js` with an empty canvas, you can use
this as a starting point, or replace it entirely.

Your game is provided the following interface as React props from `src/components/interactive_quiz/interface.js`

```ts
interface InteractiveGameProps {
  entered: boolean,
  entryValue?: number,
  submit: number => void,
  submitting: boolean,
  submitError: boolean,
  wrapperElement: Ref<T>
}
```

## Delivery

You can either add a Smile Dealers team member to your repository if any
feedback or clarification is needed.

Otherwise ZIP up your direcotry without the dist/ or node\_modules/ directories
(make sure all dependencies for your code are in `package.json` and `yarn.lock`)
and send it to us.
