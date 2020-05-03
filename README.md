# express.ts.template
![](https://github.com/gowda/express.ts.template/workflows/lint-and-test/badge.svg)

Template for express dev environment in typescript

## Usage
### Clone the repository
```bash
$ git clone git@github.com:gowda/express.ts.template.git express-app
$ cd express-app
```

### Install dependencies
```bash
$ npm install
```

### Run
#### TSLint
```bash
$ npm run lint

# Or
$ npx tslint --config tslint.json --project tsconfig.json
```
[TSLint](https://palantir.github.io/tslint/) is configured to extend from
[tslint:recommended](https://github.com/palantir/tslint/blob/master/src/configs/recommended.ts)

Configuration is in [tslint.json](tslint.json)

#### Tests
```bash
$ npm run test

# Or
# ensure that shell cannot interpret the final argument
$ npx mocha -r ts-node/register 'specs/**/*.spec.ts'
```

#### Server
##### Development
```bash
$ npm run start:dev

# Or
$ npx ts-node src/server.ts
```

##### Production
```bash
$ npm run start

# Or
$ npx tsc
$ node dist/server.js
```

## License
> "THE BEER-WARE LICENSE" (Revision 42):
> [Gowda](https://github.com/gowda) wrote this file. As long as you
> retain this notice you can do whatever
> you want with this stuff. If we meet some day, and you think this stuff
> is worth it, you can buy me a beer in return.
