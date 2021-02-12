#!/bin/sh

CONFIG_NAME="orm.cli.config.js"
CONFIG_PATH="orm/config/$CONFIG_NAME"

echo "Generating new migration..."

# Run migration script
NODE_PATH=./src ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:generate -f $CONFIG_PATH -n $1

echo "Done."
