# Commands to create a JSX app

### Path to your location
```bash  
cd C:\PATH/To/Your/Location
```  

### Create an app
```bash
npx create-react-app react-app
```
replace *** react-app *** with the name you want to use

### Move to the directory
```bash
cd react-app
```

## Optional Part
### Open in vscode
```bash
code .
```

### Run the app
```bash
npm start
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