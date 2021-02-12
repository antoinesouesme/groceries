# #!/bin/sh

# # Build the sdk first
# sh open-api/build-sdk.sh

# # Then copy it according to the
# if [ "$(uname)" == "Darwin" ] || [ "$(expr substr $(uname -s) 1 5)" == "Linux" ]; then
#     # macOS or linux

#     # Get the env vars from .env file
#     set -o allexport [[ -f ./.env ]]
#     . ./.env set +o allexport

#     # Remove the folder at destination (clean)
#     rm -rf $WEBAPP_PATH/src/assets/libs/client-sdk-ts/*

#     # Copy the sdk
#     cp -rf dist/client-sdk-ts/** "$WEBAPP_PATH/src/assets/libs/client-sdk-ts"

# elif [ "$(expr substr $(uname -s) 1 10)" == "MINGW32_NT" ] || [ "$(expr substr $(uname -s) 1 10)" == "MINGW64_NT" ]; then
#     # Windows
#     echo "Copy error: A .bat script must be written for windows."
# fi
