FROM node:14.17-alpine3.11

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package.json .
COPY yarn.lock .
RUN yarn install --production

# Coying the app
COPY . .

# Building the app
RUN yarn build

# Running the app
CMD [ "yarn", "start" ]
