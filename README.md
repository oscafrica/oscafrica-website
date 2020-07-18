# oscafrica.org [![Netlify Status](https://api.netlify.com/api/v1/badges/bf77d111-d265-484e-85f9-c392a0bacdcd/deploy-status)](https://app.netlify.com/sites/new-osca/deploys)

## Getting Started

1. [Fork this repository](https://help.github.com/articles/fork-a-repo/)

2. Clone the forked repository like so:

```sh
git clone https://github.com/<your username>/oscafrica.org.git && cd oscafrica.org
```

3. Read the [Contributors Guide](https://github.com/oscafrica/oscafrica.org/blob/master/CONTRIBUTING.md)

## Installation Guide

1. Install the Gatsby CLI

```sh
npm install -g gatsby-cli
```

2. Change directories into site folder

```sh
cd oscafrica.org
```

3. Create and checkout to a new branch for your feature

```sh
git checkout -b gallery-component
```

4. Start development server

```sh
npm run dev
```

_Gatsby will start a hot-reloading development environment accessible by default at localhost:8000_

5. Create a production build

```sh
npm run build
```

_Gatsby will perform an optimized production build, generating static HTML and per-route JavaScript code bundles._

6. Serve the production build locally

```sh
npm run serve
```

_Gatsby starts a local HTML server for testing the built site. Remember to build the site using gatsby build before using this command._

7. Run Storybook

```sh
npm run storybook
```

_Storybook will start a hot-reloading development environment accessible on a random open port_

8. Make Git commits

```sh
npm run commit
```

_We use the [commitizen command line utility](https://github.com/commitizen/cz-cli), you'll be prompted to fill out any required commit fields at commit time. You would not need to run `git commit` again._

## Format and lint

1. See what ESLint and Prettier can fix

```sh
npm run analyze
```

2. Run Prettier and ESLint with the --fix option

```sh
npm run fix
```
