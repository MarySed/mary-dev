## Introduction

Note from the future: I wonder if I should revamp this for halloween and create like a react-three-fiber halloween experience hahahaha

A "weird west" inspired personal site running on React-Three-Fiber and React-Spring. Still a work in progress.

Deployed at https://mary-dev.netlify.app/

### App structure

`environment`: This folder has all environment-related components--clouds, terrain, trees, stars, etc.

`objects`: This folder has all non-player components. The computer, cow, end sign, ufo, and text components are all here.

`constants`: All constant variables are kept here for ease of access

`utilities`: Any helper functions that may be used in multiple places are here.

## How to

If you want to mess around with this repo, just clone and download it as you would any other.

### Tips & Advice

- If you want to add your own 3D models to the scene, make sure to convert them into `.glb` files and place them in the `public/models` folder.

- I've forced an articial 2.5D environment by limiting the camera. If you want to allow the user to move in a 3D environment, edit the `CameraControls` component. Consider replacing `orbitalcontrols` with `fly` or `pointerlock`.

- If you are like me, and just started with React-Three-Fiber, take a look at the `drei` repo, and keep the Three.js docs open!

### Commands

`yarn dev`: Starts up react-scripts for quick development. Using this, you can edit any of the components and the page will refresh.

`yarn build`: Builds the app for production to the build folder.

`yarn start`: Starts up a node server with express. If you run

`yarn build` then `yarn start` you"ll be able to see what the app looks like in production.
