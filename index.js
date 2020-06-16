/**
 * Node Version Checker
 * this code runs when user install node modules and by running npm run nodeVersionChecker in console
 * Check defined node version in package.json and .nvmrc files
 */
"use strict";
//npm modules
const semver = require("semver");
const {argv} = require('yargs')
const path = require("path");
const fs = require("fs");
var packageJson;
var nvmrc

if(argv.packageJsonFile != null) {
    packageJson = require(argv.packageJsonFile);
} else {
    throw new Error("No package.json file found!.")
}

if(argv.nvmrcFilePath != null) {
    nvmrc = path.resolve(argv.nvmrcFilePath)
} else {
    throw new Error("No nvmrc file found!.")
}

//local const
const regex = "(\\d+\\.\\d+\\.\\d+)";
const version = packageJson.engines.node;
const versionparsed = version.trim().match(regex);

if (!semver.satisfies(process.version, version)) {
    throw new Error(`The current node version ${process.version} does not satisfy the required version ${version}`);
} else {
    if (fs.existsSync(nvmrc)) {
        fs.unlinkSync(nvmrc);
    }

    fs.writeFileSync(nvmrc, versionparsed[1], "utf8");
    console.log(`The current node version ${process.version} satisfy the required version ${version}`);
}
