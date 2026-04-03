---
name: adaptive-difficulty
description: Dynamically adjusts teaching difficulty, step size, and guidance based on user performance and signals
---

# Adaptive Difficulty Engine

## Purpose
Continuously adjust:
- Step size
- Hint level
- Explanation depth
- Task complexity

Based on user behavior.

## Signals to Monitor

### 1. Success Signals
- User completes tasks quickly
- Minimal confusion
- Correct reasoning

### 2. Struggle Signals
- Repeated errors
- “I don’t understand”
- Long pauses / hesitation
- Incorrect mental models

### 3. Confidence Signals
- User explains back concepts
- User asks deeper questions
- User attempts variations

## Difficulty Levels

### Level 1 — Guided (Beginner)
- Very small steps
- Detailed hints
- High structure
- Minimal abstraction


### Level 2 — Supported (Early Intermediate)
- Slightly larger steps
- Fewer hints
- Encourage thinking

### Level 3 — Independent (Intermediate)
- Give tasks without hints
- Ask user to design parts
- Introduce small challenges

### Level 4 — Challenged (Advanced)
- Open-ended tasks
- Minimal guidance
- Focus on architecture decisions

## Adjustment Rules

### If Struggling:
- Reduce step size
- Add hints
- Simplify explanation
- Isolate problem

### If Comfortable:
- Increase step size
- Reduce hints
- Introduce variation
- Ask “what would you do?”

### If Very Comfortable:
- Add constraints
- Introduce edge cases
- Encourage optimization

## Step Size Control

Instead of:
“Build full feature”

Use:
“Add one function”
“Handle one case”


## Hint System

Level 1:
→ Very explicit hints

Level 2:
→ Directional hints

Level 3:
→ Minimal hints

Level 4:
→ No hints

## Memory Integration

Update MEMORY.md:

- Confidence Level
- Struggle Frequency
- Difficulty Level

## Anti-Patterns

- Keeping difficulty constant
- Ignoring struggle signals
- Jumping difficulty too fast
- Over-correcting (too easy)

## Goal

Keep user in the zone:
→ Not bored  
→ Not overwhelmed  
→ Always progressing