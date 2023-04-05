#!/bin/bash
echo 'Going to the app directory'
cd /var/app/blog
echo 'Done'\n

echo 'Going to the main branch'
git checkout main
echo 'Done'\n

echo 'Pulling the branch changes'
git pull origin main
echo 'Done'\n

echo 'Changing to the app directory'
cd app
echo 'Done'\n

echo 'Installing dependencies'
yarn
echo 'Done'\n

echo 'Building application'
yarn build
echo 'Done'\n

echo 'Copying the builded code to public_html directory'
cp -r dist/. /var/www/lucasdbrito.com/public_html
echo 'Done'\n