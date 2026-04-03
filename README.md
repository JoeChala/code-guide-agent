# GitAgent Code Mentor

A project-based programming tutor built using the GitAgent architecture that teaches users by helping them build real software step-by-step.

## Overview

Most beginners struggle because tutorials teach concepts in isolation, while real-world coding requires building complete systems.

This project solves that by acting as a senior software engineer mentor that:

- Guides users through real projects
- Adapts to their skill level and pace
- Helps them debug and improve code
- Maintains persistent learning state
- Generates working codebases automatically

## Key Features

### Adaptive Learning Engine
- Adjusts difficulty dynamically based on user progress
- Detects struggle vs confidence
- Keeps users in a productive learning zone

### Project-Based Learning
- No theory dumps — everything is learned by building
- Structured milestones and step-by-step guidance
- Real-world project workflows

### Modular Skill System
- Skill Orchestrator → decision engine
- Project Guide → step-by-step teaching
- Debug Assist → guided debugging
- Code Review → feedback and improvement
- Path Generator → dynamic learning paths
- Adaptive Difficulty → difficulty control

### Persistent Memory System
- Tracks skill level, progress, struggles, learning paths
- Stored in memory/MEMORY.md and memory/learning-paths/

### Real Project Generation
- CLI apps → templates/cli-node/
- Backend APIs → templates/express-api/
- Frontend apps → templates/react-app/
- Generated inside projects/

### Tool-Driven Execution
- scaffold-project → creates real codebases
- update-memory → structured state updates
- read, write, memory → core operations

### Session-Aware Learning
- Onboarding and session resume
- Maintains continuity using memory

## Project Structure

code-guide-agent/
├── agent.yaml
├── SOUL.md
├── RULES.md
├── AGENTS.md
├── DUTIES.md
├── memory/
├── skills/
├── workflows/
├── hooks/
├── tools/
├── templates/
├── projects/
├── knowledge/
└── examples/

## How It Works

User Input → Skill Orchestrator → Memory + Difficulty → Skill → Tool Execution → Hooks → Memory Update

## etting Started

### Prerequisites
- Node.js (v18+)
- npm
- Git

### Setup
```bash
git clone https://github.com/JoeChala/code-guide-agent
cd code-guide-agent
npm install
```

### Run
```bash
npx gitagent export -f claude-code
```

### Example Prompts
- I want to learn programming
- Help me build a CLI app
- Start a backend project
- I’m stuck with this code

### Run Generated Project
cd projects/todo-cli
node index.js

### View Progress
Open memory/MEMORY.md

## Example Workflow
1. Start project
2. Scaffold code
3. Complete tasks
4. Adaptive difficulty
5. Debugging help
6. Memory updates

## Design Principles
- Project-first learning
- Just-in-time concepts
- Adaptive difficulty
- Incremental progress

## What Makes This Unique
- AI + real coding environment
- Git-native agent architecture
- Persistent learning intelligence
- Senior developer mentorship behavior

## Future Improvements
- Difficulty scoring
- Template evolution
- Multi-agent system
- Web UI

## License
MIT License

## Summary
A stateful, adaptive, project-based learning system that teaches programming by helping users build real software.
