#!/bin/bash

INPUT=$(cat)

# Block unsafe writes outside memory/
if [[ "$INPUT" == *"../"* ]]; then
  echo '{ "action": "block", "reason": "Path traversal detected" }'
  exit 0
fi

# Allow safe writes
echo '{ "action": "allow" }'