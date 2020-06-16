# Node Version Checker
A simple script usefull to check node version before npm install

## Usage

```sh
npx node-check-version --packageJsonFile=package.json --nvmrcFilePath=.nvmrc
```
In order to work you must set these nodes on your package.json file:

```json
{
  "engineStrict": true,
  "engines": {
    "node": ">=10.19.0"
  },
}
```


You can easily set a preinstall script like this:

```json
{
  "name": "test",
  "version": "1.0.0",
  "description": "test node version checker",
  "main": "index.js",
  "engineStrict": true,
  "engines": {
    "node": ">=10.19.0"
  },
  "scripts": {
    "preinstall": "npx node-version-checker --packageJsonFile=./package.json --nvmrcFilePath=.nvmrc"
  },
  "author": "",
  "license": "ISC"
}
```

## Options

```text
--packageJsonFile        path of the packge.json file
--nvmrcFilePath          path of the nvmrc file
```
