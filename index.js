/**
 * Node Version Checker
 * this code runs when user install node modules and by running npm run nodeVersionChecker in console
 * Check defined node version in package.json and .nvmrc files
 */
"use strict";
//npm modules
const semver = require("semver");
const path = require("path");
const fs = require("fs");
const { engines } = require("./package");

//local const
const regex = "(\\d+\\.\\d+\\.\\d+)";
const nvmrc = path.resolve(".nvmrc");
const version = engines.node;
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
