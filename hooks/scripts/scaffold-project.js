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

const template = process.env.TEMPLATE;
const projectName = process.env.PROJECT_NAME;

if (!template || !projectName) {
  console.log("No scaffolding triggered");
  process.exit(0);
}

const targetDir = `projects/${projectName}`;

// Prevent overwrite
if (fs.existsSync(targetDir)) {
  console.log("Project already exists, skipping");
  process.exit(0);
}

copyDir(`templates/${template}`, targetDir);

console.log(`Project created at ${targetDir}`);