#!/bin/bash

MEMORY_FILE="memory/MEMORY.md"

if [ -f "$MEMORY_FILE" ]; then
  echo "Memory loaded:"
  cat $MEMORY_FILE
else
  echo "No memory found. Starting fresh."
fi