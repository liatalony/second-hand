## Wrinkle

## WELCOME NEW DEVELOPER

We are so happy to see that you are reading this README file! It shows you care.

In this guide we will explain to you how it is we do things on this projects.

This project was created using 'create-react-app'

This React application was created for Wrinkle - a second-hand store that lets
its customers to upload and sell their own items.

In this project we are connecting to a Postgres database to get our data by using axios.
We are also connecting to a CMS system called GrapghCMS in order to get more data that is editable by the client - Wrinkle.
The data in the CMS is the static content of the site such as the navigation and the 'about' and 'how it works' pages.
In the database we store all the data regarding the shop and its users such as user details, the items that are for sale on the shop, reservations that are being made and so on.

## When working

Its important that as you start everytime you pull the code from the repository that you run `npm install` to make sure you have all the neccessary packages used in the project.\
While working on the code, make sure to create a seperate branch with a relevant name to the work you are doing. NEVER work on the 'development' or 'master' branch. Once you are done with your work you can commit and push your changes to the github repository.

In order to view your work all you have to do is write in the terminal, in the root directory of the project `npm start`. This will launch the project on your browser on 'localhost:3000'.

We do want to keep to a certain standard when writing code, so when you can try to run `npm run lint`. This will scan the code and will give you error messages where the code is not presented properly.
To fix those error simply run `npm run lint:fix`. This will run through the code again, but this time it will fix all the bad indentations.

Other than that we also have a YAML file where we have set up the stages for testing and linting for the development and a YAML file that handles the deployment of the site.

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
