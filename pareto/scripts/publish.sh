#!/usr/bin/env bash

scriptDir=`realpath $(dirname "$0")`
rootDir="$scriptDir/../.."

#make sure everything is pushed
git push && \

#validate that everything is committed and pushed (to make sure we're not messing with open work with updatePackage)
git diff --exit-code && git log origin/master..master --exit-code && \

#make sure latest buildenvironment is installed
"$scriptDir/update2latestBuildEnvironment.sh" && \

#make sure latest packages are installed
"$scriptDir/update2latestDependencies.sh" && \

#buildAndTest
"$scriptDir/buildAndTest.sh" && \

#validate that everything is still committed after the update and build
git diff --exit-code && \

#bump version and store in variable
pushd "$rootDir/pub" > /dev/null && \
newVersion=$(npm version "$1") && \
popd && \

#commit package.json with new version number
git add $rootDir && \
git commit -m "version bumped to $newVersion" && \

#create a tag
git tag -a "$newVersion" -m "$newVersion" && \
git push && \

#publish
pushd "$rootDir/pub" > /dev/null && \
npm publish && \
popd
