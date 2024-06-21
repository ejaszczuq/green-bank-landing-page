# GreenBank - Landing page

This readme describes how to prepare and run this app.


## Getting started

#### 1. Installing dependecies  
```
yarn or yarn install 
```

**preferred dependency installation based on yarn.lock files**
```
yarn install --frozen-lockfile
```

#### 2. Copy .env.example and update environment variables
For production mode copy to .env file.
```
cp .env.example .env
```
For development mode copy to .env.dev file.
```
cp .env.example .env.dev
```

#### 3. Run the app
Production mode: 
```
yarn run start:prod
```
Development mode: 
```
yarn start or yarn run start:dev
```

## yarn scripts
### Build and run scripts

- `prestart` – run graphql-codegen watch mode
- `start` – start dev server
- `start:dev` – start dev server
- `start:prod` – start prod server
- `prebuild` – run graphql-codegen
- `build:dev` – bundle application for development
- `build:prod` – bundle application for production
- `build:ci` – script only for bundling app by gitlab:ci

### Other scripts
- `test` – run tests
- `lint` – runs ESLint
- `format` – runs format code with Prettier
- `typecheck` – checks TypeScript types
- `prepare` – install husky hooks

## Environment variables

| Name                                 | Description                            | Type    | Default |
| ------------------------------------ | -------------------------------------- | ------- | ------- |
| REACT_APP_STAGE                      | Application mode. Example: dev or prod | string  | -       |

