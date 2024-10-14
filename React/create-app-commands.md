# Commands to create a JSX app

### Path to your location (Optional)
```bash  
cd C:\PATH\To/Your\Location
```  

### Create an app
```bash
npm create vite@latest
```
Then enter your react project name you want.

![Select a framework: Vanilla, Vue, React, Preact, Lit, Svelte, Solid, Qwik, Others](1frameworkSelection.png)
Now select React as your framework since you're working on react.

![Select a variant: Typescript, Typescript + SWC, Javascript, Javascript + SWC](2variantSelection.png)
Now select Javascript since its more recommended.

### After these commands it should result like this:
![Scaffolding project in C:\Your\Project\Location\react-app... Done. Now run: cd react-app-name, npm install, npm run dev](3variantSelection.png)

### First Command
```bash
cd react-app-name
```
Changes location/directory to your react-app

### Second Command
```bash
npm install
```
Installing required json packages and required node_modules

### Run the app
```bash
npm start
```
Takes your downloaded app to localhost:3000

### npm run dev Command
Runs your script defined in package.json file
```json
"scripts": {
  "dev": "vite"
}
```

### OPTIONAL - Run your app in vscode
Change your location/directory
```bash  
cd C:\PATH\To/Your\Location
```
Run your directory in vscode
```bash
code .
```

# Get started with React.js
## Simple jsx app :)
```Javascript
import React from 'react';

// Functional component
function App() {
  return (
    <div>
      <h1>Hello, World!</h1>
      <p>Welcome to my first React app!</p>
    </div>
  );
}
```