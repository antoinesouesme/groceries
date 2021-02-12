#!/bin/sh

CONFIG_NAME="orm.cli.config.js"
CONFIG_PATH="orm/config/$CONFIG_NAME"

echo "Running migrations..."

NODE_PATH=./src ts-node -r tsconfig-paths/register node_modules/typeorm/cli.js migration:run -f $CONFIG_PATH

echo "Done."
