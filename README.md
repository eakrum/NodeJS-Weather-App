# NodeJS Weather Application

A Weather application to demonstrate basic nodeJS functionality with http API requests and promises

### Prerequisites

This project works with node 10.6.0, testing on 8.11.4 LTS has not been performed check your version below

```
node --version
```

### Installing

Make sure you have node installed on your machine. Then clone this repository, navigate to directory and perform an npm install
For example:
```
Weather-App YOUR-USERNAME$ npm install
```

## Running

After installing simply run the following commands with their appropriate flags.
There are 2 versions of the app, one demonstrating http requests and the other doing the same functionality but with promises.
Use App.js or App2.js to explore.
DISCLAIMER: 
WINDOWS users USE DOUBLE QUOTES
Do not include spaces following flags

Working Examples: 


Check weather with original app.js (console logs may fail, try a few times. haven't done full testing)
```
node app.js -a "New York City"
```

```
node app.js -a 10002
```


Check weather with refactored app.js with promises (better performance)
```
node app2.js -a "New York City"
```
```
node app2.js -a 10002
```

All other functions simply refer to help flag
```
node app.js --help
```
```
node app2.js --help
```