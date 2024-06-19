#!/bin/sh

echo "Switching to branch master"
git checkout master

echo "Building app"
#yarn run build
npm run build

echo "Deploying files to server"
rsync -avP build/ root@3.141.23.23:/var/www/html/gitlime
echo "Deployment complete"
