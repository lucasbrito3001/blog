#!/bin/bash

echo 'Sudo su'
sudo su

echo 'Going to the app directory'
cd /var/app/blog

echo 'Going to the main branch'
git checkout main

echo 'Pulling the branch changes'
git pull origin main

echo 'Changing to the app directory'
cd app

echo 'Installing dependencies'
yarn

echo 'Building application'
yarn build

echo 'Copying the builded code to public_html directory'
cp -r dist/. /var/www/lucasdbrito.com/public_html