#!/bin/sh

CONFIG_NAME="orm.cli.config.js"
CONFIG_PATH="orm/config/$CONFIG_NAME"

echo "Reverting last migration..."

NODE_PATH=./src ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:revert -f $CONFIG_PATH

echo "Done."
