#!/bin/sh

# Build the project
echo "\033[1;33m[ Open API ]\033[0m Building project..."
npm run build

# Build the swagger specs
echo "\033[1;33m[ Open API ]\033[0m Creating swagger spec file..."
node dist/src/swagger.js

# Remove the previously generated sdk
echo "\033[1;33m[ Open API ]\033[0m Removing previous build..."
rm -rf dist/client-sdk

# Generate SDK from swagger spec file
echo "\033[1;33m[ Open API ]\033[0m Building SDK..."
openapi-generator-cli generate

echo "\033[1;33m[ Open API ]\033[0m Done."
