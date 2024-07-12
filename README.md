# Kasa - Plateforme de Location d'Appartements entre Particuliers

![image d'illustration](https://github.com/suhailadhin/kasa/blob/main/src/assets/image/image%20d'illustration.png)

Kasa est dans le métier de la location d’appartements entre particuliers depuis près de 10 ans. L'entreprise souhaite faire une refonte totale de son site web.

Bienvenue dans le projet de refonte du site Kasa, une entreprise leader dans la location d’appartements entre particuliers en France. Ce projet vise à moderniser l'application existante en utilisant une stack JavaScript moderne avec React pour le front-end. **Mission** Accepté par **Stan Suhail Adhin développeur front-end.**

## Objectif du Projet

L'objectif principal est de créer une application front-end complète en utilisant React. Nous devons suivre les nouvelles maquettes fournies et respecter les directives de développement de Kasa. Cela implique de développer tous les composants de l'application en utilisant React, en nous basant sur les maquettes conçues dans Figma. Nous devons également créer des composants réutilisables pour les onglets déroulants et le carrousel de photos.

## Installation

Pour installer et exécuter localement ce projet, suivez ces étapes :

1. **Cloner le dépôt :**
   ```bash
   git clone git@github.com:suhailadhin/projet-8-kasa-annonce.git
   cd kasa

2. **Installer les dépendances :**
1. Ce projet a été lancé avec *Create React App*.
```bash
npx create-react-app Kasa
```

```bash
npm install react-router-dom
```

3. **Démarrer l'application :**
```bash
npm start
```

4. **Accéder à l'application :**
Ouvrez votre navigateur et visitez http://localhost:3000 pour voir l'application en actions.

> exemple de création de dossier sur VsCode.

<ul>
<li>
kasa/
├── public/
│   ├── index.html
│   └── data/
│       └── data.json
├── src/
│   ├── assets/
│   │   └── image/
│   │       └── image-banner-home.png
│   ├── components/
│   │   ├── Banner.js
│   │   ├── Card.js
│   ├── pages/
│   │   └── Home.js
│   ├── App.js
│   ├── index.js
│   └── styles/
│       └── main.css
└── package.json
</li>
</ul>

5. **Création du dossier**

1. Importer le fichier JsonData depuis le site **Oppenclassroom**

## Technologies Utilisées
![figma](https://github.com/suhailadhin/kasa/blob/main/src/assets/image/logo/icons8-figma-144.png)
![react](https://github.com/suhailadhin/kasa/blob/main/src/assets/image/logo/icons8-react-native-144.png)
![github](https://github.com/suhailadhin/kasa/blob/main/src/assets/image/logo/icons8-github-150.png)
![vscode](https://github.com/suhailadhin/kasa/blob/main/src/assets/image/logo/icons8-code-studio-visuel-2019-144.png)
![sass](https://github.com/suhailadhin/kasa/blob/main/src/assets/image/logo/icons8-toupet-144.png)

- **React** - Bibliothèque JavaScript pour construire des interfaces utilisateur.
- **React Router** - Pour la gestion des routes de l'application.
- **Sass** - Préprocesseur CSS pour une écriture plus efficace des styles.
- **Figma** - Utilisation de Figma pour la maquette.[la maquette] ("https://www.figma.com/design/2BZEoBhyxt5IwZgRn0wGsL/Kasa_FR?node-id=75-109&t=89s2U4vLRRPYxYBu-0")
- **Visual Studio Code** - Éditeur de code utilisé pour le développement.
- **Github** - Pour envoyer le projet pour le cloning.

## Guidelines de Codage

- Suivre les guidelines de codage de Kasa.
- Utiliser Create React App comme bundler pour le projet.

## Design et Fonctionnalités

1. Le design de l'interface est basé sur les maquettes Figma fournies par Paul, le designer. Les fonctionnalités incluent la gestion des composants React responsives, l'intégration des animations avec React Router, et la mise en œuvre des spécifications détaillées pour les éléments interactifs comme la galerie d'images et les collapsibles.

2. Pour plus d'informations, consultez les maquettes et prototypes fournis.

## Spécifications techniques

1. Découper en composants modulaires et réutilisables.
2. Structure logique des fichiers.
3. Utilisations des évènements.
4. Utiliser les listes en itérant dessus.
5. Utilisation des props entre les composants.
6. La page 404 est renvoyée pour chaque route inexistante, ou si une valeur.
7. présente dans l’URL ne fait pas partie des données renseignées.

## Spécifications sur la publication du site.

*Validation W3C*
1. Ce projet respecte les normes de validation W3C pour assurer une conformité aux standards du web.

*GitHub Pages*
2. Le site web du projet est accessible sur GitHub Pages à l'adresse suivante : https://suhailadhin.github.io/

3. Le projet React a été publié sur GithubPages en installant les dépendances nécessaire et suivant:
```bash
npm install gh-pages --save-dev
```

4. Le deploiement de la page sur la commande:
```bash
npm run deploy
```

5. Pour mettre à jour la page:
```bash
npm run build
```

## Contact

Pour toute question ou assistance, n'hésitez pas à contacter l'équipe de développement de Kasa à l'adresse suivante : stanadhin007@hotmail.fr .