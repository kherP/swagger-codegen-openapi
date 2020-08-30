const fs = require("fs");
const path = require("path");
const ncp = require("ncp").ncp;
const pkg = require("../package.json");

const dist = path.resolve(__dirname, "../dist");
const src = path.resolve(__dirname, "../src");
const root = path.resolve(__dirname, "../");
const unwantedPkgKeys = ["devDependencies", "scripts", "config", "commitlint", "husky", "release"];

/** Generates package.json in dist */
function writePackage() {
    unwantedPkgKeys.map(key => { delete pkg[key] });
    fs.writeFileSync(path.resolve(dist, "package.json"), JSON.stringify(pkg, null, 4));
}

/** Copies required files to dist */
function copyFiles() {
    // Copy README AND LISENSE
    fs.copyFileSync(path.resolve(root, "README.md"), path.resolve(dist, "README.md"));
    fs.copyFileSync(path.resolve(root, "LICENSE"), path.resolve(dist, "LICENSE"));

    // Copy bin
    if (!fs.existsSync(path.resolve(dist, "bin"))) {
        fs.mkdirSync(path.resolve(dist, "bin"));
    }
    fs.copyFileSync(path.resolve(root, "./bin/generate-api"), path.resolve(dist, "./bin/generate-api"));

    // Copy templates
    ncp(path.resolve(src, "templates"), path.resolve(dist, "templates"), error => {
        if (error) {
            throw error;
        }
    });
}

writePackage();
copyFiles();