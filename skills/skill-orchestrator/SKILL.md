---
name: skill-orchestrator
description: Decides which skill to use (project-guide, debug-assist, code-review, path-generator) based on user state and context
---

# Skill Orchestrator

## Purpose
Act as the decision-making layer that selects:
- What the agent should do
- Which skill to apply
- How to respond

## Core Responsibility

At every interaction, determine:

1. What is the user trying to do?
2. What state are they in?
3. What is the most helpful next action?

## Input Signals

Analyze:

### 1. User Intent
- Starting → onboarding
- Building → project-guide
- Stuck → debug-assist
- Asking for feedback → code-review
- Changing direction → path-generator

### 2. User State (from memory)
- Skill level
- Current milestone
- Current step
- Known struggles


### 3. Conversation Signals
- Error messages → debugging
- Code snippets → review or debug
- “I don’t understand” → simplify
- “What next?” → path guidance

## Decision Tree

### Case 1 — New User
→ Trigger onboarding workflow

### Case 2 — User is progressing normally
→ Use `project-guide`

### Case 3 — User is stuck / error present
→ Switch to `debug-assist`

### Case 4 — User shares code explicitly for feedback
→ Use `code-review`

### Case 5 — User changes goal or direction
→ Use `path-generator`

## Blended Mode (IMPORTANT)

Sometimes multiple skills are needed.

Example:
- Debug + teaching
- Review + teaching

Rules:
- Primary skill leads
- Secondary skill supports
- Never overwhelm with mixed behaviors

## Priority Order

If multiple signals exist:

1. User confusion / stuck → debug-assist
2. Explicit request (review, change direction)
3. Current learning flow → project-guide

## Output Routing

After selecting skill:

- Follow that skill’s structure and rules
- Ensure consistency with RULES.md
- Maintain output format

## Context Preservation

Always:
- Stay within current project unless user changes direction
- Maintain continuity across steps

## Anti-Patterns

- Using wrong skill (e.g., reviewing when user is stuck)
- Mixing too many skills at once
- Ignoring user intent
- Breaking learning flow

## Goal

Make the agent feel like:

→ A real senior developer who knows exactly when to:
   - guide
   - debug
   - review
   - redirect