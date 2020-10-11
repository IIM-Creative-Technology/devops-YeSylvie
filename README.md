# Devops - Sylvie YE 

Le site a été créé pour une campagne de sensibilisation à l'art (projet étudiant).
Le site est développé en Angular 8. 
J'ai utilisé **Gituhb Actions** pour le déploiement continu et le site est déployé sur **HEROKU**.

## CI/CD 

Suite à un pull request sur develop (pour la preprod) ou master (pour la prod), le déploiement se déclenche automatiquement en suivant les étapes suivantes : 

- Initialisation du projet 
- Installation des dépendances 
- Build du projet 
- Déploiement sur HEROKU 

## URL 

Preprod : https://sylvie-ye-angular-preprod.herokuapp.com/
Prod : https://sylvie-ye-angular-prod.herokuapp.com/

## Conclusion

Malheureurement, je n'ai pas réussi à déployer correctement. Pour la preprod, le déploiement est effectué mais il y a une erreur donc le site ne s'affiche pas. 
Pour la prod, le déploiement ne s'effectue pas et je ne comprends pas pourquoi. 
Si tu souhaites quand même jeter un coup d'oeil au site, voici le lien : https://www.hommage.euphoriart.fr/

# Hommage

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

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
