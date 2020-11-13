# Paulin Trognon website

# Développement local

  ```shell
 yarn
 yarn dev
  ```

Ou, si vous préférez docker&nbsp;:

```shell
docker-compose up dev
```

# Code Quality

## Eslint

Avant chaque commit est lancé un audit de code avec `husky`. Si l'audit ne passe pas, le commit ne pourra se faire.  

Pour lancer un audit manuellement :

```shell
yarn lint
```

Vous pouvez tenter de réparer automatiquement les erreurs avec :

```shell
yarn lint --fix
```

## Tests E2E

Lancer les tests E2E avec la commande suivante :

```
yarn test
```

# Prod

## Avec Node.js

```
yarn build
yarn start
```

## Avec Docker

```
docker-compose up prod
```

# Configuration

Vous pouvez changer les ports pour le dev et pour la prod directement dans le `.env` ou en créant un nouveau fichier `.env.local`
