# DiaryApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 10.0.5.

## Development server

1. Run `ng serve` for a dev server. Navigate to `http://localhost:4200/` (or issue `npm install` then `npm start` in a bash shell). The app will automatically reload if you change any of the source files.

2. In file src\app\services\diary.service.ts make sure that the hardcoded endpoints correct e.g. localhost:7001/api/diary/xxxx  (for enhancement)

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## Enhancements

1. use proper login function to generate user token. Currently userid is being hardcoded in the service file.
2. better global constants for endpoints 
