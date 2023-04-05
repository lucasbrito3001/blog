#!/bin/bash
echo 'Going to the app directory'
cd /var/app/blog

echo 'Going to the main branch'
git checkout main

echo 'Pulling the branch changes'
git pull origin main

echo 'Changing to the api directory'
cd api

echo 'Installing dependencies'
yarn

echo 'Running application'
yarn prod