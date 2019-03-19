# St basename
Create a basename for file based on the time right now (powered by space time)

## Installation

NPM
```bash
    npm i --save st-basename
```

Yarn
```bash
    yarn add st-basename
```

## Usage
```js
  const bn = require('st-basename');
  bn(); // YYYY-MM-DD_HH-MM-SS
  bn('txt'); // YYYY-MM-DD_HH-MM-SS.txt
```
