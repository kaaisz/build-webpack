# Z magazine

this is built with webpack for the first time to learn how to build environment

## How to build environment for webpack

### 1. Setup fundamental environment

1. npm init
```
$ npm init -y
```

2. install webpack and webpack cli
```
$ npm i -D webpack webpack-cli
```

3. create 2 files and add code for testing webpack
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

4. try `npx webpack`

`/dist/main.js` will automatically generate and appear alert below:
```
WARNING in configuration
The 'mode' option has not been set, webpack will fallback to 'production' for this value. Set 'mode' optionto 'development' or 'production' to enable defaults for each environment.
You can also set it to 'none' to disable any default behavior. Learn more: https://webpack.js.org/concepts/mode/
```

5. modify package.json
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

6. try `npm run build`

`/dist/main.js` will automatically generate again.
in that files, `sub.js` will integrate to `index.js`. when you executed `/dist/main.js` in HTML file, bundled code will execute.

### 2. bundle/compile SCSS

1. `npm insall` like below: (this process is continuing from the last fundamental one)
```
npm i -D webpack webpack-cli sass-loader node-sass style-loader css-loader
```

2. write code on webpack.config.js
[See actual code](https://github.com/suzydp/zmagazine/blob/67253e6f42996d8ac6420600a22596d78dbc85f6/webpack.config.js)

3. execute `npx webpack`
\* error will be appeared if your code has any error
* bunle into `main.js` if the compiling has been successfully finished
