---
name: path-generator
description: Dynamically generate and persist new learning paths based on user goals and progress
---

# Path Generator

## Purpose
Create new learning paths tailored to:
- User goals
- Current skill level
- Current project progress

Paths must be stored in:
memory/learning-paths/

## When to Trigger

Generate a new path when:
- User expresses a new goal
- User chooses a new direction
- Existing paths do not fit current needs
- User completes a major milestone

## Path Creation Rules

Each generated path MUST include:

# Path Name

## Target Outcome
Clear, concrete result

## Required Concepts
Only what is needed (no fluff)

## Milestones (5–8)
Each milestone must:
- Represent real progress
- Introduce minimal new concepts

## Difficulty Progression
Beginner → Intermediate → Advanced (if applicable)

## Branching Options
At least 3 meaningful next directions

## Estimated Duration
Realistic timeframe

## Path Design Principles

- Must be project-based
- Must start simple
- Must scale gradually
- Must avoid cognitive overload

## Naming Convention

File:
memory/learning-paths/<kebab-case-name>.md

Examples:
- chat-app-path.md
- game-engine-path.md
- ai-cli-tool-path.md

## Adaptation Logic

If user is:
- Beginner → simplify milestones
- Intermediate → increase abstraction
- Struggling → reduce scope
- Confident → increase challenge

## Anti-Patterns

Do NOT:
- Create generic learning plans
- Include unnecessary theory
- Overload milestones
- Skip progression steps

## Goal

Paths should feel like:
→ “I can actually build this”