FROM node:slim

WORKDIR /FINAL_PORTFOLIO_PROJECT

COPY index.js /FINAL_PORTFOLIO_PROJECT/index.js
COPY package.json /FINAL_PORTFOLIO_PROJECT/
RUN npm install