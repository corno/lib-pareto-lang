#!/usr/bin/env bash
dir=`realpath $(dirname "$0")`
cp -R ./node_modules/pareto-buildenvironment/data/projectTemplate/. .. \

#npm messes with .gitignore, that's why I need to handle it separately
cp ./node_modules/pareto-buildenvironment/data/gitignore ../.gitignore \


if [ -d "../pub/" ]
then
    nativeFlag=$(npm --prefix "../pub" pkg get native )
    if [ $nativeFlag != "true" ]
    then
        cp ./node_modules/pareto-buildenvironment/data/tsconfig.json ../pub/
        cp ./node_modules/pareto-buildenvironment/data/_globals.ts ../pub/src/
    fi
fi

parts=("dev" "test")
for part in "${parts[@]}"
do
    if [ -d "../$part/" ]
    then
        cp ./node_modules/pareto-buildenvironment/data/tsconfig.json "../$part/"
        cp ./node_modules/pareto-buildenvironment/data/_globals.ts "../$part/src/"
    fi

done

#update this package because the copied package.json contains an old version of pareto-buildenvironment (by design, the template is not updated every time the package is published)
"$dir/updatePackage.sh" pareto
