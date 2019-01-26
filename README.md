# Z magazine

this is built with webpack for the first time to learn how to build environment

1. npm init
```
$ npm init -y
```

1. install webpack and webpack cli
```
$ npm i -D webpack webpack-cli
```

1. create 2 files and add code for testing webpack
```
/src
├── index.js
└── sub.js
```

index.js
```
import { Hello, hello } from './sub';

// invoke file which you imported
hello();
```

sub.js
```
export const hello = () => {
  alert("Hello, this is the playground for webpack.")
}
```

1. try `npx webpack`

`/dist/main.js` will automatically generate and appear alert below:
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' optionto 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

1. modify package.json
```
{
  "scripts": {
    "build": "webpack --mode development" // to invoke as 'npm run build'
  },
  "devDependencies": {
    "webpack": "^4.29.0",
    "webpack-cli": "^3.2.1"
  }
}
```

3. try `npm run build`

`/dist/main.js` will automatically generate again.
in that files, `sub.js` will integrate to `index.js`. when you executed `/dist/main.js` in HTML file, bundled code will execute.