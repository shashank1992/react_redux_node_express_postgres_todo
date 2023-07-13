
# To start the app in local
"docker-compose up --build"


# Getting Started with Create React App

The frontend folder has the code that has been bootstrapped with [Create React App](https://github.com/facebook/create-react-app),
which forms the frontend. 
The frontend shows a todo app, with todos that can be allotted to different boards. 
The state is managed by Redux-orm, 
https://github.com/redux-orm/redux-orm


The updates to the data from the backend is handled by Redux saga.
https://github.com/redux-saga/redux-saga

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Learn More
You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

# Bakcend folder contains the code to node express backend, that uses Typeorm

To use in local
First from project root. Start the postgres db. 
docker-compose db up
We need to configure the connection details to the db. 
1. in backend/data-source.ts change the host to localhost
2. npm start

For managing the db, and applying migrations can use the TypeOrm
https://orkhan.gitbook.io/typeorm/readme
Ps: We will be using the compiled js files with typeorm, all the paths we use will hence point to those. 
This is for simplicity. 
if you wish to directly use ts files, will need to update the data-source.ts files, however ps: below lines from documentation. 

    "The migration:run and migration:revert commands only work on .js files. Thus the typescript files need to be compiled before running the commands. Alternatively you can use ts-node in conjunction with typeorm to run .ts migration files."

use the commands, npx typeorm -d dist/data-source.ts migration:run 




