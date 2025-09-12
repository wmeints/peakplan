#!/bin/bash

# Load the node version manager scripts automatically
. ${NVM_DIR}/nvm.sh && nvm install --lts

# Restore the packages
pushd /workspace/backend && bundle && popd
pushd /workspace/frontend && npm install --force && popd