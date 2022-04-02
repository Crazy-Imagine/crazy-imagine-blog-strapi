#!/bin/bash
cd /home/ubuntu
sudo nvm use v16.14.2
sudo /usr/bin/pm2 stop ecosystem.config.js
