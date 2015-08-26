# Choobs fast start AngularJS application

## Prerequisites

### Node.js

You must have node.js and its package manager (npm) installed.
- You can get them from [Node.js](http://nodejs.org/download/).
- Install

## Run the Application

All you need to install dependencies and run simple development web server is:

```
npm start
```

or type once:

```
npm install
```

and type the following when you want to develop your application:

```
grunt dev
```

Your application will be placed at `/build` directory and available at `http://localhost:8000`.

If any project file changes it will be rebuild automaticaly.

## Prepare to production

To compile project you can run:

```
grunt compile
```

It will be placed to `/bin` directory. Or type the following to compile and test it in browser:

```
grunt prod
```

As previously it will be available at `http://localhost:8000`.
