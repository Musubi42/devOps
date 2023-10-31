#!/bin/bash

# Check if both username and password are provided as arguments
if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <username> <password>"
    exit 1
fi

# Capture username and password from command line arguments
userName="$1"
password="$2"

# Generate a hashed password
hash="$(htpasswd -nbm "$userName" "$password" | sed -e s/\\$/\\$\\$/g)"

# Print the formatted output
echo "${hash}"

# Specify the directory where you want to create the file
currentDirectory=$(pwd)

if [ -d "${currentDirectory}/users" ]; then
  touch ${currentDirectory}/users/${userName}.u
  echo "${hash}" > ${currentDirectory}/users/${userName}.u
  echo "${hash}" save to ./users/${userName}.u
else 
  echo "At the root of your project you have to create a users directory"
fi
