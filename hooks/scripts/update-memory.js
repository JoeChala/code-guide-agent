// hooks/scripts/update-memory.js

const fs = require("fs");

const MEMORY_FILE = "memory/MEMORY.md";

const input = {
  action: "progress", // progress | struggle | success | new_project
  current_project: "CLI Todo App",
  current_milestone: "CLI input/output",
  current_step: "Read user input",
};

function updateField(content, field, value) {
  const regex = new RegExp(`(${field}:).*`, "i");
  return content.replace(regex, `$1 ${value}`);
}

function appendToSection(content, section, line) {
  const regex = new RegExp(`(${section}[\\s\\S]*?)(\\n##|$)`, "i");
  return content.replace(regex, (match, group1, group2) => {
    if (group1.includes(line)) return match;
    return `${group1}- ${line}\n${group2}`;
  });
}


function adjustDifficulty(memory, action) {
  let level = memory.difficulty || "guided";

  const order = ["guided", "supported", "independent", "challenged"];
  let idx = order.indexOf(level);

  if (action === "success" && idx < order.length - 1) {
    idx++;
  }

  if (action === "struggle" && idx > 0) {
    idx--;
  }

  return order[idx];
}

function updateMemory(content, input) {
  let updated = content;

  // Extract current difficulty
  const difficultyMatch = content.match(/Difficulty Level:\s*(.*)/i);
  const currentDifficulty = difficultyMatch
    ? difficultyMatch[1].trim()
    : "guided";

  const newDifficulty = adjustDifficulty(
    { difficulty: currentDifficulty },
    input.action
  );

  // Update core fields
  updated = updateField(updated, "Current Project", input.current_project);
  updated = updateField(updated, "Current Milestone", input.current_milestone);
  updated = updateField(updated, "Current Step", input.current_step);

  // Update intelligence section
  updated = updateField(updated, "Difficulty Level", newDifficulty);

  if (input.action === "struggle") {
    updated = updateField(updated, "Struggle Frequency", "increasing");
    updated = updateField(updated, "Confidence Trend", "decreasing");
  }

  if (input.action === "success") {
    updated = updateField(updated, "Struggle Frequency", "low");
    updated = updateField(updated, "Confidence Trend", "increasing");
  }

  // Track completed steps
  if (input.action === "progress") {
    updated = appendToSection(
      updated,
      "Completed Steps",
      input.current_step
    );
  }

  // Timestamp
  updated = updateField(
    updated,
    "Timestamp",
    new Date().toISOString().split("T")[0]
  );

  return updated;
}

try {
  let content = fs.readFileSync(MEMORY_FILE, "utf-8");
  const updated = updateMemory(content, input);
  fs.writeFileSync(MEMORY_FILE, updated);
  console.log("Smart memory updated");
} catch (err) {
  console.error("Memory update failed:", err);
}