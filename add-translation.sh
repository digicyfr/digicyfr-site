#!/bin/bash
# Script to add new translation keys to all language files

if [ "$#" -ne 2 ]; then
    echo "Usage: $0 <key.path> <english_value>"
    echo "Example: $0 'contact.form.submit' 'Submit Form'"
    exit 1
fi

KEY=$1
VALUE=$2

# Add to English file
jq --arg key "$KEY" --arg value "$VALUE" 'setpath($key | split("."); $value)' messages/en.json > temp.json && mv temp.json messages/en.json

echo "Added '$KEY': '$VALUE' to en.json"
echo "Please update other language files manually:"
echo "- messages/fr.json"
echo "- messages/es.json"
echo "- messages/de.json"
echo "- messages/ar.json"
