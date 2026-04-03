const fs = require("fs");

const MEMORY_FILE = "memory/MEMORY.md";

// Expect structured input from runtime
const input = JSON.parse(process.env.AGENT_CONTEXT || "{}");

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

function adjustDifficulty(current, action) {
  const levels = ["guided", "supported", "independent", "challenged"];
  let idx = levels.indexOf(current);

  if (action === "success" && idx < levels.length - 1) idx++;
  if (action === "struggle" && idx > 0) idx--;

  return levels[idx];
}

function updateMemory(content, input) {
  let updated = content;

  const difficultyMatch = content.match(/Difficulty Level:\s*(.*)/i);
  const currentDifficulty = difficultyMatch
    ? difficultyMatch[1].trim()
    : "guided";

  const newDifficulty = adjustDifficulty(currentDifficulty, input.action);

  // Core updates
  if (input.current_project)
    updated = updateField(updated, "Current Project", input.current_project);

  if (input.current_milestone)
    updated = updateField(updated, "Current Milestone", input.current_milestone);

  if (input.current_step)
    updated = updateField(updated, "Current Step", input.current_step);

  updated = updateField(updated, "Difficulty Level", newDifficulty);

  // Session mode
  if (input.mode)
    updated = updateField(updated, "Mode", input.mode);

  // Progress tracking
  if (input.action === "progress" && input.current_step) {
    updated = appendToSection(
      updated,
      "Completed Steps",
      input.current_step
    );
  }

  // Signals
  if (input.action === "struggle") {
    updated = updateField(updated, "Struggle Frequency", "increasing");
    updated = updateField(updated, "Confidence Trend", "decreasing");
  }

  if (input.action === "success") {
    updated = updateField(updated, "Struggle Frequency", "low");
    updated = updateField(updated, "Confidence Trend", "increasing");
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
  const content = fs.readFileSync(MEMORY_FILE, "utf-8");
  const updated = updateMemory(content, input);
  fs.writeFileSync(MEMORY_FILE, updated);
  console.log("Memory updated intelligently");
} catch (err) {
  console.error("Memory update failed:", err);
}