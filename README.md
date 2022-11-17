# AngularCRM

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## Repository Git

[source projet apside](https://github.com/jollivetc/angularCRM-November)


## Portability d'un component

[standalone-components](https://angular.io/guide/standalone-components)

## Truc et astuce et ressources

[Emmet](https://docs.emmet.io/cheat-sheet/)

[event-loop](https://guide-angular.wishtack.io/ecmascript-6+/event-loop)

[Creation d'un back rapide pour un poc](https://github.com/typicode/json-server)

[etude fuite memoire](https://kgotgit.medium.com/rxjs-subject-subscription-heap-memory-analysis-909dc173a613)

Utilisation de JSTOJSON pour faire les interface

## Back

[Back](https://github.com/jollivetc/AngularCRM-back)

[Conference pour le back rapide](https://www.youtube.com/watch?v=zZlFXga1tEg&list=PLIBWgWaHgLpObzsDNKDJmL-J_V3fHtJy7)

Executer le en mode authentification, npm run start-auth.


## TODO
container docker keyclock
Voir evenement sur le component de loging si ok c'est bon redirige .
Component loging + service qu'il peuvent recupere les niverau de privilege.
user que l'on fournis au autre ? comment on creer l'user.
avec les droits.
Pour gerer les code errerur HTPP utiliser des interceptors


## API

/api/consumers
GET /api/consumers => tous les consumers
GET /api/consumers/12 => consumer id 12
POST /api/consumers => créé un consumer
PUT /api/consumers/12 => met à jour le consumer 12
DELETE /api/consumers/12 => supprime le consumer 12
DELETE /api/consumers => supprime tous les consumers
PATCH  /api/consumers/12 => mise à jour du consumer 12 envoie que la modif
HEADERS /api/consumers/12 => renvoie les entêtes
