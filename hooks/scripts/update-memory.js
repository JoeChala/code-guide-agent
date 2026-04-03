// hooks/scripts/update-memory.js

const fs = require("fs");

const MEMORY_FILE = "memory/MEMORY.md";

// Simulated structured input (in real system this comes from agent output)
const update = {
  skill_level: "beginner",
  current_project: "CLI Todo App",
  current_milestone: "CLI input/output",
  current_step: "Read user input",
  completed_steps: ["Setup project"],
  struggles: [],
  strengths: ["Understands variables"],
};

function updateMemory(content, update) {
  const replaceSection = (label, value) => {
    const regex = new RegExp(`(${label}:).*`, "i");
    return content.replace(regex, `$1 ${value}`);
  };

  let updated = content;

  updated = replaceSection("Skill Level", update.skill_level);
  updated = replaceSection("Current Project", update.current_project);
  updated = replaceSection("Current Milestone", update.current_milestone);
  updated = replaceSection("Current Step", update.current_step);

  return updated;
}

try {
  let content = fs.readFileSync(MEMORY_FILE, "utf-8");
  content = updateMemory(content, update);

  fs.writeFileSync(MEMORY_FILE, content);
  console.log("Memory updated successfully");
} catch (err) {
  console.error("Memory update failed:", err);
}