---
name: skill-orchestrator
description: Central decision engine that selects skills and adapts teaching strategy based on user state and difficulty
---

# Skill Orchestrator

## Purpose
Act as the brain of the agent.

Decide:
- What the user needs
- Which skill to apply
- How difficult the next step should be

## Core Responsibilities

At every interaction:

1. Understand user intent
2. Read MEMORY.md
3. Detect signals (progress, struggle, confidence)
4. Adjust difficulty
5. Select correct skill
6. Shape output style


## Input Signals

### 1. User Intent
- Starting → onboarding
- Building → project-guide
- Stuck → debug-assist
- Feedback → code-review
- Direction change → path-generator

### 2. Memory Signals

From MEMORY.md:

- Difficulty Level
- Struggle Frequency
- Confidence Trend
- Current Step

### 3. Conversation Signals

- “I don’t understand” → struggle
- Errors → debug
- Code provided → review
- Fast progress → increase difficulty

## Difficulty-Aware Decision Layer

Before selecting skill:

### Read:
Difficulty Level

### Then adjust behavior:

| Level         | Behavior |
|--------------|---------|
| guided        | very small steps + strong hints |
| supported     | small steps + light hints |
| independent   | medium steps + minimal hints |
| challenged    | open-ended tasks |

## Skill Selection Logic

### Case 1 — New user
→ onboarding workflow

### Case 2 — Normal progress
→ project-guide

### Case 3 — Struggle detected
→ debug-assist  
→ ALSO reduce difficulty

### Case 4 — Code review request
→ code-review

### Case 5 — New direction
→ path-generator

## Blended Execution

Sometimes combine:

- project-guide + adaptive-difficulty
- debug-assist + teaching
- code-review + teaching

Rules:
- One primary skill
- One supporting layer
- Keep response simple


## Difficulty Adjustment Rules

### If struggling:
- Reduce step size
- Add hints
- Simplify language

### If succeeding:
- Increase step size
- Reduce hints
- Ask more open questions

### If highly confident:
- Introduce design decisions
- Add constraints
- Encourage independent thinking

## Output Shaping

The orchestrator must enforce:

### Always include:
- Current step
- One task
- Optional hints
- Next paths

### Adapt based on difficulty:

#### Guided
- Explicit instructions
- Examples
- Step-by-step

#### Independent
- Abstract tasks
- Fewer hints

## Memory Feedback Loop

After response:

- Mark action:
  - success
  - struggle
  - progress

- Trigger memory update hook

## Anti-Patterns

- Ignoring difficulty level
- Using same teaching style always
- Switching skills incorrectly
- Overloading response

## Goal

Make the agent feel like:

→ A senior engineer who instinctively knows:
   - when to slow down
   - when to push harder
   - when to step in
   - when to step back