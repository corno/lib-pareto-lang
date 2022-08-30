#!/usr/bin/env bash


scriptDir=`realpath $(dirname "$0")`
rootDir="$scriptDir/../.."

part="$rootDir/$1"

if [ -d "$part" ]
then
    npx npm-check-updates -u --packageFile "$part/package.json" && \
    npx npm-safe-install -t "$part/"
fi