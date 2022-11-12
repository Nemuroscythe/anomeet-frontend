# Explication pour la découverte du projet

**src/App.js** est notre point d'entrée dans l'application, c'est ici que vous pouvez trouver ce que nous afficherons dans l'explorateur.

## public
Le dossier public est un dossier qui contient des configurations, il ne faut rien y ajouter à moins de savoir ce que l'on fait. Néanmoins on peut y trouver le véritable fichier html que react peuplera au lancement : **index.html**.

## src

Nos trouvons ici notre fichier **App.js** qui se trouve être notre point d'entrée dans l'application et qui peuplera notre index.html. Dans celui-ci, nous appelerons nos components react que l'on peut voir comme des parties de pages. Des routes, crééent à l'aide de "**react-router-dom**" nous permettent de masquer ou d'afficher des components en fonction de l'addresse url : en effet, notre application ne se compose en réalité que d'une seule page modifiée en fonction de l'addresse url.

### api
Ce dossier contient notre client **axios** ainsi que les services nous permettant d'exécuter des requêtes HTTP à notre backend python.

### component
Ce dossier contient nos components react, ses fichiers se doivent d'importer React sous formes : `import React from "react";`. Il est également idéal que d'en faire une fonction que l'on exportera par défaut

### model
Ce dossier est plus facultatif et nous permet de créer différentes classes que nous utiliserons, nottamment pour la valeur de retour de nos appel HTTP

>Je conseille vivement de suivre les 2 premiers modules sur react de sololearn(gratuit) : https://www.sololearn.com/learning/1097


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
