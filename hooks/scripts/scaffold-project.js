const fs = require("fs");
const path = require("path");

function copyDir(src, dest) {
  fs.mkdirSync(dest, { recursive: true });

  for (const file of fs.readdirSync(src)) {
    const srcPath = path.join(src, file);
    const destPath = path.join(dest, file);

    if (fs.lstatSync(srcPath).isDirectory()) {
      copyDir(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

const template = process.argv[2]; // e.g. cli-node
const target = process.argv[3];   // e.g. projects/todo-cli

copyDir(`templates/${template}`, target);

console.log(`Project scaffolded at ${target}`);