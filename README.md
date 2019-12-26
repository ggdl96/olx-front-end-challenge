# Frontend  Challenge

## Instructions

### Install nvm

#### For Linux or OS X systems

[click here](https://github.com/nvm-sh/nvm)

#### For Windows systems

[click here](https://github.com/coreybutler/nvm-windows)

#### After installing nvm, proceed with

```bash
    nvm install 12
```

```bash
    nvm use 12
```

```bash
    npm install yarn -g
```

#### To install project dependencies

```bash
    yarn
```

#### To run the project

```bash
    yarn start
```

#### Project should run on default localhost:3000 and open the browser

## Technical debt

- Improve form handling: in order to manage in a more convenient way i could try to make more dinamic validation definitions.

- Improve import handling: to avoid things like: from '../../../commons' i could make a configuration to webpack and be able to import it like: 'commons'.

- Improve reponsive design: to allow it to use it on mobile devices without content being unreadable via using media queries for different resolutions.

- Make default files for environment configuration: to make it more suitable for deployments, i could add default files with the skeleton structure, so then i just can copy paste it into a config file (that is gitignored to avoid it on repository).

- Add more prop types validations to components: so i can make it clear what type of prop is supported or is required.
