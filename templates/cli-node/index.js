#!/usr/bin/env node

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const tasks = [];

function showMenu() {
  console.log("\n1. Add Task");
  console.log("2. List Tasks");
  console.log("3. Exit");

  rl.question("Choose an option: ", handleInput);
}

function handleInput(choice) {
  if (choice === "1") {
    rl.question("Enter task: ", (task) => {
      tasks.push(task);
      console.log("Task added!");
      showMenu();
    });
  } else if (choice === "2") {
    console.log("\nTasks:");
    tasks.forEach((t, i) => console.log(`${i + 1}. ${t}`));
    showMenu();
  } else {
    rl.close();
  }
}

showMenu();