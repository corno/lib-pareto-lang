#!/usr/bin/env bash

scriptDir=`realpath $(dirname "$0")`
rootDir="$scriptDir/../.."


if [ -d "$1" ]
then
    node $rootDir/pareto/node_modules/pareto-ts-validator-bin/dist/bin/analyseTypeScriptProject.js "$1" > /dev/null #only want the errors
fi && \

